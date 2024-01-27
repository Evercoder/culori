import test from 'node:test';
import assert from 'node:assert';
import { dlab, rgb, formatCss } from '../src/index.js';

test('dlab', t => {
	assert.deepEqual(
		dlab('white'),
		{ mode: 'dlab', l: 100, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0
	assert.deepEqual(
		dlab('#111'),
		{ mode: 'dlab', l: 5.938147621379976, a: 0, b: 0 },
		'#111'
	);

	assert.deepEqual(
		dlab('black'),
		{ mode: 'dlab', l: 0, a: 0, b: 0 },
		'black'
	);
	assert.deepEqual(
		dlab('red'),
		{
			mode: 'dlab',
			l: 57.28917941426675,
			a: 39.49797800074304,
			b: 30.518440059252875
		},
		'red'
	);
});

test('color(--din99o-lab)', t => {
	assert.deepEqual(dlab('color(--din99o-lab 30 0.5 1 / 0.25)'), {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'dlab'
	});
	assert.deepEqual(dlab('color(--din99o-lab 0 50% 0.5 / 25%)'), {
		l: 0,
		a: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'dlab'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--din99o-lab 0 50% 0.5 / 25%)'),
		'color(--din99o-lab 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--din99o-lab none 0.5 none)'), 'dlab to rgb is ok');
	assert.deepEqual(
		rgb('color(--din99o-lab none 0.5 none)'),
		rgb('color(--din99o-lab 0 0.5 0)')
	);
	assert.ok(dlab('rgb(none 100 20)'), 'rgb to dlab is ok');
	assert.deepEqual(dlab('rgb(none 100 20)'), dlab('rgb(0 100 20)'));
});
