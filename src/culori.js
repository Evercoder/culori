import mixin from './util/mixin';

import parse from './api/parse';

import parseNumber from './parsers/number';
import parseNamed from './parsers/named';
import parseHex from './parsers/hex';

import hsl_to_rgb from './converters/hsl2rgb';
import hsv_to_rgb from './converters/hsv2rgb';

import Color from './color/color';

const culori = c => new Color(c instanceof Color ? c.serialize() : culori.parse(c));

mixin(culori, {
	convert: {
		hsl_to_rgb,
		hsv_to_rgb
	},
	parse,
	parser: {
		number: parseNumber,
		named: parseNamed,
		hex: parseHex
	}
});

export default culori;