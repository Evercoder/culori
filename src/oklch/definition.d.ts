import lch from '../lch/definition.js';
import convertLabToLch from '../lch/convertLabToLch.js';
import convertLchToLab from '../lch/convertLchToLab.js';
import convertOklabToRgb from '../oklab/convertOklabToRgb.js';
import convertRgbToOklab from '../oklab/convertRgbToOklab.js';
import type { Oklch } from './types';
import type { Oklab } from '../oklab/types';
import type { Rgb } from '../rgb/types';

type OklchDefinitionMixin = {
	mode: 'oklch';

	toMode: {
		oklab: (c: Omit<Oklch, 'mode'>) => Oklab;
		rgb: (c: Omit<Oklch, 'mode'>) => Rgb;
	};

	fromMode: {
		rgb: (c: Omit<Rgb, 'mode'>) => Oklch;
		oklab: (c: Omit<Oklab, 'mode'>) => Oklch;
	};

	parse: ['--oklch'];
	serialize: '--oklch';

	ranges: {
		l: [0, 0.999];
		c: [0, 0.322];
		h: [0, 360];
	};
};

declare const definition: Omit<typeof lch, keyof OklchDefinitionMixin> &
	OklchDefinitionMixin;

export default definition;
