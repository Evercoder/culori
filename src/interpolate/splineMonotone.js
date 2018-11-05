import identity from '../util/identity';

const monotone = (v0, v1, v2, v3, h, t) => {
	let h2 = h * h;
	let t2 = t * t;
	let t3 = t2 * t;

	let s20 = (v2 - v0) / (2 * h);
	let s31 = (v3 - v1) / (2 * h);
	let s21 = (v2 - v1) / h;

	return (
		((s20 + s31 - 2 * s21) / h2) * t3 +
		((3 * s21 - 2 * s20 - s31) / h) * t2 +
		s20 * t +
		v1
	);
};

export default (
	normalize = identity,
	type = 'default',
	γ = 1
) => original_arr => {
	let arr = (normalize || identity)(original_arr);

	return t => {
		t = Math.pow(t, γ);

		let n = arr.length - 1;

		let i;
		if (t === 1) {
			i = n - 1;
			t = 1;
		} else {
			i = Math.floor(t * n);
		}

		switch (type) {
			case 'default':
				return monotone(
					i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1],
					arr[i],
					arr[i + 1],
					i < n - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i],
					1 / n,
					t - i / n
				);
			case 'closed':
				return monotone(
					arr[(i - 1 + arr.length) % arr.length],
					arr[i],
					arr[(i + 1) % arr.length],
					arr[(i + 2) % arr.length],
					1 / n,
					t - i / n
				);
			case 'open':
				throw new Error('open monotone spline not implemented yet');
		}
	};
};
