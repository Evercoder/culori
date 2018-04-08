import normalizeHue from '../util/normalizeHue';
import interpolateFunctionLinear from './interpolateFunctionLinear';

const hue = (values) => {

	if (values.length === 2) {

		// linear interpolation
		let a = values[0];
		let b = values[1];

		if (a !== undefined && b !== undefined) {
			if (Math.abs(b - a) > 180) {
				return [a, b - 360 * Math.sign(b - a)];
			}
			return values;
		}
		return a === undefined ? [b, b] : [a, a];
	} else {
		// spline interpolation
		return values;
	}
}

export default (fn = interpolateFunctionLinear(1, hue)) =>
	(arr, t) => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;
		return normalizeHue(fn(a, b, t0));
	};

// todo hue short vs. hue long