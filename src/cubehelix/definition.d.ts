import type { fixupHueShorter } from '../fixup/hue';
import type { fixupAlpha } from '../fixup/alpha';
import type { interpolatorLinear } from '../interpolate/linear';
import type convertRgbToCubehelix from './convertRgbToCubehelix';
import type convertCubehelixToRgb from './convertCubehelixToRgb';
import type { differenceHueSaturation } from '../difference';
import type { averageAngle } from '../average';

declare const definition: {
	mode: 'cubehelix';
	channels: ['h', 's', 'l', 'alpha'];
	parse: ['--cubehelix'];
	serialize: '--cubehelix';

	ranges: {
		h: [0, 360];
		s: [0, 4.614];
		l: [0, 1];
	};

	fromMode: {
		rgb: typeof convertRgbToCubehelix;
	};

	toMode: {
		rgb: typeof convertCubehelixToRgb;
	};

	interpolate: {
		h: {
			use: typeof interpolatorLinear;
			fixup: typeof fixupHueShorter;
		};
		s: typeof interpolatorLinear;
		l: typeof interpolatorLinear;
		alpha: {
			use: typeof interpolatorLinear;
			fixup: typeof fixupAlpha;
		};
	};

	difference: {
		h: typeof differenceHueSaturation;
	};

	average: {
		h: typeof averageAngle;
	};
};

export default definition;
