import converter from '../converter';
import { getModeDefinition } from '../modes';

export default (colors, mode = 'rgb', interpolations) => {
	let def = getModeDefinition(mode);

	let converted = colors.map(converter(mode));

	let zipped = def.channels.reduce((res, channel) => {
		res[channel] = converted.map(color => color[channel]);
		return res;
	}, {});

	// override the default interpolators
	// from the color space definition with any custom ones
	let interpolators = {
		...def.interpolate,
		...interpolations
	};

	return t => {
		// clamp t to the [0, 1] interval
		t = Math.min(Math.max(0, t), 1);

		return def.channels.reduce(
			(res, channel) => {
				let val = interpolators[channel](zipped[channel], t);
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
