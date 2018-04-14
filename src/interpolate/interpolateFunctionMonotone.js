import identity from '../util/identity';

const monotone = (v0, v1, v2, v3, h, t) => {

	let h2 = h * h;
	let t2 = t * t;
	let t3 = t2 * t;

	let s20 = (v2 - v0) / (2 * h);
	let s31 = (v3 - v1) / (2 * h);
	let s21 = (v2 - v1) / h;

	return (
		(s20 + s31 - 2 * s21) / h2 * t3 +
		(3 * s21 - 2 * s20 - s31) / h * t2 + 
		s20 * t +
		v1
	);
}

export default (normalize = identity, γ = 1) => 

	(arr, t) => {

		t = Math.pow(t, γ);

		let n = arr.length - 1;

		let i;
		if (t === 1) {
			i = n - 1;
			t = 1;
		} else {
			i = Math.floor(t * n);
		}

		let v1 = arr[i];
		let v2 = arr[i + 1];
		let v0 = i > 0 ? arr[i - 1] : 2 * v1 - v2;
		let v3 = i < n - 1 ? arr[i + 2] : 2 * v2 - v1;

		let v = normalize([v0, v1, v2, v3]);

		return typeof v === 'object' ? 
			monotone(v[0], v[1], v[2], v[3], 1 / n, t - i / n) : v;
	};