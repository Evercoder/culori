import converter from '../converter';
import { getModeDefinition } from '../modes';
import normalizeOffsets from '../util/normalizeOffsets';
import samples from '../samples';

export default (colors, mode = 'rgb', interpolations) => {
	let def = getModeDefinition(mode);
	let conv = converter(mode);

	let converted = [];
	let offsets = [];

	colors.forEach(c => {
		if (Array.isArray(c)) {
			converted.push(conv(c[0]));
			offsets.push(c[1]);
		} else if (typeof c === 'number') {
			// TODO: support for color hints
		} else {
			converted.push(conv(c));
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

	return t => {
		// clamp t to the [0, 1] interval
		t = Math.min(Math.max(0, t), 1);

		if (t < offsets[0]) {
			return converted[0];
		}

		if (t > offsets[offsets.length - 1]) {
			return converted[converted.length - 1];
		}

		// TODO: figure this out
		// let idx = offsets.findIndex(offset => offset > t);
		// let start = offsets[idx - 1];
		// let end = offsets[idx];
		// let pc = start + (end - start)
		// let start_range = (idx-1) / (offsets.length - 1);
		// let end_range = idx / (offsets.length - 1);

		return def.channels.reduce(
			(res, channel) => {
				let val = interpolators[channel](t);
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
