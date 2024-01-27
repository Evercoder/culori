import test from 'node:test';
import assert from 'node:assert';
import {
	samples,
	interpolatorSplineMonotone,
	interpolatorSplineMonotone2,
	interpolatorSplineMonotoneClosed
} from '../src/index.js';

test('interpolatorSplineMonotone', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	assert.deepEqual(
		samples(10).map(interpolatorSplineMonotone(data)),
		[
			3, 2.826611796982167, 2.6089163237311386, 1.3592592592592596,
			0.973593964334705, 0.8984224965706447, 0.7148148148148149,
			0.40631001371742104, 0.09005486968449936, 0.049999999999999975
		]
	);
});

test('interpolatorSplineMonotone2', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	assert.deepEqual(
		samples(10).map(interpolatorSplineMonotone2(data)),
		[
			3, 2.82716049382716, 2.6089163237311386, 1.3592592592592596,
			0.973593964334705, 0.8984224965706447, 0.7148148148148149,
			0.40631001371742104, 0.08950617283950621, 0.04999999999999999
		]
	);
});

test('interpolatorSplineMonotoneClosed', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	assert.deepEqual(
		samples(10).map(interpolatorSplineMonotoneClosed(data)),
		[
			3, 2.8288065843621397, 2.6089163237311386, 1.3592592592592596,
			0.973593964334705, 0.8984224965706447, 0.7148148148148149,
			0.40631001371742104, 0.08950617283950621, 0.04999999999999999
		]
	);
});

test('interpolatorSplineMonotone: outside [0, 1] range', t => {
	let it = interpolatorSplineMonotone([3, 10, 1]);
	assert.deepEqual([-0.5, 1, 1.5, 2].map(it), [10, 1, 10, 91]);
});

test('interpolatorSplineMonotone2: outside [0, 1] range', t => {
	let it = interpolatorSplineMonotone2([3, 10, 1]);
	assert.deepEqual([-0.5, 1, 1.5, 2].map(it), [-18, 1, -22, -53]);
});

test('interpolatorSplineMonotoneClosed: outside [0, 1] range', t => {
	let it = interpolatorSplineMonotoneClosed([3, 10, 1]);
	assert.deepEqual([-0.5, 1, 1.5, 2].map(it), [22, 1, 46, 253]);
});
