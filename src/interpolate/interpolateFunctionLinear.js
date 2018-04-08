const invariant = values => values;

export default (normalize = invariant, gamma = 1) => 
	(arr, t) => {

		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		[a, b] = normalize([a, b], t0);
		let res = a + Math.pow(t0, gamma) * (b - a);
		return isNaN(res) ? undefined : res;
	};