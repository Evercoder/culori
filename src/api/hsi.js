import { IS_CULORI } from './flags';
import parse from './parse';
import to_hsi from '../converters/to_hsi';
import from_hsi from '../converters/from_hsi';

import chew from './chew';
import spew from './spew';

export default function(color) {
	return (
		typeof color === 'object' ? 
			color.flags & IS_CULORI ? spew(chew(color), 'hsl') : to_hsi(from_hsi(color))
			: to_hsi(parse(color))
	);
};