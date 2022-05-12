import convertHsiToRgb from './convertHsiToRgb.js';
import convertRgbToHsi from './convertRgbToHsi.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';

declare const definition: {
	mode: 'hsi';

	toMode: {
		rgb: typeof convertHsiToRgb;
	};

	parse: ['--hsi'];
	serialize: '--hsi';

	fromMode: {
		rgb: typeof convertRgbToHsi;
	};

	channels: ['h', 's', 'i', 'alpha'];

	ranges: {
		h: [0, 360];
	};

	interpolate: {
		h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
		s: typeof interpolatorLinear;
		i: typeof interpolatorLinear;
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
