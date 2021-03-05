import rgb from '../rgb/definition';
import convertP3ToXyz65 from './convertP3ToXyz65';
import convertXyz65ToP3 from './convertXyz65ToP3';
import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';

const definition = {
	...rgb,
	mode: 'p3',
	alias: ['display-p3'],

	input: {
		rgb: color => convertXyz65ToP3(convertRgbToXyz65(color)),
		xyz65: convertXyz65ToP3
	},

	output: {
		rgb: color => convertXyz65ToRgb(convertP3ToXyz65(color)),
		xyz65: convertP3ToXyz65
	},

	parsers: []
};

export default definition;
