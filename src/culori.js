import mixin from './util/mixin';

import parse from './api/parse';
import isRGBObject from './api/isRGBObject';
import round from './api/round';
import flags from './api/flags';

import from_hsl from './converters/from_hsl';
import from_hsv from './converters/from_hsv';
import from_hsi from './converters/from_hsi';
import to_hsl from './converters/to_hsl';
import to_hsv from './converters/to_hsv';
import to_hsi from './converters/to_hsi';


import named from './colors/named';

const culori = color => isRGBObject(color) ? color : parse(color);

mixin(culori, flags);

mixin(culori, {
	
	from_hsl,
	from_hsv,
	from_hsi,

	to_hsl,
	to_hsv,
	to_hsi,

	// API
	parse,
	round,
	isRGBObject,

	colors: {
		named
	},

	hsl: function(color) {
		return to_hsl(parse(color));
	},

	hsv: function(color) {
		return to_hsv(parse(color));
	},

	hsi: function(color) {
		return to_hsi(parse(color));
	}
});

export default culori;