import { Xn, Yn, Zn, k } from '../xyz50/constants.js';

export const u_fn = (x, y, z) => (4 * x) / (x + 15 * y + 3 * z);
export const v_fn = (x, y, z) => (9 * y) / (x + 15 * y + 3 * z);

export const un = u_fn(Xn, Yn, Zn);
export const vn = v_fn(Xn, Yn, Zn);

const convertLuvToXyz50 = ({ l, u, v, alpha }) => {
	let up = u / (13 * l) + un;
	let vp = v / (13 * l) + vn;
	let y = Yn * (l <= 8 ? l / k : Math.pow((l + 16) / 116, 3));
	let x = (y * (9 * up)) / (4 * vp);
	let z = (y * (12 - 3 * up - 20 * vp)) / (4 * vp);

	let res = { mode: 'xyz50', x, y, z };
	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertLuvToXyz50;
