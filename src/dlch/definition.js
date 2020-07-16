import convertDlchToDlab from './convertDlchToDlab';
import convertDlchToLab from './convertDlchToLab';
import convertDlchToRgb from './convertDlchToRgb';

import convertLabToDlch from './convertLabToDlch';
import convertDlabToDlch from './convertDlabToDlch';
import convertRgbToDlch from './convertRgbToDlch';

import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';

export default {
	mode: 'dlch',
	output: {
		lab: convertDlchToLab,
		dlab: convertDlchToDlab,
		rgb: convertDlchToRgb
	},
	input: {
		lab: convertLabToDlch,
		dlab: convertDlabToDlch,
		rgb: convertRgbToDlch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	ranges: {
		l: [0, 100],
		c: [0, 50.944],
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
	}
};
