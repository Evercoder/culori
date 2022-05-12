import type rgb from '../rgb/definition';

import type convertXyz65ToRec2020 from './convertXyz65ToRec2020';
import type convertRec2020ToXyz65 from './convertRec2020ToXyz65';

import type { Rec2020 } from './types';
import type { Rgb } from '../rgb/types';

declare const definition: typeof rgb & {
	mode: 'rec2020';

	fromMode: {
		xyz65: typeof convertXyz65ToRec2020;
		rgb: (color: Rgb) => Rec2020;
	};

	toMode: {
		xyz65: typeof convertRec2020ToXyz65;
		rgb: (color: Omit<Rec2020, 'mode'>) => Rgb;
	};

	parse: ['rec2020'];
	serialize: 'rec2020';
};

export default definition;
