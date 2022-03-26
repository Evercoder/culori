import converter from './converter.js';
import prepare from './_prepare.js';
import { getMode } from './modes.js';
import { differenceEuclidean } from './difference.js';

const rgb = converter('rgb');

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

const fixup_rgb = color => {
	const c = rgb(color);
	c.r = Math.max(0, Math.min(c.r, 1));
	c.g = Math.max(0, Math.min(c.g, 1));
	c.b = Math.max(0, Math.min(c.b, 1));
	return c;
};

export const clampRgb = color => {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	return conv(fixup_rgb(color));
};

export const clampChroma = (color, mode = 'lch') => {
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
};

export function inGamut(gamut = 'rgb') {
	const gamutConverter = converter(gamut);
	const { channels, ranges } = getMode(gamut);
	return color => {
		const c = gamutConverter(color);
		if (c === undefined) {
			return undefined;
		}
		return channels.every(
			ch =>
				ch === 'alpha' ||
				(c[ch] >= ranges[ch][0] && c[ch] <= ranges[ch][1])
		);
	};
}

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

export function toGamut(
	gamut = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch'),
	jnd = 0.02
) {
	const isInGamut = inGamut(gamut);
	const clip = clampGamut(gamut);
	const gamutConverter = converter(gamut);
	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	return color => {
		color = prepare(color);
		if (color === undefined) {
			return undefined;
		}
		const c = ucs(color);
		if (c.l >= ranges.l[1]) {
			const res = { mode: gamut, r: 1, g: 1, b: 1 };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (c.l <= ranges.l[0]) {
			const res = { mode: gamut, r: 0, g: 0, b: 0 };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (isInGamut(c)) {
			return gamutConverter(c);
		}

		let min = 0;
		let max = c.c;
		let resolution = (ranges.c[1] - ranges.c[0]) / Math.pow(2, 13);
		let clipped;
		let _last_good_c;
		while (max - min > resolution) {
			c.c = (min + max) * 0.5;
			if (isInGamut(c)) {
				min = c.c;
				_last_good_c = c.c;
			} else {
				clipped = clip(c);
				if (delta(clipped, c) < jnd) {
					return clipped;
				} else {
					max = c.c;
				}
			}
		}
		return gamutConverter(isInGamut(c) ? c : { ...c, c: _last_good_c });
	};
}
