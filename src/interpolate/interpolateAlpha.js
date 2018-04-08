import interpolateFunctionLinear from './interpolateFunctionLinear';

const alpha = (values, t) => {
	if (values.length === 2) {
		// linear interpolation
		let a = values[0], b = values[1];

		if (
			(a === undefined && b === undefined) ||
			(a === undefined && t === 0) ||
			(b === undefined && t === 1)
		) return [undefined, undefined];

		return [ a === undefined ? 1 : a, b === undefined ? 1 : b];
	} else {
		// spline interpolation
		return undefined;
	}
}

export default (fn = interpolateFunctionLinear(1, alpha)) =>
	(arr, t) => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;
		return fn(a, b, t0);
	};