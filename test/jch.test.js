import test from 'node:test';
import assert from 'node:assert';
import { formatRgb, formatCss, jch, rgb } from '../src/index.js';

test('PQ_inv negative value', t => {
	assert.equal(
		formatRgb({ mode: 'jch', j: 0.01768, c: 0.095, h: 77 }),
		'rgb(42, 0, 0)'
	);
});

test('color(--jzczhz)', t => {
	assert.deepEqual(jch('color(--jzczhz 30 10e1 -15 / 0.25)'), {
		j: 30,
		c: 100,
		h: -15,
		alpha: 0.25,
		mode: 'jch'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--jzczhz 30 1e1 +15 / 0.25)'),
		'color(--jzczhz 30 10 15 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--jzczhz none 0.5 none)'), 'jch to rgb is ok');
	assert.deepEqual(
		rgb('color(--jzczhz none 0.5 none)'),
		rgb('color(--jzczhz 0% 0.5 0)')
	);
	assert.ok(jch('rgb(none 100 20)'), 'rgb to jch is ok');
	assert.deepEqual(jch('rgb(none 100 20)'), jch('rgb(0 100 20)'));
});
