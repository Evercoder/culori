import convertHsiToRgb from './convertHsiToRgb';
import convertRgbToHsi from './convertRgbToHsi';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';

export default {
	mode: 'hsi',
	output: { 
		rgb: convertHsiToRgb 
	},
	input: {
		rgb: convertRgbToHsi
	},
	channels: ['h', 's', 'i', 'alpha'],
	interpolate: {
		h: interpolateHue(),
		s: interpolateNumber(),
		i: interpolateNumber(),
		alpha: interpolateAlpha()
	}
}