/*
	Convert CIE XYZ D50 values to ProPhoto RGB

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const gamma = v => {
	let abs = Math.abs(v);
	if (abs >= 1 / 512) {
		return Math.sign(v) * Math.pow(abs, 1 / 1.8);
	}
	return 16 * v;
};

const convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
	let res = {
		mode: 'prophoto',
		r: gamma(
			x * 1.3457989731028281 -
				y * 0.25558010007997534 -
				0.05110628506753401 * z
		),
		g: gamma(
			x * -0.5446224939028347 +
				y * 1.5082327413132781 +
				0.02053603239147973 * z
		),
		b: gamma(x * 0.0 + y * 0.0 + 1.2119675456389454 * z)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz50ToProphoto;
