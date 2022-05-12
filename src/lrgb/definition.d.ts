import rgb from '../rgb/definition.js';
import convertRgbToLrgb from './convertRgbToLrgb.js';
import convertLrgbToRgb from './convertLrgbToRgb.js';

type LrgbDefinitionMixin = {
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

declare const definition: Omit<typeof rgb, keyof LrgbDefinitionMixin> &
	LrgbDefinitionMixin;

export default definition;
