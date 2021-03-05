import rgb from '../rgb/definition';
import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';

const definition = {
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

export default definition;
