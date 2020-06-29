import converter from './converter';
import displayable from './displayable';
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

const fixup_rgb = color => {
	let c = rgb(color);
	c.r = Math.max(0, Math.min(c.r, 1));
	c.g = Math.max(0, Math.min(c.g, 1));
	c.b = Math.max(0, Math.min(c.b, 1));
	return c;
};

const clampRgb = color => {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	return conv(fixup_rgb(color));
};

const clampChroma = color => {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) return color;

	// keep track of color's original mode
	let conv = converter(color.mode);

	// convert to LCh for clamping
	color = lch(color);

	// try with chroma = 0
	let clamped = { ...color, c: 0 };

	// if not even chroma = 0 is displayable
	// fall back to RGB clamping
	if (!displayable(clamped)) {
		return conv(fixup_rgb(color));
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

const clamp = (method = 'rgb') => {
	console.warn(
		'culori.clamp() is deprecated and will be removed from the 1.x release.'
	);
	switch (method) {
		case 'rgb':
			return clampRgb;
		case 'lch':
			return clampChroma;
	}
};

export { clampRgb, clampChroma, clamp };
