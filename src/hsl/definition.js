import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueSaturation } from '../difference';
import { averageAngle } from '../average';

const definition = {
	mode: 'hsl',

	output: {
		rgb: convertHslToRgb
	},

	input: {
		rgb: convertRgbToHsl
	},

	channels: ['h', 's', 'l', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	parsers: [parseHsl],
	serialize: c =>
		`hsl(${c.h || 0} ${c.s * 100}% ${c.l * 100}%${
			c.alpha < 1 ? ` / ${c.alpha}` : ''
		})`,

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

export default definition;
