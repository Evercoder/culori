import test from 'node:test';
import assert from 'node:assert';
import { random } from '../src/index.js';

test('random (rgb)', test => {
	let c1 = random();
	let c2 = random('rgb', { r: 0.1 });
	let c3 = random('rgb', { r: [0.4, 0.6] });

	assert.equal(c1.mode, 'rgb');
	assert.ok(c1.r >= 0);
	assert.ok(c1.r <= 1);

	assert.equal(c2.r, 0.1);
	assert.ok(c3.r >= 0.4);
	assert.ok(c3.r <= 0.6);
});

test('random (lch)', test => {
	let c = random('lch');
	assert.equal(c.mode, 'lch');
});
