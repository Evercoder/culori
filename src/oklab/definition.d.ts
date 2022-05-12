import convertOklabToLrgb from './convertOklabToLrgb.js';
import convertLrgbToOklab from './convertLrgbToOklab.js';
import convertRgbToOklab from './convertRgbToOklab.js';
import convertOklabToRgb from './convertOklabToRgb.js';

import lab from '../lab/definition.js';

type OklabDefinitionMixin = {
	mode: 'oklab';

	toMode: {
		lrgb: typeof convertOklabToLrgb;
		rgb: typeof convertOklabToRgb;
	};

	fromMode: {
		lrgb: typeof convertLrgbToOklab;
		rgb: typeof convertRgbToOklab;
	};

	ranges: {
		l: [0, 0.999];
		a: [-0.233, 0.276];
		b: [-0.311, 0.198];
	};

	parse: ['--oklab'];
	serialize: '--oklab';
};

declare const definition: Omit<typeof lab, keyof OklabDefinitionMixin> &
	OklabDefinitionMixin;

export default definition;
