import mixin from './util/mixin';

import hsl_to_rgb from './converters/hsl2rgb';
import hsv_to_rgb from './converters/hsv2rgb';

class culori {
	constructor(color) {
		// let format = formats.find(format => format.match(color));
		// this.color = format.parse(color);
		// this.format = format.name;
	}
}

mixin(culori, {
	hsl_to_rgb,
	hsv_to_rgb
});

export default culori;