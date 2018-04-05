import converter from './converter';
import normalizeHue from './util/normalizeHue';
import { getChannels } from './modes';

const linear = (a, b, t) => a + t * (b - a);

const generic = (a, b, t) => {
	if (a !== undefined && b !== undefined) return linear(a, b, t);
	return a === undefined ? b : a;
}

const hue = (a, b, t) => {
	if (a !== undefined && b !== undefined) {
		a = normalizeHue(a); b = normalizeHue(b);
		return Math.abs(b - a) > 180 ? 
			normalizeHue(linear(a, b - 360 * Math.sign(b - a), t))
			: linear(a, b, t);
	}
	return a === undefined ? b : a;
}

const alpha = (a, b, t) => {
	if (
		(a === undefined && b === undefined) ||
		(a === undefined && t === 0) ||
		(b === undefined && t === 1)
	) return undefined;
	return linear(a === undefined ? 1 : a, b === undefined ? 1: b, t);
}

const method = {
	'h': hue,
	'alpha': alpha
}

const interpolate = (seeds, mode = 'rgb') => {
	if (seeds.length < 2) {
		return undefined;
	}

	let colors = seeds.map(converter(mode));
	let channels = getChannels(mode);
	let startColor, endColor, cls, idx, t0, res, val;

	return t => {

		// clamp t to [0, 1]
		t = Math.min(Math.max(0, t), 1);

		// find out between which two colors we need to interpolate
		cls = t * (colors.length - 1);
		idx = Math.floor(cls);
		startColor = colors[idx];
		endColor = t === 1 ? colors[idx] : colors[idx + 1];
		t0 = cls - idx;

		res = { mode: mode };
		channels.forEach(k => {
			if ((val = (method[k] || generic)(startColor[k], endColor[k], t0)) !== undefined) {
				res[k] = val;
			}
		});

		return res;
	};
};

export default interpolate;