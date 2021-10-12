/*
	Convert ProPhoto RGB values to CIE XYZ D50

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const linearize = v => {
	let abs = Math.abs(v);
	if (abs >= 16 / 512) {
		return Math.sign(v) * Math.pow(abs, 1.8);
	}
	return v / 16;
};

const convertProphotoToXyz50 = prophoto => {
	let r = linearize(prophoto.r);
	let g = linearize(prophoto.g);
	let b = linearize(prophoto.b);
	let res = {
		mode: 'xyz50',
		x:
			0.7977604896723027 * r +
			0.13518583717574031 * g +
			0.0313493495815248 * b,
		y:
			0.2880711282292934 * r +
			0.7118432178101014 * g +
			0.00008565396060525902 * b,
		z: 0.0 * r + 0.0 * g + 0.8251046025104601 * b
	};
	if (prophoto.alpha !== undefined) {
		res.alpha = prophoto.alpha;
	}
	return res;
};

export default convertProphotoToXyz50;
