import rgb from '../rgb/definition';

import convertXyz65ToRec2020 from './convertXyz65ToRec2020';
import convertRec2020ToXyz65 from './convertRec2020ToXyz65';

import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';

export default {
	...rgb,
	mode: 'rec2020',
	input: {
		xyz: convertXyz65ToRec2020,
		rgb: color => convertXyz65ToRec2020(convertRgbToXyz65(color))
	},
	output: {
		xyz: convertRec2020ToXyz65,
		rgb: color => convertXyz65ToRgb(convertRec2020ToXyz65(color))
	},
	parsers: []
};
