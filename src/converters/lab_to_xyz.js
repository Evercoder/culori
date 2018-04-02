// ICC D50 white 
const Xn = 0.9642; 
const Yn = 1.0000; 
const Zn = 0.8249;

const k = Math.pow(29, 3) / Math.pow(3, 3);
const e = Math.pow(6, 3) / Math.pow(29, 3);

export default ({ l, a, b }) => {

 	let fx = a / 500 + (l + 16) / 116;
 	let fy = (l + 16) / 116 - b / 200;

	return {
		x: (Math.pow(fx, 3) > e ? Math.pow(fx, 3) : (116 * fx - 16) / k) * Xn,
		y: (l > 8 ? Math.pow((l + 16) / 116, 3) : l / k) * Yn,
		z: (Math.pow(fy, 3) > e ? Math.pow(fy, 3) : (116 * fy - 16) / k) * Zn
	};
};