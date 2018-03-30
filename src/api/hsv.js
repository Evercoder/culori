import { IS_CULORI, IS_HSV, IS_RGB, IS_NORMALIZED } from './flags';
import parse from './parse';
import to_hsv from '../converters/to_hsv';
import from_hsv from '../converters/from_hsv';

const isCulori = o => o.flags && IS_CULORI;
const isRGB = o => o.flags & IS_RGB && o.flags & IS_NORMALIZED;
const isHSV = o => o.flags & IS_HSV && o.flags & IS_NORMALIZED;

export default function(color) {
	return (
		typeof color === 'object' ? 
			isCulori(color) ?
				isHSV(color) ? 
					color 
					: isRGB(color) ? to_hsv(color) : undefined 
				: to_hsv(from_hsv(color))
			: to_hsv(parse(color))
	);
};