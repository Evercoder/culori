import test from 'node:test';
import assert from 'node:assert';
import { samples, interpolatorLinear } from '../src/index.js';

test('interpolatorLinear', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	assert.deepEqual(
		samples(10).map(interpolatorLinear(data)),
		[
			3, 2.822222222222222, 2.5666666666666664, 1.5000000000000002,
			0.9722222222222222, 0.8833333333333333, 0.7000000000000002,
			0.4111111111111111, 0.09444444444444447, 0.05
		]
	);
});

test('outside [0, 1] range', t => {
	let it = interpolatorLinear([3, 10, 1]);
	assert.equal(it(-0.5), -4);
	assert.equal(it(-1), -11);
	assert.equal(it(1.5), -8);
	assert.equal(it(2), -17);
});
