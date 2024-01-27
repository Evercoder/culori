import test from 'node:test';
import assert from 'node:assert';
import { jab, rgb, formatHex, formatCss } from '../src/index.js';

test('jab', t => {
	assert.deepEqual(
		jab('white'),
		{ mode: 'jab', j: 0.222065249535743, a: 0, b: 0 },
		'white'
	);

	assert.deepEqual(
		jab('black'),
		{ mode: 'jab', j: 3.2311742677852644e-27, a: 0, b: 0 },
		'black'
	);

	assert.deepEqual(
		jab('red'),
		{
			mode: 'jab',
			j: 0.13438473104350068,
			a: 0.11788526260797229,
			b: 0.11187810901317238
		},
		'red'
	);
});

test('rgb -> jab -> rgb', t => {
	assert.equal(formatHex(jab('#cc3302')), '#cc3302', '#cc3302');
});

test('color(--jzazbz)', t => {
	assert.deepEqual(jab('color(--jzazbz 30 -10 +15 / 0.25)'), {
		j: 30,
		a: -10,
		b: +15,
		alpha: 0.25,
		mode: 'jab'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--jzazbz 30 -1e1 +15 / 0.25)'),
		'color(--jzazbz 30 -10 15 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--jzazbz none 0.5 none)'), 'jab to rgb is ok');
	assert.deepEqual(
		rgb('color(--jzazbz none 0.5 none)'),
		rgb('color(--jzazbz 0 0.5 0)')
	);
	assert.ok(jab('rgb(none 100 20)'), 'rgb to jab is ok');
	assert.deepEqual(jab('rgb(none 100 20)'), jab('rgb(0 100 20)'));
});
