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
