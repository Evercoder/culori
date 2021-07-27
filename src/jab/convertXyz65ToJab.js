const n = 0.1593017578125; // = 2610 / Math.pow(2, 14);
const p = 134.03437499999998; // = 1.7 * 2523 / Math.pow(2, 5);
const c1 = 0.8359375; // = 3424 / Math.pow(2, 12);
const c2 = 18.8515625; // = 2413 / Math.pow(2, 7);
const c3 = 18.6875; // = 2392 / Math.pow(2, 7);
const d0 = 1.6295499532821566e-11;

/* `v` may be negative, in which case return 0 instead of NaN */
const pq = v => {
	let vn = Math.pow(v / 10000, n);
	return Math.pow((c1 + c2 * vn) / (1 + c3 * vn), p) || 0;
};

// Convert to Absolute XYZ
const abs = v => Math.max(v * 203, 0);

const convertXyz65ToJab = ({ x, y, z, alpha }) => {
	x = abs(x);
	y = abs(y);
	z = abs(z);

	let xp = 1.15 * x - 0.15 * z;
	let yp = 0.66 * y + 0.34 * x;

	let l = pq(0.41478972 * xp + 0.579999 * yp + 0.014648 * z);
	let m = pq(-0.20151 * xp + 1.120649 * yp + 0.0531008 * z);
	let s = pq(-0.0166008 * xp + 0.2648 * yp + 0.6684799 * z);

	let i = (l + m) / 2;

	let res = {
		mode: 'jab',
		j: (0.44 * i) / (1 - 0.56 * i) - d0,
		a: 3.524 * l - 4.066708 * m + 0.542708 * s,
		b: 0.199076 * l + 1.096799 * m - 1.295875 * s
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertXyz65ToJab;
