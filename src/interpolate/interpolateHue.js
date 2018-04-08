import normalizeHue from '../util/normalizeHue';
import interpolateFunctionLinear from './interpolateFunctionLinear';

export default (fn = interpolateFunctionLinear(), useShortest = true) =>
	(arr, t) => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		if (a !== undefined && b !== undefined) {
			a = normalizeHue(a); b = normalizeHue(b);
			return useShortest && Math.abs(b - a) > 180 ? 
				normalizeHue(fn(a, b - 360 * Math.sign(b - a), t0))
				: fn(a, b, t0);
		}
		return a === undefined ? b : a;
	};