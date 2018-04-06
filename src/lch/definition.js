import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLchToRgb from './convertLchToRgb';
import convertRgbToLch from './convertRgbToLch';
import parseLch from './parseLch';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'lch',
	output: {
		lab: convertLchToLab,
		rgb: convertLchToRgb
	},
	input: { 
		rgb: convertRgbToLch,
		lch: convertLabToLch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	parsers: [ parseLch ],
	interpolate: {
		h: interpolateHue,
		c: interpolateLinear,
		l: interpolateLinear,
		alpha: interpolateAlpha
	}
};

// function displayable(c) {
// 	let color = convertLchToRgb(c);
// 	return color.r >= 0 && color.r <= 1 &&
// 		color.g >= 0 && color.g <=1 &&
// 		color.b >= 0 && color.b <=1;
// }



// function search(start, end, testFn) {
// 	let middle = (end - start)/2;
// 	if (testFn(middle)) {
// 		// middle is displayable
// 		return search(middle, end, testFn);
// 	} else {
// 		return search(start, middle, testFn);
// 	}
// }

// function clamp(color) {
// 	if (!displayable(color)) {
// 		let _color = Object.assign({}, color);
// 		let chroma = search(start, _color.c, chroma => (_color.c = chroma, displayable(_color)));
// 	} else {
// 		return color;
// 	}
// }