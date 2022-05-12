import convertLabToLch from './convertLabToLch.js';
import convertLchToLab from './convertLchToLab.js';
import convertLabToRgb from '../lab/convertLabToRgb.js';
import convertRgbToLab from '../lab/convertRgbToLab.js';
import parseLch from './parseLch.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';
import type { Lch } from './types';
import type { Rgb } from '../rgb/types';

declare const definition: {
	mode: 'lch';

	toMode: {
		lab: typeof convertLchToLab;
		rgb: (c: Omit<Lch, 'mode'>) => Rgb;
	};

	fromMode: {
		rgb: (c: Omit<Rgb, 'mode'>) => Lch;
		lab: typeof convertLabToLch;
	};

	channels: ['l', 'c', 'h', 'alpha'];

	ranges: {
		l: [0, 100];
		c: [0, 131.207];
		h: [0, 360];
	};

	parse: [typeof parseLch];
	serialize: (c: Omit<Lch, 'mode'>) => string;

	interpolate: {
		h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
		c: typeof interpolatorLinear;
		l: typeof interpolatorLinear;
		alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
	};

	difference: {
		h: typeof differenceHueChroma;
	};

	average: {
		h: typeof averageAngle;
	};
};

export default definition;
