import rgb from '../rgb/definition';
import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';

export default {
	...rgb,
	mode: 'lrgb',
	output: {
		rgb: convertLrgbToRgb
	},
	input: {
		rgb: convertRgbToLrgb
	},
	parsers: []
};
