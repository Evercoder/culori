/*
	Interpolation of hue values.
	
	Hues can be interpolated either on the shortest path around the cyllinder
	or the normal (long) way.

	Known issues:

	*	For spline interpolation, undefined behavior when some values are undefined
		and others are not.
 */

import normalizeHue from '../util/normalizeHue';

export default (shortPath = true) => {
	return values => {

		if (values.length === 2) {

			// Linear Hue interpolation
			// ------------------------

			// if both hues are undefined, return undefined
			if (values[0] === undefined && values[1] === undefined) {
				return undefined;
			}
			
			// if both hues are defined, interpolate between 
			// the start hue and the end hue brought closest
			// to the start hue.
			if (values[0] !== undefined && values[1] !== undefined) {
				if (shortPath) {
					let na = normalizeHue(values[0]);
					let nb = normalizeHue(values[1]);
					if (Math.abs(nb - na) > 180) {
						// todo this result should be somehow normalized
						return [na, nb - 360 * Math.sign(nb - na)];
					}
					return [na, nb];
				}
				return values;
			}

			// if just one hue is undefined, use the defined hue throughout
			return values[0] === undefined ? values[1] : values[0];
		} else {

			// Spline Hue interpolation
			// ------------------------
			
			// If all values are undefined, return undefined
			if (
				values[0] === undefined && 
				values[1] === undefined && 
				values[2] === undefined &&
				values[3] === undefined
			) {
				return undefined;
			}
			
			// If some values are defined, return them back for now
			return values;

		}
	};
}

// todo hue short vs. hue long
// todo normalize hue before and after interpolateHue