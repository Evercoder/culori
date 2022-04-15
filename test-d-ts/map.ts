import { mapper } from '../src/map';
import type { Rgb } from '../src/rgb/types';
import type { Hsl } from '../src/hsl/types';
import type { Color } from '../src/common';
import type { Okhsv } from '../src/okhsv/types';

// ===
// mode = `undefined`

const doubler = mapper(v => {
	return v * 2;
});

const case_1_expect_success: Rgb = doubler({
	mode: 'rgb',
	r: 0,
	b: 0,
	g: 0
});

const case_2_expect_success: Rgb = doubler({
	mode: 'hsl',
	h: 0,
	s: 0,
	l: 0
});

const case_3_expect_error: Hsl = doubler({
	mode: 'hsl',
	h: 0,
	s: 0,
	l: 0
});

const case_4_expect_success: Rgb | undefined = doubler('hsl(0, 100%, 50%)');
const case_5_expect_error: Hsl | undefined = doubler('hsl(0, 100%, 50%)');

// ===
// mode = `null`

const increaser = mapper(v => v + 10, null);

const case_5_expect_success: Color | undefined = increaser(
	'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
);

const case_6_expect_error: Okhsv | undefined = increaser(
	'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
);

const case_7_expect_success: Hsl = increaser({
	mode: 'hsl',
	h: 0,
	s: 0,
	l: 0
});

// ===
// mode = `undefined`
const decreaser = mapper((v, ch, conv_color, mode) => v - 10, undefined);

const case_8_expect_success: Rgb | undefined = decreaser(
	'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
);

const case_9_expect_error: Okhsv | undefined = decreaser(
	'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
);

const case_10_expect_error: Hsl = decreaser({
	mode: 'hsl',
	h: 1,
	s: 1,
	l: 1
});

// ===
// mode = 'hsl'

const tripler = mapper(v => {
	return v * 3;
}, 'hsl');

const case_11_expect_success: Hsl | undefined = tripler('#3690');
const case_12_expect_success: Hsl = tripler({
	h: 240,
	s: 1,
	l: 0.5,
	mode: 'hsl',
	alpha: 0.5
});
const case_13_expect_error: Hsl = tripler('hsla(240, 100%, 50%, 50%)');

//==

const case_8_1_expect_error: Rgb = decreaser(
	'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
);

//==
// mode: undefined,
// preserve_mode: true

const oner = mapper(
	(v, ch, conv_color, mode) => {
		const check_0_expect_success: Rgb = conv_color;
		const check_1_expect_error: Hsl = conv_color;
		const check_2_expect_success: 'rgb' = mode;
		const check_3_expect_error: 'hsl' = mode;
		return 1;
	},
	undefined,
	true
);
