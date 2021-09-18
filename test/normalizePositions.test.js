import tape from 'tape';
import normalize from '../src/util/normalizePositions.js';

tape('util: normalizePositions', t => {
	t.deepEqual(
		normalize([undefined, undefined, undefined, undefined, undefined]),
		[0, 0.25, 0.5, 0.75, 1]
	);

	t.deepEqual(
		normalize([0.2, undefined, undefined, 0.8]),
		[0.2, 0.4, 0.6000000000000001, 0.8]
	);

	t.end();
});
