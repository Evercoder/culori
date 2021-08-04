import rgb from '../rgb/definition';

import convertA98ToXyz65 from './convertA98ToXyz65';
import convertXyz65ToA98 from './convertXyz65ToA98';
import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';

const definition = {
	...rgb,
	mode: 'a98',
	parsers: ['a98-rgb'],

	input: {
		rgb: color => convertXyz65ToA98(convertRgbToXyz65(color)),
		xyz65: convertXyz65ToA98
	},

	output: {
		rgb: color => convertXyz65ToRgb(convertA98ToXyz65(color)),
		xyz65: convertA98ToXyz65
	}
};

export default definition;
