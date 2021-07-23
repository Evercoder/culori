import converter from './converter';
import round from './round';

let rgb = converter('rgb');
let hsl = converter('hsl');
let roundAlpha = round(2);

const clamp = value => Math.max(0, Math.min(1, value));
const fixup = (value, coeff = 1) => Math.round(clamp(value) * coeff);

const formatHex = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let r = fixup(color.r, 255);
	let g = fixup(color.g, 255);
	let b = fixup(color.b, 255);

	return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const formatHex8 = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let a = fixup(color.alpha !== undefined ? color.alpha : 1, 255);

	return formatHex(color) + ((1 << 8) | a).toString(16).slice(1);
};

const formatRgb = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let r = fixup(color.r, 255);
	let g = fixup(color.g, 255);
	let b = fixup(color.b, 255);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `rgb(${r}, ${g}, ${b})`;
	} else {
		// transparent color
		return `rgba(${r}, ${g}, ${b}, ${roundAlpha(clamp(color.alpha))})`;
	}
};

const formatHsl = c => {
	let color = hsl(c);

	if (color === undefined) {
		return undefined;
	}

	const h = Math.round(color.h || 0);
	const s = fixup(color.s, 100);
	const l = fixup(color.l, 100);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `hsl(${h}, ${s}%, ${l}%)`;
	} else {
		// transparent color
		return `hsla(${h}, ${s}%, ${l}%, ${roundAlpha(clamp(color.alpha))})`;
	}
};

// Deprecated / no longer documented
const formatter = (format = 'rgb') => {
	switch (format) {
		case 'rgb':
			return formatRgb;
		case 'hex':
			return formatHex;
	}
	return undefined;
};

export { formatHex, formatHex8, formatRgb, formatHsl, formatter };
