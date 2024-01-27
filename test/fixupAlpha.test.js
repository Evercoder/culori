import test from 'node:test';
import assert from 'node:assert';
import { fixupAlpha } from '../src/index.js';

test('fixupAlpha: some defined', t => {
	assert.deepEqual(fixupAlpha([undefined, 0, undefined]), [1, 0, 1]);
});

test('fixupAlpha: all undefined', t => {
	assert.deepEqual(fixupAlpha([undefined, undefined, undefined]), [
		undefined,
		undefined,
		undefined
	]);
});
