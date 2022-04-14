import { average } from '../src/average';
import type { Rgb } from '../src/rgb/types';
import type { Lch } from '../src/lch/types';
import type { Oklab } from '../src/oklab/types';

const case_0_expect_error = average();

const case_1_expect_error = average([]);

const case_2_expect_success: Rgb = average(['#ff0000', '#0000ff']);

const case_3_expect_success: Lch = average(['#ff0000', '#0000ff'], 'lch');

const case_4_expect_success: Lch = average(
	['#ff0000', '#0000ff'],
	'lch',
	_ => 1
);

const case_5_expect_success: Rgb = average(
	['#ff0000', '#0000ff'],
	undefined,
	_ => 1
);

const case_6_expect_success: Rgb = average(['#ff0000', '#0000ff'], undefined, {
	r: _ => 1
});

const case_7_expect_error: Rgb = average(['#ff0000', '#0000ff'], undefined, {
	r: 1
});

const case_8_expect_success: Oklab = average(['#ff0000', '#0000ff'], 'oklab', {
	b: _ => 1
});

const case_9_expect_error: Rgb = average(['#ff0000', '#0000ff'], 'hsl', {
	r: values => 1
});
