import mixin from './util/mixin';

import parse from './api/parse';
import isRGBObject from './api/isRGBObject';
import round from './api/round';

import from_hsl from './converters/from_hsl';
import from_hsv from './converters/from_hsv';
import from_hsi from './converters/from_hsi';
import to_hsl from './converters/to_hsl';
import to_hsv from './converters/to_hsv';
import to_hsi from './converters/to_hsi';


import named from './colors/named';

const culori = color => culori.rgb(color);

mixin(culori, {
	
	from_hsl,
	from_hsv,
	from_hsi,

	to_hsl,
	to_hsv,
	to_hsi

	// API
	parse,
	round,
	isRGBObject,

	colors: {
		named
	},

	hsl: function(color) {
		return to_hsl(isRGBObject(color) ? color : parse(color));
	},

	hsv: function(color) {
		return to_hsv(isRGBObject(color) ? color : parse(color));
	},

	hsi: function(color) {
		return to_hsi(isRGBObject(color) ? color: parse(color));
	}

	rgb: function(color) {
		return isRGBObject(color) ? color : parse(color);
	}
});

export default culori;