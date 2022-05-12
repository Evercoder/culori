import convertHsvToRgb from './convertHsvToRgb.js';
import convertRgbToHsv from './convertRgbToHsv.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';

declare const definition: {
	mode: 'hsv';

	toMode: {
		rgb: typeof convertHsvToRgb;
	};

	parse: ['--hsv'];
	serialize: '--hsv';

	fromMode: {
		rgb: typeof convertRgbToHsv;
	};

	channels: ['h', 's', 'v', 'alpha'];

	ranges: {
		h: [0, 360];
	};

	interpolate: {
		h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
		s: typeof interpolatorLinear;
		v: typeof interpolatorLinear;
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
