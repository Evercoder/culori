import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

export default {
	mode: 'hsl',
	output: { 
		rgb: convertHslToRgb 
	},
	input: {
		rgb: convertRgbToHsl
	},
	channels: ['h', 's', 'l', 'alpha'],
	parsers: [ parseHsl ],
	interpolate: {
		h: interpolateFunctionLinear(interpolateHue()),
		s: interpolateFunctionLinear(interpolateNumber()),
		l: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};