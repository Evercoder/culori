/*
	Convert CIE XYZ D65 values to Rec. 2020

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.itu.int/rec/R-REC-BT.2020/en
*/

const α = 1.09929682680944;
const β = 0.018053968510807;
const gamma = v => {
	const abs = Math.abs(v);
	if (abs > β) {
		return (Math.sign(v) || 1) * (α * Math.pow(abs, 0.45) - (α - 1));
	}
	return 4.5 * v;
};

const convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
	let res = {
		mode: 'rec2020',
		r: gamma(
			x * 1.7166511879712674 -
				y * 0.35567078377639233 -
				0.25336628137365974 * z
		),
		g: gamma(
			x * -0.6666843518324892 +
				y * 1.6164812366349395 +
				0.01576854581391113 * z
		),
		b: gamma(
			x * 0.017639857445310783 -
				y * 0.042770613257808524 +
				0.9421031212354738 * z
		)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz65ToRec2020;
