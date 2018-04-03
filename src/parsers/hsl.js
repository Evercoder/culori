import { hsl_old, hsl_new } from '../util/regex';
import { hue } from '../util/hue';

import hsl_to_rgb from '../converters/hsl_to_rgb';
import rgb_to_hsl from '../converters/rgb_to_hsl';

export default color => {
	if (typeof color !== 'string') return;
	let match = color.match(hsl_old) || color.match(hsl_new);
	if (!match) return;
	let res = {
		mode: 'hsl',
		h: match[3] === undefined ? hue(match[1], match[2]) : +match[3],
		s: Math.min(Math.max(0, match[4] / 100), 1),
		l: Math.min(Math.max(0, match[5] / 100), 1)
	};
	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = match[7] / 255;
	}
	return res;
}