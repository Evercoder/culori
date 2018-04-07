import converter from './converter';
import normalizeHue from './util/normalizeHue';
import zip from './zip';
import { getModeDefinition } from './modes';

const linear = (a, b, t) => a + t * (b - a);

const interpolateLinear = arr => 
	t => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;
			
		if (a !== undefined && b !== undefined) return linear(a, b, t0);
		return a === undefined ? b : a;
	};

const interpolateHue = arr => 
	t => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		if (a !== undefined && b !== undefined) {
			a = normalizeHue(a); b = normalizeHue(b);
			return Math.abs(b - a) > 180 ? 
				normalizeHue(linear(a, b - 360 * Math.sign(b - a), t0))
				: linear(a, b, t0);
		}
		return a === undefined ? b : a;
	}

const interpolateAlpha = arr => 
	t => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		if (
			(a === undefined && b === undefined) ||
			(a === undefined && t === 0) ||
			(b === undefined && t === 1)
		) return undefined;
		return linear(a === undefined ? 1 : a, b === undefined ? 1: b, t0);
	}

const interpolate = (colors, mode = 'rgb', interpolations) => {
	let zipped = zip(mode)(colors.map(converter(mode)));
	interpolations = interpolations || getModeDefinition(mode).interpolate;
	let mappings = {};
	Object.keys(interpolations).forEach(k => {
		mappings[k] = interpolations[k](zipped[k]);
	});

	return t => {
		t = Math.min(Math.max(0, t), 1);
		let res = { mode: mode }, val;
		Object.keys(mappings).forEach(k => {
			if ((val = mappings[k](t)) !== undefined) {
				res[k] = val;
			}
		});
		return res;
	}
}

export {
	interpolate as default,
	interpolateAlpha,
	interpolateLinear,
	interpolateHue
}