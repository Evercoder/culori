export default () =>
	(values) => {

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
				if (Math.abs(values[1] - values[0]) > 180) {
					return [values[0], values[1] - 360 * Math.sign(values[1] - values[0])];
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

// todo hue short vs. hue long
// todo normalize hue before and after interpolateHue