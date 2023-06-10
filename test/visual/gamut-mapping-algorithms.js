/*
	Gamut clipping strategies
	-------------------------
 */

import {
	clampGamut,
	converter,
	differenceEuclidean,
	getMode,
	inGamut,
	oklab
} from '../../src/index.js';

import { GamutMapNewton } from './gamut-map-newton.js';

export function toGamutCSSColor4(
	dest = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch'),
	jnd = 0.02
) {
	const inDestinationGamut = inGamut(dest);
	const clipToGamut = clampGamut(dest);
	const destConv = converter(dest);

	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	const gamutDef = getMode(dest);
	const White = { mode: dest };
	const Black = { mode: dest };
	gamutDef.channels.forEach(ch => {
		Black[ch] = gamutDef.ranges[ch][0];
		White[ch] = gamutDef.ranges[ch][1];
	});

	return color => {
		if (color === undefined) {
			return undefined;
		}
		const candidate = { ...ucs(color) };
		if (candidate.l >= ranges.l[1]) {
			const res = { ...White };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (candidate.l <= ranges.l[0]) {
			const res = { ...Black };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (inDestinationGamut(candidate)) {
			return destConv(candidate);
		}

		let start = 0;
		let end = candidate.c;
		let clipped;
		/* Corresponds to about 10 steps */
		let epsilon = (ranges.c[1] - ranges.c[0]) / 1000;
		while (end - start > epsilon) {
			candidate.c = (start + end) * 0.5;
			if (inDestinationGamut(candidate)) {
				start = candidate.c;
			} else {
				clipped = clipToGamut(candidate);
				if (delta(candidate, clipped) <= jnd) {
					return clipped;
				}
				end = candidate.c;
			}
		}
		return destConv(candidate);
	};
}

export function toGamutCSSColor4Smooth(
	dest = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch'),
	jnd = 0.02
) {
	const inDestinationGamut = inGamut(dest);
	const clipToGamut = clampGamut(dest);
	const destConv = converter(dest);

	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	const gamutDef = getMode(dest);
	const White = { mode: dest };
	const Black = { mode: dest };
	gamutDef.channels.forEach(ch => {
		Black[ch] = gamutDef.ranges[ch][0];
		White[ch] = gamutDef.ranges[ch][1];
	});

	return color => {
		if (color === undefined) {
			return undefined;
		}
		const candidate = { ...ucs(color) };
		if (candidate.l >= ranges.l[1]) {
			const res = { ...White };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (candidate.l <= ranges.l[0]) {
			const res = { ...Black };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (inDestinationGamut(candidate)) {
			return destConv(candidate);
		}

		let start = 0;
		let end = candidate.c;
		let epsilon = (ranges.c[1] - ranges.c[0]) / 1000;
		let lower_bound_in_gamut = true;
		let clipped = clipToGamut(candidate);
		let e = delta(clipped, candidate);
		if (e < jnd) {
			return clipped;
		}

		while (end - start > epsilon) {
			candidate.c = (start + end) * 0.5;
			if (lower_bound_in_gamut && inDestinationGamut(candidate)) {
				start = candidate.c;
			} else {
				clipped = clipToGamut(candidate);
				e = delta(candidate, clipped);
				if (e <= jnd) {
					if (jnd - e < epsilon) {
						return clipped;
					} else {
						lower_bound_in_gamut = false;
						start = candidate.c;
					}
				} else {
					end = candidate.c;
				}
			}
		}
		return destConv(candidate);
	};
}

export function toGamutFuzzy(
	dest = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch'),
	jnd = 0.02
) {
	const inDestinationGamut = inGamut(dest);
	const clipToGamut = clampGamut(dest);
	const destConv = converter(dest);

	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	const gamutDef = getMode(dest);
	const White = { mode: dest };
	const Black = { mode: dest };
	gamutDef.channels.forEach(ch => {
		Black[ch] = gamutDef.ranges[ch][0];
		White[ch] = gamutDef.ranges[ch][1];
	});

	return color => {
		if (color === undefined) {
			return undefined;
		}
		const candidate = { ...ucs(color) };
		if (candidate.l >= ranges.l[1]) {
			const res = { ...White };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (candidate.l <= ranges.l[0]) {
			const res = { ...Black };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (inDestinationGamut(candidate)) {
			return destConv(candidate);
		}
		let clipped = clipToGamut(candidate);
		if (delta(candidate, clipped) <= jnd) {
			return clipped;
		}

		let start = 0;
		let end = candidate.c;

		/* Corresponds to about 10 steps */
		let epsilon = (ranges.c[1] - ranges.c[0]) / 1000;
		while (end - start > epsilon) {
			candidate.c = (start + end) * 0.5;
			clipped = clipToGamut(candidate);
			if (
				inDestinationGamut(candidate) ||
				delta(candidate, clipped) <= jnd
			) {
				start = candidate.c;
			} else {
				end = candidate.c;
			}
		}
		return inDestinationGamut(candidate) ? destConv(candidate) : clipped;
	};
}

export function toGamutCLReduce(
	dest = 'rgb',
	mode = 'oklch',
	delta = differenceEuclidean('oklch')
) {
	const inDestinationGamut = inGamut(dest);
	const destConv = converter(dest);

	const ucs = converter(mode);
	const { ranges } = getMode(mode);

	const gamutDef = getMode(dest);
	const White = { mode: dest };
	const Black = { mode: dest };
	gamutDef.channels.forEach(ch => {
		Black[ch] = gamutDef.ranges[ch][0];
		White[ch] = gamutDef.ranges[ch][1];
	});

	return color => {
		if (color === undefined) {
			return undefined;
		}
		const candidate = { ...ucs(color) };
		if (candidate.l >= ranges.l[1]) {
			const res = { ...White };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (candidate.l <= ranges.l[0]) {
			const res = { ...Black };
			if (color.alpha !== undefined) {
				res.alpha = color.alpha;
			}
			return res;
		}
		if (inDestinationGamut(candidate)) {
			return destConv(candidate);
		}

		let startC = 0;
		let alpha = 0.5;
		let startL =
			((ranges.l[1] + ranges.l[0]) / 2) * alpha +
			candidate.l * (1 - alpha);
		let endC = candidate.c;
		let endL = candidate.l;
		let epsilonC = (ranges.c[1] - ranges.c[0]) / 1000;
		let epsilonL = (ranges.l[1] - ranges.l[0]) / 1000;
		while (endC - startC > epsilonC || endL - startL > epsilonL) {
			candidate.c = (startC + endC) * 0.5;
			candidate.l = (startL + endL) * 0.5;
			if (inDestinationGamut(candidate)) {
				startC = candidate.c;
				startL = candidate.l;
			} else {
				endC = candidate.c;
				endL = candidate.l;
			}
		}
		return destConv(candidate);
	};
}

export function toGamutNewton() {
	return color => {
		const color_oklab = oklab(color);
		const [, res_rgb] = GamutMapNewton([
			color_oklab.l,
			color_oklab.a,
			color_oklab.b
		]);
		return {
			mode: 'lrgb',
			r: res_rgb[0],
			g: res_rgb[1],
			b: res_rgb[2]
		};
	};
}
