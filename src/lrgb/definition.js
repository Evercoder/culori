import rgb from '../rgb/definition.js';
import convertRgbToLrgb from './convertRgbToLrgb.js';
import convertLrgbToRgb from './convertLrgbToRgb.js';

const definition = {
	...rgb,
	mode: 'lrgb',

	output: {
		rgb: convertLrgbToRgb
	},

	input: {
		rgb: convertRgbToLrgb
	},

	parsers: ['--srgb-linear'],
	serialize: 'color(--srgb-linear '
};

export default definition;
