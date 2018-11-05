import identity from '../util/identity';

export default (γ = 1) => (arr, normalize) => {
	return t => {
		t = Math.pow(t, γ);
		let cls = t * (arr.length - 1);
		let idx = Math.floor(cls);
		let a = arr[idx];
		let b = arr[idx + 1];
		let t0 = cls - idx;

		let values = normalize([a, b], t0);
		return typeof values === 'object'
			? ((a = values[0]), (b = values[1]), a + t0 * (b - a))
			: values;
	};
};
