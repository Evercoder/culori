import mixin from './util/mixin';

import parse from './api/parse';

import parseNumber from './parsers/number';
import parseNamed from './parsers/named';
import parseHex from './parsers/hex';
import parseRgb from './parsers/rgb';
import parseHsl from './parsers/hsl';

import from_hsl from './converters/from_hsl';
import from_hsv from './converters/from_hsv';
import from_hsi from './converters/from_hsi';
import to_hsl from './converters/to_hsl';
import to_hsv from './converters/to_hsv';
import to_hsi from './converters/to_hsi';

import round from './util/round';

import named from './colors/named';

import Color from './color/color';

const culori = c => new Color(c instanceof Color ? c.serialize() : parse(c));

mixin(culori, {
	convert: {
		from_hsl,
		from_hsv,
		from_hsi,

		to_hsl,
		to_hsv,
		to_hsi,
		
		round
	},
	parse,
	parser: {
		number: parseNumber,
		named: parseNamed,
		hex: parseHex,
		rgb: parseRgb,
		hsl: parseHsl
	},
	colors: {
		named
	}
});

export default culori;