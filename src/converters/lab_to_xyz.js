// D65 white 
const Xn = 0.95047; 
const Yn = 1.00000; 
const Zn = 1.08883;

const k = Math.pow(29, 3) / Math.pow(3, 3);
const e = Math.pow(6, 3) / Math.pow(29, 3);

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