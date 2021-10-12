/*
	Chromatic adaptation of CIE XYZ from D50 to D65 white point
	using the Bradford method.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html	
*/

const convertXyz50ToXyz65 = xyz50 => {
	let { x, y, z, alpha } = xyz50;
	let res = {
		mode: 'xyz65',
		x: 0.9555766 * x - 0.0230393 * y + 0.0631636 * z,
		y: -0.0282895 * x + 1.0099416 * y + 0.0210077 * z,
		z: 0.0122982 * x - 0.020483 * y + 1.3299098 * z
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz50ToXyz65;
