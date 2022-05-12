import type parseHex from './parseHex';
import type parseNamed from './parseNamed';
import type parseRgb from './parseRgb';
import type parseTransparent from './parseTransparent';
import type { interpolatorLinear } from '../interpolate/linear';
import type { fixupAlpha } from '../fixup/alpha';

declare const definition: {
	mode: 'rgb';
	channels: ['r', 'g', 'b', 'alpha'];
	parse: [
		typeof parseHex,
		typeof parseRgb,
		typeof parseNamed,
		typeof parseTransparent,
		'srgb'
	];
	serialize: 'srgb';

	interpolate: {
		r: typeof interpolatorLinear;
		g: typeof interpolatorLinear;
		b: typeof interpolatorLinear;
		alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
	};
};

export default definition;
