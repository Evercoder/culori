import tape from 'tape';
import { hsv, rgb, formatCss } from '../src/index.js';

tape('rgb() converts from HSV to RGB', function (test) {
	test.deepEqual(
		rgb(hsv({ h: 0, s: 0, v: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'lightness 0 should yield black'
	);

	test.deepEqual(
		rgb(hsv({ h: 60, s: 0.25, v: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'...regardless of hue and saturation'
	);

	test.deepEqual(
		rgb(hsv({ h: 0, s: 0, v: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'saturation 0 should yield gray'
	);

	test.deepEqual(
		rgb(hsv({ h: 60, s: 0, v: 0.25 })),
		{ r: 0.25, g: 0.25, b: 0.25, mode: 'rgb' },
		'...regardless of the hue'
	);

	test.deepEqual(
		rgb(hsv({ h: 100, s: 0, v: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'...or the lightness'
	);

	test.end();
});

tape('hsv() converts RGB to HSV', function (test) {
	test.deepEqual(
		hsv(rgb({ r: 0, g: 0, b: 0 })),
		{ s: 0, v: 0, mode: 'hsv' },
		'black'
	);

	test.deepEqual(
		hsv(rgb({ r: 0.25, g: 0.25, b: 0.25 })),
		{ s: 0, v: 0.25, mode: 'hsv' },
		'R = G = B yields undefined hue'
	);

	test.deepEqual(
		hsv(rgb({ r: 0.6, g: 0.6, b: 0.6 })),
		{ s: 0, v: 0.6, mode: 'hsv' },
		'R = G = B yields zero saturation'
	);

	test.deepEqual(
		hsv(rgb({ r: 1, g: 0, b: 0 })),
		{ h: 0, s: 1, v: 1, mode: 'hsv' },
		'red'
	);

	test.deepEqual(
		hsv(rgb({ r: 1, g: 1, b: 0 })),
		{ h: 60, s: 1, v: 1, mode: 'hsv' },
		'yellow'
	);

	test.deepEqual(
		hsv(rgb({ r: 0, g: 1, b: 0 })),
		{ h: 120, s: 1, v: 1, mode: 'hsv' },
		'green'
	);

	test.deepEqual(
		hsv(rgb({ r: 0, g: 1, b: 1 })),
		{ h: 180, s: 1, v: 1, mode: 'hsv' },
		'cyan'
	);

	test.deepEqual(
		hsv(rgb({ r: 0, g: 0, b: 1 })),
		{ h: 240, s: 1, v: 1, mode: 'hsv' },
		'blue'
	);

	test.deepEqual(
		hsv(rgb({ r: 1, g: 0, b: 1 })),
		{ h: 300, s: 1, v: 1, mode: 'hsv' },
		'magenta'
	);

	test.end();
});

tape('hsv(str)', function (test) {
	test.deepEqual(hsv('white'), { mode: 'hsv', s: 0, v: 1 });
	test.end();
});

tape('color(--hsv)', t => {
	t.deepEqual(hsv('color(--hsv 30 0.5 1 / 0.25)'), {
		h: 30,
		s: 0.5,
		v: 1,
		alpha: 0.25,
		mode: 'hsv'
	});
	t.deepEqual(hsv('color(--hsv 0 50% 0.5 / 25%)'), {
		h: 0,
		s: 0.5,
		v: 0.5,
		alpha: 0.25,
		mode: 'hsv'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--hsv 0 50% 0.5 / 25%)'),
		'color(--hsv 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--hsv none 0.5 none)'), 'hsv to rgb is ok');
	t.deepEqual(rgb('color(--hsv none 0.5 none)'), rgb('color(--hsv 0 0.5 0'));
	t.ok(hsv('rgb(none 100 20)'), 'rgb to hsv is ok');
	t.deepEqual(hsv('rgb(none 100 20)'), hsv('rgb(0 100 20)'));
	t.end();
});
