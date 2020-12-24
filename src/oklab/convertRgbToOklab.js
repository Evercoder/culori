import convertRgbToLrgb from '../lrgb/convertRgbToLrgb';
import convertLrgbToOklab from './convertLrgbToOklab';

export default rgb => {
	let res = convertLrgbToOklab(convertRgbToLrgb(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};
