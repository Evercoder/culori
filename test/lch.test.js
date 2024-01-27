import test from 'node:test';
import assert from 'node:assert';
import { lch, rgb, formatCss } from '../src/index.js';

test('lch', t => {
	assert.deepEqual(
		lch('white'),
		{ mode: 'lch', l: 100.00000139649632, c: 0 },
		'white'
	);
	assert.deepEqual(
		lch('#111'),
		{ mode: 'lch', l: 5.063329676301251, c: 0 },
		'#111'
	);
	assert.deepEqual(lch('black'), { mode: 'lch', l: 0, c: 0 }, 'black');
	assert.deepEqual(
		lch('red'),
		{
			mode: 'lch',
			l: 54.29054294696968,
			c: 106.83719104365966,
			h: 40.85766878213079
		},
		'red'
	);
	assert.deepEqual(lch('lch(20% 30% .5turn / 10%)'), {
		mode: 'lch',
		l: 20,
		c: 45,
		h: 180,
		alpha: 0.1
	});
	assert.deepEqual(lch('lch(20% -30% .5turn / 10%)'), {
		mode: 'lch',
		l: 20,
		c: 0,
		h: 180,
		alpha: 0.1
	});
});

test('formatCss', t => {
	assert.equal(formatCss('lch(40% 10 30 / 50%)'), 'lch(40 10 30 / 0.5)');
	assert.equal(formatCss('lch(40% 10 30 / 100%)'), 'lch(40 10 30)');
	assert.equal(formatCss('lch(40% 10 30)'), 'lch(40 10 30)');
	assert.equal(
		formatCss(lch('#ffffff00')),
		'lch(100.00000139649632 0 none / 0)'
	);
});

test('missing components', t => {
	assert.ok(rgb('lch(none 0.5 none)'), 'lch to rgb is ok');
	assert.deepEqual(rgb('lch(none 0.5 none)'), rgb('lch(0% 0.5 0)'));
	assert.ok(lch('rgb(none 100 20)'), 'rgb to lch is ok');
	assert.deepEqual(lch('rgb(none 100 20)'), lch('rgb(0 100 20)'));
});
