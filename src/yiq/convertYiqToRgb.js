import convertLrgbToRgb from '../lrgb/convertLrgbToRgb.js';

const convertYiqToRgb = ({ y, i, q, alpha }) =>
	convertLrgbToRgb({
		r: y + 0.95608445 * i + 0.6208885 * q,
		g: y - 0.27137664 * i - 0.6486059 * q,
		b: y - 1.10561724 * i + 1.70250126 * q,
		alpha
	});

export default convertYiqToRgb;
