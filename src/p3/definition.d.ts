import rgb from '../rgb/definition';
import convertP3ToXyz65 from './convertP3ToXyz65';
import convertXyz65ToP3 from './convertXyz65ToP3';
import { Rgb } from '../rgb/types';
import { P3 } from './types';

declare const definition: typeof rgb & {
	mode: 'p3';
	parse: ['display-p3'];
	serialize: 'display-p3';

	fromMode: {
		rgb: (color: Omit<Rgb, 'mode'>) => P3;
		xyz65: typeof convertXyz65ToP3;
	};

	toMode: {
		rgb: (color: Omit<P3, 'mode'>) => Rgb;
		xyz65: typeof convertP3ToXyz65;
	};
};

export default definition;
