import test from 'node:test';
import assert from 'node:assert';
import { dlch, rgb, formatCss } from '../src/index.js';

test('dlch', t => {
	assert.deepEqual(dlch('white'), { mode: 'dlch', l: 100, c: 0 }, 'white');
	assert.deepEqual(
		dlch('#111'),
		{ mode: 'dlch', l: 5.938147621379976, c: 0 },
		'#111'
	);
	assert.deepEqual(dlch('black'), { mode: 'dlch', l: 0, c: 0 }, 'black');
	assert.deepEqual(
		dlch('red'),
		{
			mode: 'dlch',
			l: 57.28917941426675,
			c: 49.914581534832,
			h: 37.691765574369924
		},
		'red'
	);
});

test('color(--din99o-lch)', t => {
	assert.deepEqual(dlch('color(--din99o-lch 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'dlch'
	});
	assert.deepEqual(dlch('color(--din99o-lch 0 50% 0.5 / 25%)'), {
		l: 0,
		c: 0.5,
		h: 0.5,
		alpha: 0.25,
		mode: 'dlch'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--din99o-lch 0 50% 0.5 / 25%)'),
		'color(--din99o-lch 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--din99o-lch none 0.5 none)'), 'dlch to rgb is ok');
	assert.deepEqual(
		rgb('color(--din99o-lch none 0.5 none)'),
		rgb('color(--din99o-lch 0% 0.5 0)')
	);
	assert.ok(dlch('rgb(none 100 20)'), 'rgb to dlch is ok');
	assert.deepEqual(dlch('rgb(none 100 20)'), dlch('rgb(0 100 20)'));
});
