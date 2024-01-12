import tape from 'tape';
import { p3, rgb, formatCss } from '../src/index.js';

tape('p3', t => {
	t.deepEqual(
		p3('white'),
		{
			mode: 'p3',
			r: 0.9999999999999999,
			g: 0.9999999999999997,
			b: 0.9999999999999997
		},
		'white'
	);
	t.deepEqual(p3('black'), { mode: 'p3', r: 0, g: 0, b: 0 }, 'black');
	t.deepEqual(
		p3('red'),
		{
			mode: 'p3',
			r: 0.9174875573251657,
			g: 0.20028680774084662,
			b: 0.1385605912111141
		},
		'red'
	);
	t.end();
});

tape('color(display-p3)', t => {
	t.deepEqual(p3('color(display-p3 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'p3'
	});
	t.deepEqual(p3('color(display-p3 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'p3'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(display-p3 0% 50% 0.5 / 25%)'),
		'color(display-p3 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(display-p3 none 0.5 none)'), 'p3 to rgb is ok');
	t.deepEqual(
		rgb('color(display-p3 none 0.5 none)'),
		rgb('color(display-p3 0 0.5 0')
	);
	t.ok(p3('rgb(none 100 20)'), 'rgb to p3 is ok');
	t.deepEqual(p3('rgb(none 100 20)'), p3('rgb(0 100 20)'));
	t.end();
});
