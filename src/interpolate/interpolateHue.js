export default () =>
	(values) => {

		if (values.length === 2) {

			// linear interpolation
			let a = values[0];
			let b = values[1];

			if (a !== undefined && b !== undefined) {
				if (Math.abs(b - a) > 180) {
					return [a, b - 360 * Math.sign(b - a)];
				}
				return values;
			}
			return a === undefined ? [b, b] : [a, a];
		} else {
			// spline interpolation
			return values;
		}
	};

// todo hue short vs. hue long
// todo normalize hue before and after interpolateHue