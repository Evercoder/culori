import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';

export default {
	mode: 'lrgb',
	output: {
		rgb: convertLrgbToRgb
	},
	input: { 
		rgb: convertRgbToLrgb
	},
	channels: ['r', 'g', 'b']
};