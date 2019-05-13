import converter from '../converter';
import { getModeDefinition } from '../modes';
import normalizeOffsets from '../util/normalizeOffsets';
import samples from '../samples';

export default (colors, mode = 'rgb', interpolations) => {
	let def = getModeDefinition(mode);
	let conv = converter(mode);

	let converted = [];
	let offsets = [];

	colors.forEach(color => {
		if (Array.isArray(color)) {
			converted.push(conv(color[0]));
			offsets.push(color[1]);
		} else if (typeof color === 'number') {
			// TODO: support for color hints
		} else {
			converted.push(conv(color));
			offsets.push(undefined);
		}
	});

	normalizeOffsets(offsets);

	let zipped = def.channels.reduce((res, channel) => {
		res[channel] = converted.map(color => color[channel]);
		return res;
	}, {});

	// override the default interpolators
	// from the color space definition with any custom ones
	let interpolators = def.channels.reduce(
		(res, channel) => {
			res[channel] = res[channel](zipped[channel]);
			return res;
		},
		{
			...def.interpolate,
			...interpolations
		}
	);

	let n = converted.length - 1;

	return t => {
		// clamp t to the [0, 1] interval
		t = Math.min(Math.max(0, t), 1);

		if (t <= offsets[0]) {
			return converted[0];
		}

		if (t > offsets[n]) {
			return converted[n];
		}

		// Convert `t` from [0, 1] to `t0` between the appropriate two colors.
		// First, look for the two colors between which `t` is located.
		// Note: this can be optimized by searching for the index
		// through bisection instead of start-to-end.
		let idx = 0;
		while (offsets[idx] < t) idx++;
		let start = offsets[idx - 1];
		let end = offsets[idx];
		let t0 = (idx - 1 + (t - start) / (end - start)) / n;

		return def.channels.reduce(
			(res, channel) => {
				let val = interpolators[channel](t0);
				if (val !== undefined) {
					res[channel] = val;
				}
				return res;
			},
			{ mode }
		);

		return res;
	};
};
