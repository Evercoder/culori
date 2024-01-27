import test from 'node:test';
import assert from 'node:assert';

import midpoint from '../src/easing/midpoint.js';
import {
	easingSmoothstep,
	easingSmoothstepInverse
} from '../src/easing/smoothstep.js';
import smootherstep from '../src/easing/smootherstep.js';
import samples from '../src/samples.js';

test('easingMidpoint', t => {
	let noop = midpoint(0.5);
	let curve = midpoint(0.2);

	assert.equal(noop(0.1), 0.1);
	assert.equal(noop(0.4), 0.4);
	assert.equal(noop(0.5), 0.5);
	assert.equal(noop(0.7), 0.7);
	assert.equal(noop(1), 1);

	assert.equal(curve(0), 0);
	assert.equal(curve(1), 1);
});

test('easingSmoothstep', t => {
	assert.equal(easingSmoothstep(0), 0);
	assert.equal(easingSmoothstep(1), 1);
	assert.equal(easingSmoothstep(0.5), 0.5);
});

test('easingSmoothstepInverse', t => {
	samples(5).forEach(x => {
		assert.ok(
			Math.abs(easingSmoothstepInverse(easingSmoothstep(x)) - x) < 1e-15,
			`roundtrip: ${x}`
		);
	});
});

test('easingSmootherstep', t => {
	assert.equal(smootherstep(0), 0);
	assert.equal(smootherstep(1), 1);
	assert.equal(smootherstep(0.5), 0.5);
});
