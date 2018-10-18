import converter from './converter';
import displayable from './displayable';
import identity from './util/identity';
import parse from './parse';

let lch = converter('lch');
let rgb = converter('rgb');

const prepare = color =>
	color === undefined
		? undefined
		: typeof color !== 'object'
			? parse(color)
			: color.mode === undefined
				? undefined
				: color;

const clamp_value = v => Math.max(0, Math.min(v, 1));
const clamp_rgb = color => {
	let c = rgb(color);
	c.r = clamp_value(c.r);
	c.g = clamp_value(c.g);
	c.b = clamp_value(c.b);
	return c;
};

export default (method = 'rgb') => color => {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	if (method === 'rgb') {
		return conv(clamp_rgb(color));
	}

	// convert to LCh for clamping
	color = lch(color);

	// try with chroma = 0
	let clamped = { ...color, c: 0 };

	// if not even chroma = 0 is displayable
	// fall back to RGB clamping
	if (!displayable(clamped)) {
		return conv(clamp_rgb(clamped));
	}

	// By this time we know chroma = 0 is displayable and our current chroma is not.
	// Find the displayable chroma through the bisection method.
	let start = 0,
		end = color.c,
		delta = 0.01;

	while (end - start > delta) {
		clamped.c = start + (end - start) * 0.5;
		if (displayable(clamped)) {
			start = clamped.c;
		} else {
			end = clamped.c;
		}
	}

	return conv(clamped);
};
