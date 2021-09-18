import tape from 'tape';
import {
	samples,
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from '../src/index.js';

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

tape('interpolatorSplineNatural: outside [0, 1] range', t => {
	let it = interpolatorSplineNatural([3, 10, 1]);
	t.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[-4.166666666666667, 1, -8.166666666666666, 7.166666666666667]
	);
	t.end();
});

tape('interpolatorSplineNaturalClosed: outside [0, 1] range', t => {
	let it = interpolatorSplineNaturalClosed([3, 10, 1]);
	t.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[
			3.5416666666666665, 3.5416666666666665, 4.541666666666667,
			10.166666666666666
		]
	);
	t.end();
});
