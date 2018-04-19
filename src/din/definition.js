import convertDinToLab from './convertDinToLab';
import convertDinToRgb from './convertDinToRgb';
import convertLabToDin from './convertLabToDin';
import convertRgbToDin from './convertRgbToDin';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

export default {
	mode: 'din',
	output: { 
		lab: convertDinToLab,
		rgb: convertDinToRgb
	},
	input: {
		lab: convertLabToDin,
		rgb: convertRgbToDin
	},
	channels: ['l', 'a', 'b', 'alpha'],
	interpolate: {
		l: interpolateFunctionLinear(interpolateNumber()),
		a: interpolateFunctionLinear(interpolateNumber()),
		b: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};