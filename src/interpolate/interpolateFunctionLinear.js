const invariant = values => values;

export default (normalize = invariant, gamma = 1) => 
	(arr, t) => {

		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		let values = normalize([a, b], t0);
		return typeof values === 'object' ? 
			(a = values[0], b = values[1], a + Math.pow(t0, gamma) * (b - a)) : 
			values;
	};