import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

export default {
	mode: 'lrgb',
	output: {
		rgb: convertLrgbToRgb
	},
	input: { 
		rgb: convertRgbToLrgb
	},
	channels: ['r', 'g', 'b', 'alpha'],
	interpolate: {
		r: interpolateFunctionLinear(interpolateNumber()),
		g: interpolateFunctionLinear(interpolateNumber()),
		b: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};