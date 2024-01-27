import test from 'node:test';
import assert from 'node:assert';
import {
	samples,
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from '../src/index.js';

test('interpolatorSplineNatural', t => {
	let arr = [10, 20, 0, 40, 70];
	let it = interpolatorSplineNatural(arr);
	assert.deepEqual(samples(5).map(it), arr);
});

test('interpolatorSplineNaturalClosed', t => {
	let arr = [10, 20, 0, 40, 70];
	let it = interpolatorSplineNaturalClosed(arr);
	assert.deepEqual(samples(5).map(it), [23.75, 20, 0, 40, 56.25]);
});

test('interpolatorSplineNatural: outside [0, 1] range', t => {
	let it = interpolatorSplineNatural([3, 10, 1]);
	assert.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[-4.166666666666667, 1, -8.166666666666666, 7.166666666666667]
	);
});

test('interpolatorSplineNaturalClosed: outside [0, 1] range', t => {
	let it = interpolatorSplineNaturalClosed([3, 10, 1]);
	assert.deepEqual(
		[-0.5, 1, 1.5, 2].map(it),
		[
			3.5416666666666665, 3.5416666666666665, 4.541666666666667,
			10.166666666666666
		]
	);
});
