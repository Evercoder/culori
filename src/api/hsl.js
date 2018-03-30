import { IS_CULORI, IS_HSL, IS_RGB, IS_NORMALIZED } from './flags';
import parse from './parse';
import to_hsl from '../converters/to_hsl';
import from_hsl from '../converters/from_hsl';

import chew from './chew';
import spew from './spew';
import isCulori from './isCulori';

export default function(color) {
	return (
		typeof color === 'object' ? 
			isCulori(color) ? spew(chew(color), 'hsl') : to_hsl(from_hsl(color))
			: to_hsl(parse(color))
	);
};