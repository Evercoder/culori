import tape from 'tape';
import { rec2020 } from '../src/index';

tape('rec2020', t => {
	t.deepEqual(rec2020('white'), {
		mode: 'rec2020',
		r: 1.0000404776308303,
		g: 0.999993662158724,
		b: 0.9998939728043594
	});
	t.deepEqual(rec2020('black'), { mode: 'rec2020', r: 0, g: 0, b: 0 });
	t.deepEqual(rec2020('red'), {
		mode: 'rec2020',
		r: 0.7920409167961275,
		g: 0.23099956503092,
		b: 0.0737732217498481
	});
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
