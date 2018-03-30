import { IS_CULORI, IS_HSL, IS_RGB, IS_NORMALIZED } from './flags';
import parse from './parse';
import to_hsl from '../converters/to_hsl';
import from_hsl from '../converters/from_hsl';

const isCulori = o => o.flags && IS_CULORI;
const isRGB = o => o.flags & IS_RGB && o.flags & IS_NORMALIZED;
const isHSL = o => o.flags & IS_HSL && o.flags & IS_NORMALIZED;

export default function(color) {
	return (
		typeof color === 'object' ? 
			isCulori(color) ?
				isHSL(color) ? 
					color 
					: isRGB(color) ? to_hsl(color) : undefined 
				: to_hsl(from_hsl(color))
			: to_hsl(parse(color))
	);
};