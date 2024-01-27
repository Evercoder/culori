import test from 'node:test';
import assert from 'node:assert';
import {
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from '../src/index.js';

test('fixupHueShorter', t => {
	assert.deepEqual(
		fixupHueShorter([0, 340, 30, 0, 170]),
		[0, -20, 30, 0, 170]
	);
	assert.deepEqual(fixupHueShorter([-250, -8]), [110, -8]);
});

test('fixupHueLonger', t => {
	assert.deepEqual(
		fixupHueLonger([0, 340, 30, 0, 170]),
		[0, 340, 30, 360, 170]
	);

	assert.deepEqual(
		fixupHueLonger([0, 179, 179, 360]),
		[0, -181, -181, 0],
		'equal consecutive values'
	);
});

test('fixupHueIncreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	assert.deepEqual(fixupHueIncreasing(hues), [0, 340, 390, 720, 890]);
});

test('fixupHueDecreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	assert.deepEqual(fixupHueDecreasing(hues), [0, -20, -330, -360, -550]);
});
