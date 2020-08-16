const n = 0.1593017578125; // = 2610 / Math.pow(2, 14);
const p = 134.03437499999998; // = 1.7 * 2523 / Math.pow(2, 5);
const c1 = 0.8359375; // = 3424 / Math.pow(2, 12);
const c2 = 18.8515625; // = 2413 / Math.pow(2, 7);
const c3 = 18.6875; // = 2392 / Math.pow(2, 7);
const d0 = 1.6295499532821566e-11;

const pq_inv = v => {
	let vp = Math.pow(v, 1 / p);
	return 10000 * Math.pow((c1 - vp) / (c3 * vp - c2), 1 / n);
};

const rel = v => v / 203;

export default ({ j, a, b, alpha }) => {
	let i = (j + d0) / (0.44 + 0.56 * (j + d0));

	let l = pq_inv(i + 0.138605 * a + 0.0580473 * b);
	let m = pq_inv(i - 0.138605 * a - 0.0580473 * b);
	let s = pq_inv(i - 0.0960192 * a - 0.811892 * b);

	let xp = 1.92423 * l - 1.00479 * m + 0.0376514 * s;
	let yp = 0.350317 * l + 0.726481 * m - 0.0653844 * s;
	let z = -0.0909828 * l - 0.312728 * m + 1.52277 * s;

	let res = {
		mode: 'xyz65',
		x: rel((xp + 0.15 * z) / 1.15),
		y: rel((yp - 0.34 * x) / 0.66),
		z: rel(z)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};
