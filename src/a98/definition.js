import rgb from '../rgb/definition.js';

import convertA98ToXyz65 from './convertA98ToXyz65.js';
import convertXyz65ToA98 from './convertXyz65ToA98.js';
import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65.js';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb.js';

const definition = {
	...rgb,
	mode: 'a98',
	parse: ['a98-rgb'],
	serialize: 'a98-rgb',

	fromMode: {
		rgb: color => convertXyz65ToA98(convertRgbToXyz65(color)),
		xyz: convertXyz65ToA98
	},

	toMode: {
		rgb: color => convertXyz65ToRgb(convertA98ToXyz65(color)),
		xyz: convertA98ToXyz65
	}
};

export default definition;
