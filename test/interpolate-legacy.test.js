/*
	Interpolation: legacy API
 */

import tape from 'tape';
import {
	interpolate,
	interpolateLinear,
	interpolateHue,
	formatHex
} from '../src/index.js';

tape('custom interpolators', t => {
	let interpolator = interpolate(['red', 'green'], 'hsv', {
		h: interpolateLinear(interpolateHue)
	});

	t.deepEqual(formatHex(interpolator(0.5)), '#c0c000');
	t.end();
});
