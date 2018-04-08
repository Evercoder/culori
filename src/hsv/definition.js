import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';


export default {
	mode: 'hsv',
	output: { 
		rgb: convertHsvToRgb 
	},
	input: {
		rgb: convertRgbToHsv
	},
	channels: ['h', 's', 'v', 'alpha'],
	interpolate: {
		h: interpolateFunctionLinear(interpolateHue()),
		s: interpolateFunctionLinear(interpolateNumber()),
		v: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};