export default () => 
	values => {
		if (values.length === 2) {
			// linear
			if (values[0] !== undefined && values[1] !== undefined) {
				return values;
			}
			return values[0] === undefined ? [values[1], values[1]] : [values[0], values[0]];
		} else {
			// spline
			return values;
		}
	};