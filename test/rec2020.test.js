import tape from 'tape';
import { rec2020 } from '../src/index';

tape('rec2020', t => {
	t.deepEqual(rec2020('white'), {
		mode: 'rec2020',
		r: 1.000037479236694,
		g: 0.999994131627195,
		b: 0.9999018263199939
	});
	t.deepEqual(rec2020('black'), { mode: 'rec2020', r: 0, g: 0, b: 0 });
	t.deepEqual(rec2020('red'), {
		mode: 'rec2020',
		r: 0.805994628618058,
		g: 0.2617687922183653,
		b: 0.0737732217498481
	});
	t.end();
});
