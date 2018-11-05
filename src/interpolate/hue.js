/*
	Interpolation of hue values.
	
	Hues can be interpolated either on the shortest path around the cyllinder
	or the normal (long) way.

	Known issues:

	*	For spline interpolation, undefined behavior when some values are undefined
		and others are not.
	*	Spline interpolation does not support the shortPath hue interpolation, but it
		will normalize all hues to the [0, 360) range.
 */

import normalizeHue from '../util/normalizeHue';
import identity from '../util/identity';

export default identity;
