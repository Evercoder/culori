import convertLuvToLchuv from './convertLuvToLchuv.js';
import convertLchuvToLuv from './convertLchuvToLuv.js';
import convertXyz50ToRgb from '../xyz50/convertXyz50ToRgb.js';
import convertRgbToXyz50 from '../xyz50/convertRgbToXyz50.js';

import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';

declare const definition: {
	mode: 'lchuv';

	toMode: {
		luv: typeof convertLchuvToLuv;
		rgb: (
			c: Parameters<typeof convertLchuvToLuv>[0]
		) => ReturnType<typeof convertXyz50ToRgb>;
	};

	fromMode: {
		rgb: (
			c: Parameters<typeof convertRgbToXyz50>[0]
		) => ReturnType<typeof convertLuvToLchuv>;
		luv: typeof convertLuvToLchuv;
	};

	channels: ['l', 'c', 'h', 'alpha'];

	parse: ['--lchuv'];
	serialize: '--lchuv';

	ranges: {
		l: [0, 100];
		c: [0, 176.956];
		h: [0, 360];
	};

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
