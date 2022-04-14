import blend from '../src/blend';
import type { Rgb } from '../src/rgb/types';
import type { Jab } from '../src/jab/types';

const case_1_expect_error = blend([]);
const case_2_expect_error: Rgb = blend([12312]);
const case_3_expect_success: Rgb = blend([
	{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 },
	{ mode: 'rgb', r: 0, g: 0, b: 1, alpha: 0.5 }
]);
const case_4_expect_success: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)']);

const case_5_expect_success: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	'darken'
);
const case_6_expect_error: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	'darke'
);
const case_7_expect_success: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	b => b * 2
);
const case_8_expect_success: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	(b, s) => b + s
);
const case_9_expect_success: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	'darken'
);
const case_10_expect_error: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	'darken',
	'jab'
);
const case_11_expect_success: Jab = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	'darken',
	'jab'
);
