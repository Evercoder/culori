import { hsl_old, hsl_new } from '../util/regex';
import { hue } from '../util/hue';

import from_hsl from '../converters/from_hsl';
import to_hsl from '../converters/to_hsl';

export default color => {
	if (typeof color !== 'string') return;
	let match = color.match(hsl_old) || color.match(hsl_new);
	if (!match) return;
	let res = {
		mode: 'hsl',
		h: match[3] === undefined ? hue(match[1], match[2]) : +match[3],
		s: match[4] / 100,
		l: match[5] / 100
	};
	if (match[6] !== undefined) {
		res.a = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.a = match[7] / 255;
	}
	// TODO better way to normalize than via rgb?
	return to_hsl(from_hsl(res));
}