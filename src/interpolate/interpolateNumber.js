export default () => 
	values => {
		if (values.length === 2) {
			
			// Linear Number interpolation
			// ---------------------------
			
			// If both values are undefined, return undefined
			if (values[0] === undefined && values[1] === undefined) {
				return undefined;
			}

			// if both values are defined, return them back
			if (values[0] !== undefined && values[1] !== undefined) {
				return values;
			}

			// if just one value is undefined, use the defined value
			return values[0] === undefined ? values[1] : values[0];
		} else {

			// Spline Number interpolation
			// ---------------------------
			
			// If all values are undefined, return undefined
			if (
				values[0] === undefined && 
				values[1] === undefined && 
				values[2] === undefined &&
				values[3] === undefined
			) {
				return undefined;
			}

			// If all values are defined, return them back
			// if (
			// 	values[0] !== undefined &&
			// 	values[1] !== undefined &&
			// 	values[2] !== undefined &&
			// 	values[3] !== undefined 
			// ) {
			// 	return values;
			// }

			// If some values are defined and others are undefined...
			// we need to decide what to do. Right now we send them back
			// but probably we should do something smarter here.
			return values;
		}
	};