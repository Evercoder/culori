import rgb from '../rgb/definition.js';
import convertRgbToLrgb from './convertRgbToLrgb.js';
import convertLrgbToRgb from './convertLrgbToRgb.js';

declare const definition: typeof rgb & {
	mode: 'lrgb';

	toMode: {
		rgb: typeof convertLrgbToRgb;
	};

	fromMode: {
		rgb: typeof convertRgbToLrgb;
	};

	parse: ['--srgb-linear'];
	serialize: '--srgb-linear';
};

export default definition;
