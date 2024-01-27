import test from 'node:test';
import assert from 'node:assert';
import { formatRgb, formatHex, rgb } from '../src/index.js';

test('formatRgb', t => {
	assert.deepEqual(
		formatRgb(rgb('rgb(200, 300, 100)')),
		'rgb(200, 255, 100)',
		'rgb'
	);

	assert.deepEqual(
		formatRgb(rgb('rgba(200, 300, 100, 0.1)')),
		'rgba(200, 255, 100, 0.1)',
		'rgb'
	);
});

test('formatHex', t => {
	assert.deepEqual(formatHex(rgb('#c0c2ff')), '#c0c2ff', '#c0c2ff');

	assert.deepEqual(formatHex(rgb('#00c2ff')), '#00c2ff', '#00c2ff');
});
