import converter from './converter.js';
import round from './round.js';
import prepare from './_prepare.js';
import { getModeDefinition } from './modes.js';

let rgb = converter('rgb');
let hsl = converter('hsl');
let twoDecimals = round(2);

const clamp = value => Math.max(0, Math.min(1, value));
const fixup = value => Math.round(clamp(value) * 255);

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

const formatHex8 = c => {
	let color = rgb(c);

	if (color === undefined) {
		return undefined;
	}

	let a = fixup(color.alpha !== undefined ? color.alpha : 1);

	return formatHex(color) + ((1 << 8) | a).toString(16).slice(1);
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
		return `rgba(${r}, ${g}, ${b}, ${twoDecimals(clamp(color.alpha))})`;
	}
};

const formatHsl = c => {
	let color = hsl(c);

	if (color === undefined) {
		return undefined;
	}

	const h = twoDecimals(color.h || 0);
	const s = twoDecimals(clamp(color.s) * 100);
	const l = twoDecimals(clamp(color.l) * 100);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return `hsl(${h}, ${s}%, ${l}%)`;
	} else {
		// transparent color
		return `hsla(${h}, ${s}%, ${l}%, ${twoDecimals(clamp(color.alpha))})`;
	}
};

const formatCss = c => {
	const color = prepare(c);
	if (!color) {
		return undefined;
	}
	const def = getModeDefinition(color.mode);
	if (!def.serialize || typeof def.serialize === 'string') {
		let res = def.serialize || `color(--${color.mode} `;
		def.channels.forEach((ch, i) => {
			if (ch !== 'alpha') {
				res += (i ? ' ' : '') + (color[ch] || 0);
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

export { formatHex, formatHex8, formatRgb, formatHsl, formatCss, formatter };
