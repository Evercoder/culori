import { Xn, Yn, Zn, k, e } from './constants';

const f = value => value > e ? Math.cbrt(value) : (k * value + 16) / 116;

export default ({ x, y, z }) => {

	let f0 = f(x/Xn);
	let f1 = f(y/Yn);
	let f2 = f(z/Zn);

	return {
		l: (116 * f1) - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	}
};