import tape from 'tape';
import { formatRgb } from '../src/index';

tape('PQ_inv negative value', t => {
	t.equal(
		formatRgb({ mode: 'jch', j: 0.01768, c: 0.095, h: 77 }),
		'rgb(42, 0, 0)'
	);
	t.end();
});
