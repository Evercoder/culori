import convertDlabToDlch from './convertDlabToDlch';
import convertDlchToDlab from './convertDlchToDlab';
import convertDlchToLab65 from './convertDlchToLab65';
import convertLab65ToDlch from './convertLab65ToDlch';
import convertLab65ToRgb from '../lab65/convertLab65ToRgb';
import convertRgbToLab65 from '../lab65/convertRgbToLab65';

import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

export default {
	mode: 'dlch',
	output: {
		lab65: convertDlchToLab65,
		dlab: convertDlchToDlab,
		rgb: c => convertLab65ToRgb(convertDlchToLab65(c))
	},
	input: {
		lab65: convertLab65ToDlch,
		dlab: convertDlabToDlch,
		rgb: c => convertLab65ToDlch(convertRgbToLab65(c))
	},
	channels: ['l', 'c', 'h', 'alpha'],
	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},
	interpolate: {
		l: interpolatorLinear,
		c: interpolatorLinear,
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: {
		h: differenceHueChroma
	},
	average: {
		h: averageAngle
	}
};
