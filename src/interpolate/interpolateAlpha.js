import interpolateFunctionLinear from './interpolateFunctionLinear';

export default (fn = interpolateFunctionLinear()) =>
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
		return fn(a === undefined ? 1 : a, b === undefined ? 1: b, t0);
	};