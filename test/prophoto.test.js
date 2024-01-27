import test from 'node:test';
import assert from 'node:assert';
import { prophoto, rgb, formatCss } from '../src/index.js';

test('prophoto', t => {
	assert.deepEqual(
		prophoto('white'),
		{
			mode: 'prophoto',
			r: 0.9999999886664714,
			g: 1.000000032778334,
			b: 0.9999999636791803
		},
		'white'
	);
	assert.deepEqual(
		prophoto('black'),
		{ mode: 'prophoto', r: 0, g: 0, b: 0 },
		'black'
	);
	assert.deepEqual(
		prophoto('red'),
		{
			mode: 'prophoto',
			r: 0.7022480690905015,
			g: 0.2757205683151893,
			b: 0.10354759457098542
		},
		'red'
	);
});

test('color(prophoto-rgb)', t => {
	assert.deepEqual(prophoto('color(prophoto-rgb 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'prophoto'
	});
	assert.deepEqual(prophoto('color(prophoto-rgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'prophoto'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(prophoto-rgb 0% 50% 0.5 / 25%)'),
		'color(prophoto-rgb 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(
		rgb('color(prophoto-rgb none 0.5 none)'),
		'prophoto to rgb is ok'
	);
	assert.deepEqual(
		rgb('color(prophoto-rgb none 0.5 none)'),
		rgb('color(prophoto-rgb 0 0.5 0')
	);
	assert.ok(prophoto('rgb(none 100 20)'), 'rgb to prophoto is ok');
	assert.deepEqual(prophoto('rgb(none 100 20)'), prophoto('rgb(0 100 20)'));
});
