import { Xn, Yn, Zn, k, e } from './constants';

let fn = v => Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;

export default ({ l, a, b }) => {

	let fy = (l + 16) / 116;
 	let fx = a / 500 + fy;
 	let fz = fy - b / 200;

	return {
		x: fn(fx) * Xn,
		y: fn(fy) * Yn,
		z: fn(fz) * Zn
	};
};