import { Xn, Yn, Zn, k, e } from '../xyz50/constants.js';

const f = value => (value > e ? Math.cbrt(value) : (k * value + 16) / 116);

const convertXyz50ToLab = ({ x, y, z, alpha }) => {
	let f0 = f(x / Xn);
	let f1 = f(y / Yn);
	let f2 = f(z / Zn);

	let res = {
		mode: 'lab',
		l: 116 * f1 - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertXyz50ToLab;
