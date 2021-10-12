const n = 0.1593017578125; // = 2610 / Math.pow(2, 14);
const p = 134.03437499999998; // = 1.7 * 2523 / Math.pow(2, 5);
const c1 = 0.8359375; // = 3424 / Math.pow(2, 12);
const c2 = 18.8515625; // = 2413 / Math.pow(2, 7);
const c3 = 18.6875; // = 2392 / Math.pow(2, 7);
const d0 = 1.6295499532821566e-11;

/* `v` may be negative, in which case return 0 instead of NaN */
const pq_inv = v => {
	let vp = Math.pow(v, 1 / p);
	return 10000 * Math.pow((c1 - vp) / (c3 * vp - c2), 1 / n) || 0;
};

const rel = v => v / 203;

const convertJabToXyz65 = ({ j, a, b, alpha }) => {
	let i = (j + d0) / (0.44 + 0.56 * (j + d0));

	let l = pq_inv(i + 0.13860504 * a + 0.058047316 * b);
	let m = pq_inv(i - 0.13860504 * a - 0.058047316 * b);
	let s = pq_inv(i - 0.096019242 * a - 0.8118919 * b);

	let res = {
		mode: 'xyz65',
		x: rel(
			1.661373024652174 * l -
				0.914523081304348 * m +
				0.23136208173913045 * s
		),
		y: rel(
			-0.3250758611844533 * l +
				1.571847026732543 * m -
				0.21825383453227928 * s
		),
		z: rel(-0.090982811 * l - 0.31272829 * m + 1.5227666 * s)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertJabToXyz65;
