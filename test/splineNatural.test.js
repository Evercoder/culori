import tape from 'tape';
import {
	samples,
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from '../src/index';

tape('interpolatorSplineNatural', t => {
	let arr = [10, 20, 0, 40, 70];
	let it = interpolatorSplineNatural(arr);
	t.deepEqual(samples(5).map(it), arr);
	t.end();
});

tape('interpolatorSplineNaturalClosed', t => {
	let arr = [10, 20, 0, 40, 70];
	let it = interpolatorSplineNaturalClosed(arr);
	t.deepEqual(samples(5).map(it), [23.75, 20, 0, 40, 56.25]);
	t.end();
});
