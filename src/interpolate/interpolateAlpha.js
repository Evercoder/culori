export default () =>
	(values, t) => {
		if (values.length === 2) {
			
			// Linear Alpha interpolation
			// --------------------------
			
			// If both alphas are undefined,
			// or if t is next to the undefined alpha,
			// return undefined to preserve assumption 
			// about undefined alpha being 1.
			if (
				(values[0] === undefined && values[1] === undefined) ||
				(values[0] === undefined && t === 0) ||
				(values[1] === undefined && t === 1)
			) return undefined;

			// If at least one alpha is defined,
			// assume alpha = 1 for any undefined values.			
			return [ values[0] === undefined ? 1 : values[0], values[1] === undefined ? 1 : values[1]];

		} else {

			// Spline Alpha interpolation
			// --------------------------

			// If all values are undefined, return undefined
			if (
				values[0] === undefined && 
				values[1] === undefined && 
				values[2] === undefined &&
				values[3] === undefined
			) {
				return undefined;
			}

			// If some values are defined and others are undefined,
			// put alpha = 1 for any undefined values
			return values.map(v => v === undefined ? 1 : v);
		}
	};