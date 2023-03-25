import converter from './converter.js';
import prepare from './_prepare.js';
import { getMode } from './modes.js';
import { differenceEuclidean } from './difference.js';

const rgb = converter('rgb');
const fixup_rgb = c => {
	c.r = Math.max(0, Math.min(c.r, 1));
	c.g = Math.max(0, Math.min(c.g, 1));
	c.b = Math.max(0, Math.min(c.b, 1));
	return c;
};

const inrange_rgb = c => {
	return (
		c !== undefined &&
		c.r >= 0 &&
		c.r <= 1 &&
		c.g >= 0 &&
		c.g <= 1 &&
		c.b >= 0 &&
		c.b <= 1
	);
};

/*
	Returns whether the color is in the sRGB gamut.
 */
export function displayable(color) {
	return inrange_rgb(rgb(color));
}

/*
	Given a color space `mode`, returns a function
	with which to check whether a color is 
	in that color space's gamut.
 */
export function inGamut(mode = 'rgb') {
	const { gamut } = getMode(mode);
	if (!gamut) {
		return color => true;
	}
	const conv = converter(typeof gamut === 'string' ? gamut : mode);
	return color => inrange_rgb(conv(color));
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

	return conv(fixup_rgb(rgb(color)));
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
	const { gamut } = getMode(mode);
	if (!gamut) {
		return color => prepare(color);
	}
	const destMode = typeof gamut === 'string' ? gamut : mode;
	const destConv = converter(destMode);
	const inDestGamut = inGamut(destMode);
	return color => {
		const original = prepare(color);
		if (!original) {
			return undefined;
		}
		const converted = destConv(original);
		if (inDestGamut(converted)) {
			return original;
		}
		const clamped = fixup_rgb(converted);
		if (original.mode === clamped.mode) {
			return clamped;
		}
		return converter(original.mode)(clamped);
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
		return conv(fixup_rgb(rgb(clamped)));
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
