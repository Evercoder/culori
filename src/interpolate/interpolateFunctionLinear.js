const invariant = values => values;

export default (normalize = invariant, γ = 1) => 
	(arr, t) => {

		t = Math.pow(t, γ);

		let cls = t * (arr.length - 1), 
			idx = Math.floor(cls),
			a = arr[idx], 
			b = arr[idx + 1], 
			t0 = cls - idx;

		let values = normalize([a, b], t0);
		return typeof values === 'object' ? 
			(a = values[0], b = values[1], a + t0 * (b - a)) : 
			values;
	};