import { IS_CULORI } from './flags';
import parse from './parse';
import to_hsv from '../converters/to_hsv';
import from_hsv from '../converters/from_hsv';

import chew from './chew';
import spew from './spew';

export default function(color) {
	return (
		typeof color === 'object' ? 
			color.flags & IS_CULORI ? spew(chew(color), 'hsl') : to_hsv(from_hsv(color))
			: to_hsv(parse(color))
	);
};