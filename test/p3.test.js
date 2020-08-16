import tape from 'tape';
import { p3 } from '../src/index';

tape('p3', t => {
	t.deepEqual(p3('white'), {
		mode: 'p3',
		r: 1.0000557432255317,
		g: 0.9999925423005881,
		b: 0.999904428542237
	});
	t.deepEqual(p3('black'), { mode: 'p3', r: 0, g: 0, b: 0 });
	t.deepEqual(p3('red'), {
		mode: 'p3',
		r: 0.9175519791705169,
		g: 0.20030416187200784,
		b: 0.13857345204350563
	});
	t.end();
});
