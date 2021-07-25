/*
	Convert Rec. 2020 values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.itu.int/rec/R-REC-BT.2020/en
*/

const α = 1.09929682680944;
const β = 0.018053968510807;

const linearize = v => {
	let abs = Math.abs(v);
	if (abs < β * 4.5) {
		return v / 4.5;
	}
	return (Math.sign(v) || 1) * Math.pow((abs + α - 1) / α, 1 / 0.45);
};

const convertRec2020ToXyz65 = rec2020 => {
	let r = linearize(rec2020.r);
	let g = linearize(rec2020.g);
	let b = linearize(rec2020.b);
	let res = {
		mode: 'xyz65',
		x:
			0.6369580483012914 * r +
			0.14461690358620832 * g +
			0.1688809751641721 * b,
		y:
			0.2627002120112671 * r +
			0.6779980715188708 * g +
			0.05930171646986196 * b,
		z: 0 * r + 0.028072693049087428 * g + 1.060985057710791 * b
	};
	if (rec2020.alpha !== undefined) {
		res.alpha = rec2020.alpha;
	}
	return res;
};

export default convertRec2020ToXyz65;
