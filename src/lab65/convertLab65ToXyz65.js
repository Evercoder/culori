import { Xn, Yn, Zn, k, e } from '../xyz65/constants.js';

let fn = v => (Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k);

const convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
	let fy = (l + 16) / 116;
	let fx = a / 500 + fy;
	let fz = fy - b / 200;

	let res = {
		mode: 'xyz65',
		x: fn(fx) * Xn,
		y: fn(fy) * Yn,
		z: fn(fz) * Zn
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertLab65ToXyz65;
