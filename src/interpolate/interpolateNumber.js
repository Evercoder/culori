import interpolateFunctionLinear from './interpolateFunctionLinear';

export default (fn = interpolateFunctionLinear()) =>
	(arr, t) => {
		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		if (a !== undefined && b !== undefined) return fn(a, b, t0);
		return a === undefined ? b : a;
	};