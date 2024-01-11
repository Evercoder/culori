import tape from 'tape';
import { a98, rgb, formatCss } from '../src/index.js';

tape('a98', t => {
	t.deepEqual(
		a98('white'),
		{ mode: 'a98', r: 0.9999999999999999, g: 1, b: 1.0000000000000002 },
		'white'
	);
	t.deepEqual(a98('black'), { mode: 'a98', r: 0, g: 0, b: 0 }, 'black');
	t.deepEqual(
		a98('red'),
		{
			mode: 'a98',
			r: 0.8585916022954421,
			g: -5.533624232798453e-8,
			b: 2.1612063668957067e-8
		},
		'red'
	);
	t.end();
});

tape('color(a98-rgb)', t => {
	t.deepEqual(a98('color(a98-rgb 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'a98'
	});
	t.deepEqual(a98('color(a98-rgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'a98'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(a98-rgb 0% 50% 0.5 / 25%)'),
		'color(a98-rgb 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(a98-rgb none 0.5 none)'), 'a98 to rgb is ok');
	t.deepEqual(
		rgb('color(a98-rgb none 0.5 none)'),
		rgb('color(a98-rgb 0 0.5 0')
	);
	t.ok(a98('rgb(none 100 20)'), 'rgb to a98 is ok');
	t.deepEqual(a98('rgb(none 100 20)'), a98('rgb(0 100 20)'));
	t.end();
});
