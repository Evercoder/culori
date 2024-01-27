import test from 'node:test';
import assert from 'node:assert';
import { cubehelix, formatCss, rgb } from '../src/index.js';

test('color(--cubehelix)', t => {
	assert.deepEqual(cubehelix('color(--cubehelix 30 0.5 1 / 0.25)'), {
		h: 30,
		s: 0.5,
		l: 1,
		alpha: 0.25,
		mode: 'cubehelix'
	});
	assert.deepEqual(cubehelix('color(--cubehelix 0 50% 0.5 / 25%)'), {
		h: 0,
		s: 0.5,
		l: 0.5,
		alpha: 0.25,
		mode: 'cubehelix'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--cubehelix 0 50% 0.5 / 25%)'),
		'color(--cubehelix 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--cubehelix none 0.5 none)'));
	assert.deepEqual(
		rgb('color(--cubehelix none 0.5 none)'),
		rgb('color(--cubehelix 0 0.5 0)')
	);
	assert.ok(cubehelix('rgb(none 100 20)'));
	assert.deepEqual(cubehelix('rgb(none 100 20)'), cubehelix('rgb(0 100 20)'));
});
