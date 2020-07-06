import converter from '../converter';
import { getModeDefinition } from '../modes';
import normalizePositions from '../util/normalizePositions';
import easingMidpoint from '../easing/midpoint';
import identity from '../util/identity';

export default (colors, mode = 'rgb', interpolations) => {
	let def = getModeDefinition(mode);
	let conv = converter(mode);

	let conv_colors = [];
	let positions = [];
	let fns = {};

	colors.forEach(val => {
		if (Array.isArray(val)) {
			conv_colors.push(conv(val[0]));
			positions.push(val[1]);
		} else if (typeof val === 'number' || typeof val === 'function') {
			// Color interpolation hint or easing function
			fns[positions.length] = val;
		} else {
			conv_colors.push(conv(val));
			positions.push(undefined);
		}
	});

	normalizePositions(positions);

	let zipped = def.channels.reduce((res, channel) => {
		res[channel] = conv_colors.map(color => color[channel]);
		return res;
	}, {});

	// override the default interpolators
	// from the color space definition with any custom ones

	const interpolator = (ch, values) => {
		let ifn, ffn;

		if (typeof def.interpolate[ch] === 'function') {
			ifn = def.interpolate[ch];
			ffn = identity;
		} else {
			ifn = def.interpolate[ch].use;
			ffn = def.interpolate[ch].fixup || identity;
		}

		if (typeof interpolations === 'function') {
			ifn = interpolations;
		} else if (typeof interpolations === 'object') {
			if (typeof interpolations[ch] === 'function') {
				ifn = interpolations[ch];
			} else if (typeof interpolations[ch] === 'object') {
				if (typeof interpolations[ch].use === 'function') {
					ifn = interpolations[ch].use;
				}
				if (typeof interpolations[ch].fixup === 'function') {
					ffn = interpolations[ch].fixup;
				}
			}
		}
		return ifn(ffn(values));
	};

	let interpolators = def.channels.reduce((res, ch) => {
		res[ch] = interpolator(ch, zipped[ch]);
		return res;
	}, {});

	let n = conv_colors.length - 1;

	return t => {
		// clamp t to the [0, 1] interval
		t = Math.min(Math.max(0, t), 1);

		if (t <= positions[0]) {
			return conv_colors[0];
		}

		if (t > positions[n]) {
			return conv_colors[n];
		}

		// Convert `t` from [0, 1] to `t0` between the appropriate two colors.
		// First, look for the two colors between which `t` is located.
		// Note: this can be optimized by searching for the index
		// through bisection instead of start-to-end.
		let idx = 0;
		while (positions[idx] < t) idx++;
		let start = positions[idx - 1];
		let delta = positions[idx] - start;

		let P = (t - start) / delta;

		// use either the local easing, or the global easing, if any
		let fn = fns[idx] || fns[0];
		if (fn !== undefined) {
			if (typeof fn === 'number') {
				fn = easingMidpoint((fn - start) / delta);
			}
			P = fn(P);
		}

		let t0 = (idx - 1 + P) / n;

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
	};
};
