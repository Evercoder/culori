import tape from 'tape';
import { prophoto, rgb, formatCss } from '../src/index.js';

tape('prophoto', t => {
	t.deepEqual(
		prophoto('white'),
		{
			mode: 'prophoto',
			r: 0.9999999886664714,
			g: 1.000000032778334,
			b: 0.9999999636791803
		},
		'white'
	);
	t.deepEqual(
		prophoto('black'),
		{ mode: 'prophoto', r: 0, g: 0, b: 0 },
		'black'
	);
	t.deepEqual(
		prophoto('red'),
		{
			mode: 'prophoto',
			r: 0.7022480690905015,
			g: 0.2757205683151893,
			b: 0.10354759457098542
		},
		'red'
	);
	t.end();
});

tape('color(prophoto-rgb)', t => {
	t.deepEqual(prophoto('color(prophoto-rgb 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'prophoto'
	});
	t.deepEqual(prophoto('color(prophoto-rgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'prophoto'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(prophoto-rgb 0% 50% 0.5 / 25%)'),
		'color(prophoto-rgb 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(prophoto-rgb none 0.5 none)'), 'prophoto to rgb is ok');
	t.deepEqual(
		rgb('color(prophoto-rgb none 0.5 none)'),
		rgb('color(prophoto-rgb 0 0.5 0')
	);
	t.ok(prophoto('rgb(none 100 20)'), 'rgb to prophoto is ok');
	t.deepEqual(prophoto('rgb(none 100 20)'), prophoto('rgb(0 100 20)'));
	t.end();
});
