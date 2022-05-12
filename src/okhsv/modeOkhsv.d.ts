import convertOklabToOkhsv from './convertOklabToOkhsv.js';
import convertOkhsvToOklab from './convertOkhsvToOklab.js';

import modeHsv from '../hsv/definition.js';
import { Okhsv } from './types';
import { Rgb } from '../rgb/types';

type OkhsvDefinitionMixin = {
	mode: 'okhsv';
	channels: ['h', 's', 'v', 'alpha'];
	parse: ['--okhsv'];
	serialize: '--okhsv';
	fromMode: {
		oklab: typeof convertOklabToOkhsv;
		rgb: (color: Omit<Rgb, 'mode'>) => Okhsv;
	};
	toMode: {
		oklab: typeof convertOkhsvToOklab;
		rgb: (color: Omit<Okhsv, 'mode'>) => Rgb;
	};
};

declare const modeOkhsv: Omit<typeof modeHsv, keyof OkhsvDefinitionMixin> &
	OkhsvDefinitionMixin;

export default modeOkhsv;
