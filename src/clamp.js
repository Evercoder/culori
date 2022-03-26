import converter from './converter.js';
import prepare from './_prepare.js';
import { getMode } from './modes.js';
import { differenceEuclidean } from './difference.js';

const rgb = converter('rgb');
const fixup_rgb = color => {
	const c = rgb(color);
	c.r = Math.max(0, Math.min(c.r, 1));
	c.g = Math.max(0, Math.min(c.g, 1));
	c.b = Math.max(0, Math.min(c.b, 1));
	return c;
};

/*
	Returns whether the color is in the sRGB gamut.
 */
export function displayable(color) {
	const c = rgb(color);
	return (
		c !== undefined &&
		c.r >= 0 &&
		c.r <= 1 &&
		c.g >= 0 &&
		c.g <= 1 &&
		c.b >= 0 &&
		c.b <= 1
	);
}

/*
	Given a color space `mode`, returns a function
	with which to check whether a color is 
	in that color space's gamut.
 */
export function inGamut(mode = 'rgb') {
	const conv = converter(mode);
	const { channels, ranges } = getMode(mode);
	return color => {
		const c = conv(color);
		return (
			c !== undefined &&
			channels.every(
				ch =>
					ch === 'alpha' ||
					(c[ch] >= ranges[ch][0] && c[ch] <= ranges[ch][1])
			)
		);
	};
}

/*
	Obtain a color that's in the sRGB gamut
	by converting it to sRGB and clipping the channel values
	so that they're within the [0, 1] range.

	The result is returned in the color's original color space.
 */
export function clampRgb(color) {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	return conv(fixup_rgb(color));
}

/*
	Given the `mode` color space, returns a function
	with which to obtain a color that's in gamut for
	the `mode` color space by clipping the channel values
	so that they fit in their respective ranges.

	It's similar to `clampRgb`, but works for any 
	bounded color space (RGB or not) for which 
	any combination of in-range channel values
	produces an in-gamut color.
 */
export function clampGamut(mode = 'rgb') {
	const gamutConverter = converter(mode);
	const { channels, ranges } = getMode(mode);
	return color => {
		const c = gamutConverter(color);
		if (c === undefined) {
			return undefined;
		}
		return channels.reduce(
			(res, ch) => {
				if (c[ch] !== undefined) {
					if (ch === 'alpha') {
						res.alpha = c.alpha;
					} else {
						res[ch] = Math.max(
							Math.min(c[ch], ranges[ch][1]),
							ranges[ch][0]
						);
					}
				}
				return res;
			},
			{ mode }
		);
	};
}

/*
	Obtain a color that's in the sRGB gamut
	by first converting it to `mode` and then
	finding the the greatest chroma value
	that fits the gamut.

	By default, the CIELCh color space is used,
	but any color that has a chroma component will do.

	The result is returned in the color's original color space.
 */
export function clampChroma(color, mode = 'lch') {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	// convert to the provided `mode` for clamping
	color = converter(mode)(color);

	// try with chroma = 0
	let clamped = { ...color, c: 0 };

	// if not even chroma = 0 is displayable
	// fall back to RGB clamping
	if (!displayable(clamped)) {
		return conv(fixup_rgb(clamped));
	}

	// By this time we know chroma = 0 is displayable and our current chroma is not.
	// Find the displayable chroma through the bisection method.
	let start = 0;
	let end = color.c;
	let range = getMode(mode).ranges.c;
	let resolution = (range[1] - range[0]) / Math.pow(2, 13);
	let _last_good_c;

	while (end - start > resolution) {
		clamped.c = start + (end - start) * 0.5;
		if (displayable(clamped)) {
			_last_good_c = clamped.c;
			start = clamped.c;
		} else {
			end = clamped.c;
		}
	}

	return conv(
		displayable(clamped) ? clamped : { ...clamped, c: _last_good_c }
	);
}

/*
	Obtain a color that's in the `dest` gamut,
	by first converting it to the `mode` color space
	and then finding the largest chroma that's in gamut,
	similar to `clampChroma`. 

	To address the shortcomings of `clampChroma`, which can
	sometimes produce colors more desaturated than necessary,
	at every step of the iteration the candidate color 
	is compared to the clipped version (obtained with `clampGamut`),
	and if the colors are not to dissimilar (judged by the `delta`
	color difference function and an associated `jnd` 
	just-noticeable difference value), returns the clipped version.

	The default arguments for this function correspond to the
	gamut mapping algorithm defined in CSS Color Level 4:

	https://drafts.csswg.org/css-color/#css-gamut-mapping
 */
export function toGamut(
	dest = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch'),
	jnd = 0.02
) {
	const inDestinationGamut = inGamut(dest);
	const clipToGamut = clampGamut(dest);
	const destConv = converter(dest);

	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	const gamutDef = getMode(dest);
	const White = { mode: dest };
	const Black = { mode: dest };
	gamutDef.channels.forEach(ch => {
		Black[ch] = gamutDef.ranges[ch][0];
		White[ch] = gamutDef.ranges[ch][1];
	});

	return color => {
		color = prepare(color);
		if (color === undefined) {
			return undefined;
		}
		const candidate = ucs(color);
		const initial = { ...candidate };
		if (candidate.l >= ranges.l[1]) {
			const res = { ...White };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (candidate.l <= ranges.l[0]) {
			const res = { ...Black };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (inDestinationGamut(candidate)) {
			return destConv(candidate);
		}

		let start = 0;
		let end = candidate.c;
		/* Corresponds to about a dozen steps */
		let ε = (ranges.c[1] - ranges.c[0]) / 8000;
		let bestClipped = clipToGamut(candidate);
		let bestDelta = delta(candidate, bestClipped);
		let clipped, cd;
		while (end - start > ε) {
			candidate.c = (start + end) * 0.5;

			if (cd < bestDelta) {
				bestClipped = clipped;
				bestDelta = cd;
			}
			if (inDestinationGamut(candidate)) {
				start = candidate.c;
			} else {
				clipped = clipToGamut(candidate);
				cd = delta(candidate, clipped);
				end = candidate.c;
			}
		}
		if (delta(initial, bestClipped) < delta(initial, candidate)) {
			return bestClipped;
		}
		return destConv(candidate);
	};
}
