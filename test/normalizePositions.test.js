import test from 'node:test';
import assert from 'node:assert';
import normalize from '../src/util/normalizePositions.js';

test('util: normalizePositions', t => {
	assert.deepEqual(
		normalize([undefined, undefined, undefined, undefined, undefined]),
		[0, 0.25, 0.5, 0.75, 1]
	);

	assert.deepEqual(
		normalize([0.2, undefined, undefined, 0.8]),
		[0.2, 0.4, 0.6000000000000001, 0.8]
	);
});
