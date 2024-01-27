import test from 'node:test';
import assert from 'node:assert';
import { luv, rgb } from '../src/index.js';

test('luv', t => {
	assert.deepEqual(
		luv('white'),
		{
			mode: 'luv',
			l: 100.00000139649632,
			u: -0.00000836831738933014,
			v: 0.0000101992089921354
		},
		'white'
	);
	assert.deepEqual(luv('black'), { mode: 'luv', l: 0, u: 0, v: 0 }, 'black');
	assert.deepEqual(
		luv('red'),
		{
			mode: 'luv',
			l: 54.29054294696968,
			u: 175.03580817106865,
			v: 25.95390361533953
		},
		'red'
	);
	assert.deepEqual(
		luv('#00cc0080'),
		{
			mode: 'luv',
			l: 71.74973747305378,
			u: -69.38655858949816,
			v: 71.27396920932334,
			alpha: 0.5019607843137255
		},
		'#00cc0080'
	);
});

test('color(--luv)', t => {
	assert.deepEqual(luv('color(--luv 30 0.5 1 / 0.25)'), {
		l: 30,
		u: 0.5,
		v: 1,
		alpha: 0.25,
		mode: 'luv'
	});
});

test('missing components', t => {
	assert.ok(rgb('color(--luv none 0.5 none)'), 'luv to rgb is ok');
	assert.deepEqual(
		rgb('color(--luv none 0.5 none)'),
		rgb('color(--luv 0 0.5 0)')
	);
	assert.ok(luv('rgb(none 100 20)'), 'rgb to luv is ok');
	assert.deepEqual(luv('rgb(none 100 20)'), luv('rgb(0 100 20)'));
});
