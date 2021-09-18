import tape from 'tape';
import {
	samples,
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed
} from '../src/index.js';

tape('interpolatorSplineBasis', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	t.deepEqual(
		samples(10).map(interpolatorSplineBasis(data)),
		[
			3, 2.810516689529035, 2.472382258802012, 1.5641975308641978,
			0.9905807041609512, 0.8782807498856883, 0.6919753086419754,
			0.4039094650205761, 0.13541380887059906, 0.05000000000000001
		]
	);
	t.end();
});

tape('interpolatorSplineBasisClosed', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	t.deepEqual(
		samples(10).map(interpolatorSplineBasisClosed(data)),
		[
			2.475, 2.8097965249199817, 2.472382258802012, 1.5641975308641978,
			0.9905807041609512, 0.8782807498856883, 0.6919753086419754,
			0.4039094650205761, 0.1360996799268405, 0.5499999999999999
		]
	);
	t.end();
});

tape('interpolatorSplineBasis: outside [0, 1] range', t => {
	let it = interpolatorSplineBasis([3, 10, 1]);
	t.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[-1.3333333333333333, 1, -5.333333333333333, 4.333333333333333]
	);
	t.end();
});

tape('interpolatorSplineBasisClosed: outside [0, 1] range', t => {
	let it = interpolatorSplineBasisClosed([3, 10, 1]);
	t.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[
			2.8333333333333335, 2.8333333333333335, 3.8333333333333335,
			7.333333333333333
		]
	);
	t.end();
});
