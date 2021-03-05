/*
	Convert CIE XYZ D65 values to A98 RGB

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const gamma = v => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);

const convertXyz65ToA98 = ({ x, y, z, alpha }) => {
	let res = {
		mode: 'a98',
		r: gamma(
			x * 2.0415879038107465 -
				y * 0.5650069742788596 -
				0.34473135077832956 * z
		),
		g: gamma(
			x * -0.9692436362808795 +
				y * 1.8759675015077202 +
				0.04155505740717557 * z
		),
		b: gamma(
			x * 0.013444280632031142 -
				y * 0.11836239223101838 +
				1.0151749943912054 * z
		)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz65ToA98;
