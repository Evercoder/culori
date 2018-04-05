import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';

export default {
	mode: 'hsv',
	output: { 
		rgb: convertHsvToRgb 
	},
	input: {
		rgb: convertRgbToHsv
	},
	keys: ['h', 's', 'v', 'alpha']
};