const invariant = values => values;

export default (gamma = 1, normalize = invariant) => 
	(a, b, t) => {
		[a, b] = normalize([a, b], t);
		let res = a + Math.pow(t, gamma) * (b - a);
		return isNaN(res) ? undefined : res;
	}