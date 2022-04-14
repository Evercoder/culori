import random from '../src/random';
import type { Rgb } from '../src/rgb/types';
import type { Yiq } from '../src/yiq/types';
import type { Hsl } from '../src/hsl/types';

const case_1_expect_success = random();
const case_1_expect_error = random('1');

const case_2_expect_success: Rgb = random();

const case_3_expect_error: Hsl = random();

const case_4_expect_success: Rgb = random('rgb');
const case_5_expect_success: Yiq = random('yiq');

const case_6_expect_error: Rgb = random('hsi');

const case_7_expect_success: Yiq = random('yiq', {
	y: 1
});

const case_8_expect_error: Yiq = random('yiq', {
	r: [1, 2]
});
const case_9_expect_error: Yiq = random('yiq', {
	y: []
});
const case_10_expect_error: Yiq = random('yiq', {
	y: [1]
});
const case_11_expect_success: Yiq = random('yiq', {
	y: [0, 1]
});

const case_12_expect_success = random(undefined, {
	r: 1
});
const case_13_expect_success = random(undefined, {
	r: [0, 1]
});
const case_14_expect_error = random(undefined, {
	h: [0, 1]
});
