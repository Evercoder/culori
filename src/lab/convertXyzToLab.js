// D65 white 
const Xn = 0.95047; 
const Yn = 1.00000; 
const Zn = 1.08883;

const k = Math.pow(29, 3) / Math.pow(3, 3);
const e = Math.pow(6, 3) / Math.pow(29, 3);

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