import { 
	IS_CULORI,
	IS_RGB,
	IS_HSL,
	IS_HSI,
	IS_HSV,
	IS_LAB,
	IS_LCH,
	IS_CUBEHELIX,
	IS_GRAY,
	IS_HWB,
	IS_NORMALIZED
} from './flags';
import with_flags from '../util/with_flags';

import isCulori from './isCulori';
import spew from './spew';

export default function(color, mode = 'rgb') {
	if (typeof color !== 'object') {
		return undefined;
	}

	if (isCulori(color)) {
		return spew(color, mode);
	}

	switch(mode) {
		case 'rgb': return with_flags(color, IS_CULORI | IS_RGB | IS_NORMALIZED);
		case 'hsl': return with_flags(color, IS_CULORI | IS_HSL | IS_NORMALIZED);
		case 'hsv': return with_flags(color, IS_CULORI | IS_HSV | IS_NORMALIZED);
		case 'hsi': return with_flags(color, IS_CULORI | IS_HSI | IS_NORMALIZED);
	}

	return undefined;
}