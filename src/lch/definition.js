import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLchToRgb from './convertLchToRgb';
import convertRgbToLch from './convertRgbToLch';
import parseLch from './parseLch';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';

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
		h: interpolateHue(),
		c: interpolateNumber(),
		l: interpolateNumber(),
		alpha: interpolateAlpha()
	}
};