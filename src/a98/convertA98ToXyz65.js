/*
	Convert A98 RGB values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
*/

const linearize = v => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);

const convertA98ToXyz65 = a98 => {
	let r = linearize(a98.r);
	let g = linearize(a98.g);
	let b = linearize(a98.b);
	let res = {
		mode: 'xyz65',
		x:
			0.5766690429101305 * r +
			0.1855582379065463 * g +
			0.1882286462349947 * b,
		y:
			0.29734497525053605 * r +
			0.6273635662554661 * g +
			0.07529145849399788 * b,
		z:
			0.02703136138641234 * r +
			0.07068885253582723 * g +
			0.9913375368376388 * b
	};
	if (a98.alpha !== undefined) {
		res.alpha = a98.alpha;
	}
	return res;
};

export default convertA98ToXyz65;
