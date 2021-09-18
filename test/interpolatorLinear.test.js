import tape from 'tape';
import { samples, interpolatorLinear } from '../src/index.js';

tape('interpolatorLinear', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	t.deepEqual(
		samples(10).map(interpolatorLinear(data)),
		[
			3, 2.822222222222222, 2.5666666666666664, 1.5000000000000002,
			0.9722222222222222, 0.8833333333333333, 0.7000000000000002,
			0.4111111111111111, 0.09444444444444447, 0.05
		]
	);
	t.end();
});

tape('outside [0, 1] range', t => {
	let it = interpolatorLinear([3, 10, 1]);
	t.equal(it(-0.5), -4);
	t.equal(it(-1), -11);
	t.equal(it(1.5), -8);
	t.equal(it(2), -17);
	t.end();
});
