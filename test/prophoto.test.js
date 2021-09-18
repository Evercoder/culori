import tape from 'tape';
import { prophoto, formatCss } from '../src/index.js';

tape('prophoto', t => {
	t.deepEqual(
		prophoto('white'),
		{
			mode: 'prophoto',
			r: 0.9999404253940375,
			g: 1.000024099507719,
			b: 1.0000709637282883
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
			r: 0.702257038842947,
			g: 0.27574036006788033,
			b: 0.10358186278783293
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
