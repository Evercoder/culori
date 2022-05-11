import rgb from '../rgb/definition.js';

import convertA98ToXyz65 from './convertA98ToXyz65.js';
import convertXyz65ToA98 from './convertXyz65ToA98.js';
import type { Rgb } from '../rgb/types';
import type { A98 } from './types';

declare const definition: typeof rgb & {
	mode: 'a98';
	parse: ['a98-rgb'];
	serialize: 'a98-rgb';

	fromMode: {
		rgb: (color: Omit<Rgb, 'mode'>) => A98;
		xyz65: typeof convertXyz65ToA98;
	};

	toMode: {
		rgb: (color: Omit<A98, 'mode'>) => Rgb;
		xyz65: typeof convertA98ToXyz65;
	};
};

export default definition;
