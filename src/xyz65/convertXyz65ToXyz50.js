/*
	Chromatic adaptation of CIE XYZ from D65 to D50 white point
	using the Bradford method.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html	
*/

const convertXyz65ToXyz50 = xyz65 => {
	let { x, y, z, alpha } = xyz65;
	let res = {
		mode: 'xyz50',
		x: 1.0478112 * x + 0.0228866 * y - 0.050127 * z,
		y: 0.0295424 * x + 0.9904844 * y - 0.0170491 * z,
		z: -0.0092345 * x + 0.0150436 * y + 0.7521316 * z
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz65ToXyz50;
