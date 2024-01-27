import test from 'node:test';
import assert from 'node:assert';
import {
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	rgb
} from '../src/index.js';

test('formatHex', t => {
	assert.equal(formatHex('tomato'), '#ff6347');
});

test('formatHex8', t => {
	assert.equal(
		formatHex8({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0 }),
		'#ffffff00'
	);
});

test('formatRgb', t => {
	assert.equal(formatRgb(rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	assert.equal(formatRgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');
});

test('formatHsl', t => {
	assert.equal(formatHsl('red'), 'hsl(0, 100%, 50%)');
	assert.equal(
		formatHsl({
			mode: 'hsl',
			h: 30.21,
			s: 0.2361,
			l: 0.48321,
			alpha: -0.2
		}),
		'hsla(30.21, 23.61%, 48.32%, 0)'
	);
	assert.equal(
		formatHsl({ mode: 'hsl', h: 405, s: 1.2, l: -1 }),
		'hsl(405, 100%, 0%)'
	);
});
