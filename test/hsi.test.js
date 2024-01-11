import tape from 'tape';
import { hsi, rgb, formatCss } from '../src/index.js';

tape('rgb() converts from HSI to RGB', function (test) {
	test.deepEqual(
		rgb(hsi({ h: 0, s: 0, i: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'lightness 0 should yield black'
	);

	test.deepEqual(
		rgb(hsi({ h: 60, s: 0.25, i: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'...regardless of hue and saturation'
	);

	test.deepEqual(
		rgb(hsi({ h: 0, s: 0, i: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'saturation 0 should yield gray'
	);

	test.deepEqual(
		rgb(hsi({ h: 60, s: 0, i: 0.25 })),
		{ r: 0.25, g: 0.25, b: 0.25, mode: 'rgb' },
		'...regardless of the hue'
	);

	test.deepEqual(
		rgb(hsi({ h: 100, s: 0, i: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'...or the lightness'
	);

	test.end();
});

tape('hsi() converts RGB to HSI', function (test) {
	test.deepEqual(
		hsi(rgb({ r: 0, g: 0, b: 0 })),
		{ s: 0, i: 0, mode: 'hsi' },
		'black'
	);

	test.deepEqual(
		hsi(rgb({ r: 0.25, g: 0.25, b: 0.25 })),
		{ s: 0, i: 0.25, mode: 'hsi' },
		'R = G = B yields undefined hue'
	);

	test.deepEqual(
		hsi(rgb({ r: 0.6, g: 0.6, b: 0.6 })),
		{ s: 0, i: 0.6, mode: 'hsi' },
		'R = G = B yields zero saturation'
	);

	test.deepEqual(
		hsi(rgb({ r: 1, g: 0, b: 0 })),
		{ h: 0, s: 1, i: 0.3333333333333333, mode: 'hsi' },
		'red'
	);

	test.deepEqual(
		hsi(rgb({ r: 1, g: 1, b: 0 })),
		{ h: 60, s: 1, i: 0.6666666666666666, mode: 'hsi' },
		'yellow'
	);

	test.deepEqual(
		hsi(rgb({ r: 0, g: 1, b: 0 })),
		{ h: 120, s: 1, i: 0.3333333333333333, mode: 'hsi' },
		'green'
	);

	test.deepEqual(
		hsi(rgb({ r: 0, g: 1, b: 1 })),
		{ h: 180, s: 1, i: 0.6666666666666666, mode: 'hsi' },
		'cyan'
	);

	test.deepEqual(
		hsi(rgb({ r: 0, g: 0, b: 1 })),
		{ h: 240, s: 1, i: 0.3333333333333333, mode: 'hsi' },
		'blue'
	);

	test.deepEqual(
		hsi(rgb({ r: 1, g: 0, b: 1 })),
		{ h: 300, s: 1, i: 0.6666666666666666, mode: 'hsi' },
		'magenta'
	);

	test.end();
});

tape('color(--hsi)', t => {
	t.deepEqual(hsi('color(--hsi 30 0.5 1 / 0.25)'), {
		h: 30,
		s: 0.5,
		i: 1,
		alpha: 0.25,
		mode: 'hsi'
	});
	t.deepEqual(hsi('color(--hsi 0 50% 0.5 / 25%)'), {
		h: 0,
		s: 0.5,
		i: 0.5,
		alpha: 0.25,
		mode: 'hsi'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--hsi 0 50% 0.5 / 25%)'),
		'color(--hsi 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--hsi none 0.5 none)'), 'hsi to rgb is ok');
	t.deepEqual(rgb('color(--hsi none 0.5 none)'), rgb('color(--hsi 0 0.5 0'));
	t.ok(hsi('rgb(none 100 20)'), 'rgb to hsi is ok');
	t.deepEqual(hsi('rgb(none 100 20)'), hsi('rgb(0 100 20)'));
	t.end();
});
