import interpolateFunctionLinear from './interpolateFunctionLinear';

const number = values => {
	if (values.length === 2) {
		// linear
		if (values[0] !== undefined && values[1] !== undefined) {
			return values;
		}
		return values[0] === undefined ? [values[1], values[1]] : [values[0], values[0]];
	} else {
		// spline
		return undefined;
	}
}

export default (fn = interpolateFunctionLinear(1, number)) =>
	(arr, t) => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		return fn(a, b, t0);
	};