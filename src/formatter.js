import converter from './converter.js';
import round from './round.js';
import prepare from './_prepare.js';
import { getMode } from './modes.js';

let twoDecimals = round(2);

const clamp = value => Math.max(0, Math.min(1, value));
const fixup = value => Math.round(clamp(value) * 255);

export const serializeHex = color => {
	if (color === undefined) {
		return undefined;
	}

	let r = fixup(color.r);
	let g = fixup(color.g);
	let b = fixup(color.b);

	return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

export const serializeHex8 = color => {
	if (color === undefined) {
		return undefined;
	}

	let a = fixup(color.alpha !== undefined ? color.alpha : 1);
	return serializeHex(color) + ((1 << 8) | a).toString(16).slice(1);
};

export const serializeRgb = color => {
	if (color === undefined) {
		return undefined;
	}

	let r = color.r !== undefined ? fixup(color.r) : 'none';
	let g = color.g !== undefined ? fixup(color.g) : 'none';
	let b = color.b !== undefined ? fixup(color.b) : 'none';

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `rgb(${r}, ${g}, ${b})`;
	} else {
		// transparent color
		return `rgba(${r}, ${g}, ${b}, ${twoDecimals(clamp(color.alpha))})`;
	}
};

export const serializeHsl = color => {
	if (color === undefined) {
		return undefined;
	}

	const h = twoDecimals(color.h || 0);
	const s =
		color.s !== undefined
			? twoDecimals(clamp(color.s) * 100) + '%'
			: 'none';
	const l =
		color.l !== undefined
			? twoDecimals(clamp(color.l) * 100) + '%'
			: 'none';

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `hsl(${h}, ${s}, ${l})`;
	} else {
		// transparent color
		return `hsla(${h}, ${s}, ${l}, ${twoDecimals(clamp(color.alpha))})`;
	}
};

export const formatCss = c => {
	const color = prepare(c);
	if (!color) {
		return undefined;
	}
	const def = getMode(color.mode);
	if (!def.serialize || typeof def.serialize === 'string') {
		let res = `color(${def.serialize || `--${color.mode}`} `;
		def.channels.forEach((ch, i) => {
			if (ch !== 'alpha') {
				res +=
					(i ? ' ' : '') +
					(color[ch] !== undefined ? color[ch] : 'none');
			}
		});
		if (color.alpha !== undefined && color.alpha < 1) {
			res += ` / ${color.alpha}`;
		}
		return res + ')';
	}
	if (typeof def.serialize === 'function') {
		return def.serialize(color);
	}
	return undefined;
};

export const formatHex = c => serializeHex(converter('rgb')(c));
export const formatHex8 = c => serializeHex8(converter('rgb')(c));
export const formatRgb = c => serializeRgb(converter('rgb')(c));
export const formatHsl = c => serializeHsl(converter('hsl')(c));
