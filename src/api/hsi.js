import { IS_CULORI, IS_HSV, IS_RGB, IS_NORMALIZED } from './flags';
import parse from './parse';
import to_hsi from '../converters/to_hsi';
import from_hsi from '../converters/from_hsi';

const isCulori = o => o.flags && IS_CULORI;
const isRGB = o => o.flags & IS_RGB && o.flags & IS_NORMALIZED;
const isHSI = o => o.flags & IS_HSI && o.flags & IS_NORMALIZED;

export default function(color) {
	return (
		typeof color === 'object' ? 
			isCulori(color) ?
				isHSI(color) ? 
					color 
					: isRGB(color) ? to_hsi(color) : undefined 
				: to_hsi(from_hsi(color))
			: to_hsi(parse(color))
	);
};