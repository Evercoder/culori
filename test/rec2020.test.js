import tape from 'tape';
import { rec2020, rgb, formatCss } from '../src/index.js';

tape('rec2020', t => {
	t.deepEqual(
		rec2020('white'),
		{ mode: 'rec2020', r: 1, g: 1, b: 1 },
		'white'
	);
	t.deepEqual(
		rec2020('black'),
		{ mode: 'rec2020', r: 0, g: 0, b: 0 },
		'black'
	);
	t.deepEqual(
		rec2020('red'),
		{
			mode: 'rec2020',
			r: 0.7919771358198009,
			g: 0.23097568481079728,
			b: 0.07376147493817597
		},
		'red'
	);
	t.end();
});

tape('color(rec2020)', t => {
	t.deepEqual(rec2020('color(rec2020 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'rec2020'
	});
	t.deepEqual(rec2020('color(rec2020 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'rec2020'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(rec2020 0% 50% 0.5 / 25%)'),
		'color(rec2020 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(rec2020 none 0.5 none)'), 'rec2020 to rgb is ok');
	t.deepEqual(
		rgb('color(rec2020 none 0.5 none)'),
		rgb('color(rec2020 0 0.5 0')
	);
	t.ok(rec2020('rgb(none 100 20)'), 'rgb to rec2020 is ok');
	t.deepEqual(rec2020('rgb(none 100 20)'), rec2020('rgb(0 100 20)'));
	t.end();
});
