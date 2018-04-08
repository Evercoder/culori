export default () =>
	(values, t) => {
		if (values.length === 2) {
			// linear interpolation
			let a = values[0], b = values[1];

			if (
				(a === undefined && b === undefined) ||
				(a === undefined && t === 0) ||
				(b === undefined && t === 1)
			) return [undefined, undefined];

			return [ a === undefined ? 1 : a, b === undefined ? 1 : b];
		} else {
			// spline interpolation
			return undefined;
		}
	};