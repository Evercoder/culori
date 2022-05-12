import convertHslToRgb from './convertHslToRgb.js';
import convertRgbToHsl from './convertRgbToHsl.js';
import parseHsl from './parseHsl.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';
import type { Hsl } from './types';

declare const definition: {
	mode: 'hsl';

	toMode: {
		rgb: typeof convertHslToRgb;
	};

	fromMode: {
		rgb: typeof convertRgbToHsl;
	};

	channels: ['h', 's', 'l', 'alpha'];

	ranges: {
		h: [0, 360];
	};

	parse: [typeof parseHsl];
	serialize: (c: Omit<Hsl, 'mode'>) => string;

	interpolate: {
		h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
		s: typeof interpolatorLinear;
		l: typeof interpolatorLinear;
		alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
	};

	difference: {
		h: typeof differenceHueSaturation;
	};

	average: {
		h: typeof averageAngle;
	};
};

export default definition;
