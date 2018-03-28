import mixin from './util/mixin';

import parse from './api/parse';

import hsl_to_rgb from './converters/hsl2rgb';
import hsv_to_rgb from './converters/hsv2rgb';

import Color from './color/color';

const culori = c => new Color(c instanceof Color ? c.serialize() : culori.parse(c));

mixin(culori, {
	parse,
	hsl_to_rgb,
	hsv_to_rgb
});

export default culori;