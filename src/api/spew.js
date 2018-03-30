import { IS_CULORI } from './flags';

import chew from './chew';

import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';
import to_hsi from '../converters/to_hsi';


const spew = {
	hsi: to_hsi,
	hsv: to_hsv,
	hsl: to_hsl,
	rgb: c => c
};

export default (color, mode) => spew[mode] ? spew[mode](chew(color)) : undefined;