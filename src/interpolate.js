import converter from './converter';
import normalizeHue from './util/normalizeHue';
import zip from './zip';
import { getModeDefinition } from './modes';

const interpolateMethodLinear = (a, b, t, gamma = 1) => a + Math.pow(t, gamma) * (b - a);

const interpolateNumber = (method = interpolateMethodLinear, gamma = 1) =>
	(arr, t) => {
			let cls = t * (arr.length - 1), 
				idx = Math.floor(cls),
				a = arr[idx], 
				b = arr[idx + 1], 
				t0 = cls - idx;

			if (a !== undefined && b !== undefined) return method(a, b, t0, gamma);
			return a === undefined ? b : a;
		};

const interpolateHue = (method = interpolateMethodLinear, useShortest = true, gamma = 1) =>
	(arr, t) => {
			let cls = t * (arr.length - 1), 
				idx = Math.floor(cls),
				a = arr[idx], 
				b = arr[idx + 1], 
				t0 = cls - idx;

			if (a !== undefined && b !== undefined) {
				a = normalizeHue(a); b = normalizeHue(b);
				return useShortest && Math.abs(b - a) > 180 ? 
					normalizeHue(method(a, b - 360 * Math.sign(b - a), t0, gamma))
					: method(a, b, t0, gamma);
			}
			return a === undefined ? b : a;
		};

const interpolateAlpha = (method = interpolateMethodLinear, gamma = 1) =>
	(arr, t) => {
			let cls = t * (arr.length - 1), 
				idx = Math.floor(cls),
				a = arr[idx], 
				b = arr[idx + 1], 
				t0 = cls - idx;

			if (
				(a === undefined && b === undefined) ||
				(a === undefined && t0 === 0) ||
				(b === undefined && t0 === 1)
			) return undefined;
			return method(a === undefined ? 1 : a, b === undefined ? 1: b, t0, gamma);
		};

const interpolate = (colors, mode = 'rgb', interpolations) => {
	let zipped = zip(colors.map(converter(mode)), mode);
	interpolations = Object.assign({}, getModeDefinition(mode).interpolate, interpolations);
	let keys = Object.keys(interpolations);

	return t => {
		t = Math.min(Math.max(0, t), 1);
		let res = { mode: mode }, val;
		for (var i = 0; i < keys.length; i++) {
			if ((val = interpolations[keys[i]](zipped[keys[i]], t)) !== undefined) {
				res[keys[i]] = val;
			}
		}
		return res;
	}
}

export {
	interpolate as default,
	interpolateAlpha,
	interpolateNumber,
	interpolateHue,
	interpolateMethodLinear
}