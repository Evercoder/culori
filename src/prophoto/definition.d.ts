import type rgb from '../rgb/definition';

import type convertXyz50ToProphoto from './convertXyz50ToProphoto';
import type convertProphotoToXyz50 from './convertProphotoToXyz50';

import type { Rgb } from '../rgb/types';
import type { Prophoto } from './types';

declare const definition: typeof rgb & {
	mode: 'prophoto';
	parse: ['prophoto-rgb'];
	serialize: 'prophoto-rgb';

	fromMode: {
		xyz50: typeof convertXyz50ToProphoto;
		rgb: (rgb: Omit<Rgb, 'mode'>) => Prophoto;
	};

	toMode: {
		xyz50: typeof convertProphotoToXyz50;
		rgb: (rgb: Omit<Prophoto, 'mode'>) => Rgb;
	};
};

export default definition;
