import converter from './converter';
import round from './round';
import fixup from './util/fixup';

let rgb = converter('rgb');
let roundAlpha = round(2);

const formatHex = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let r = fixup(color.r);
	let g = fixup(color.g);
	let b = fixup(color.b);

	return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const formatRgb = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let r = fixup(color.r);
	let g = fixup(color.g);
	let b = fixup(color.b);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `rgb(${r}, ${g}, ${b})`;
	} else {
		// transparent color
		return `rgba(${r}, ${g}, ${b}, ${roundAlpha(color.alpha)})`;
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

export { formatHex, formatRgb, formatter };
