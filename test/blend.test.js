import test from 'node:test';
import assert from 'node:assert';
import { blend } from '../src/index.js';

test('blendNormal', t => {
	assert.deepEqual(blend(['white', 'rgba(0, 0, 0, 0.5)']), {
		mode: 'rgb',
		r: 0.5,
		g: 0.5,
		b: 0.5,
		alpha: 1
	});

	assert.deepEqual(
		blend([
			{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 },
			{ mode: 'rgb', r: 0, g: 0, b: 1, alpha: 0.5 }
		]),
		{
			mode: 'rgb',
			r: 0.3333333333333333,
			g: 0,
			b: 0.6666666666666666,
			alpha: 0.75
		}
	);

	// blend with transparent source
	assert.deepEqual(
		blend([{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }, 'transparent']),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }
	);

	// blend with transparent backdrop
	assert.deepEqual(
		blend(['transparent', { mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }]),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }
	);
});
