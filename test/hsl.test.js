import test from 'node:test';
import assert from 'node:assert';
import { hsl, rgb, formatCss } from '../src/index.js';

test('rgb() converts from HSL to RGB', t => {
	assert.deepEqual(
		rgb(hsl({ h: 0, s: 0, l: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'lightness 0 should yield black'
	);

	assert.deepEqual(
		rgb(hsl({ h: 60, s: 0.25, l: 0 })),
		{ r: 0, g: 0, b: 0, mode: 'rgb' },
		'...regardless of hue and saturation'
	);

	assert.deepEqual(
		rgb(hsl({ h: 0, s: 0, l: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'saturation 0 should yield gray'
	);

	assert.deepEqual(
		rgb(hsl({ h: 60, s: 0, l: 0.25 })),
		{ r: 0.25, g: 0.25, b: 0.25, mode: 'rgb' },
		'...regardless of the hue'
	);

	assert.deepEqual(
		rgb(hsl({ h: 100, s: 0, l: 0.5 })),
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' },
		'...or the lightness'
	);
});

test('hsl() converts RGB to HSL', t => {
	assert.deepEqual(
		hsl(rgb({ r: 0, g: 0, b: 0 })),
		{ s: 0, l: 0, mode: 'hsl' },
		'black'
	);

	assert.deepEqual(
		hsl(rgb({ r: 0.25, g: 0.25, b: 0.25 })),
		{ s: 0, l: 0.25, mode: 'hsl' },
		'R = G = B yields undefined hue'
	);

	assert.deepEqual(
		hsl(rgb({ r: 0.6, g: 0.6, b: 0.6 })),
		{ s: 0, l: 0.6, mode: 'hsl' },
		'R = G = B yields zero saturation'
	);

	assert.deepEqual(
		hsl(rgb({ r: 1, g: 0, b: 0 })),
		{ h: 0, s: 1, l: 0.5, mode: 'hsl' },
		'red'
	);

	assert.deepEqual(
		hsl(rgb({ r: 1, g: 1, b: 0 })),
		{ h: 60, s: 1, l: 0.5, mode: 'hsl' },
		'yellow'
	);

	assert.deepEqual(
		hsl(rgb({ r: 0, g: 1, b: 0 })),
		{ h: 120, s: 1, l: 0.5, mode: 'hsl' },
		'green'
	);

	assert.deepEqual(
		hsl(rgb({ r: 0, g: 1, b: 1 })),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'cyan'
	);

	assert.deepEqual(
		hsl(rgb({ r: 0, g: 0, b: 1 })),
		{ h: 240, s: 1, l: 0.5, mode: 'hsl' },
		'blue'
	);

	assert.deepEqual(
		hsl(rgb({ r: 1, g: 0, b: 1 })),
		{ h: 300, s: 1, l: 0.5, mode: 'hsl' },
		'magenta'
	);
});

test('hsl() parses hsl / hsla CSS strings', t => {
	assert.deepEqual(
		hsl('hsl(0, 100%, 0%)'),
		{ s: 1, l: 0, h: 0, mode: 'hsl' },
		'black'
	);

	assert.deepEqual(
		hsl('hsl(100, 0%, 50%)'),
		{ s: 0, l: 0.5, h: 100, mode: 'hsl' },
		'grey'
	);

	assert.deepEqual(
		hsl('hsl(0, 100%, 50%)'),
		{ h: 0, s: 1, l: 0.5, mode: 'hsl' },
		'red'
	);

	assert.deepEqual(
		hsl('hsla(219, 34%, 46%, 1)'),
		{ mode: 'hsl', h: 219, s: 0.34, l: 0.46, alpha: 1 },
		'alpha [0-1]'
	);

	assert.deepEqual(
		hsl('hsla(219, 34%, 46%, 25%)'),
		{ mode: 'hsl', h: 219, s: 0.34, l: 0.46, alpha: 0.25 },
		'alpha percentage'
	);
});

test('CSS <number> in `hsl()` syntax', test => {
	assert.deepEqual(
		hsl('hsl(3e1, 1e2%, 0.5e2%)'),
		{ mode: 'hsl', h: 30, s: 1, l: 0.5 },
		'exponential notation'
	);
	assert.deepEqual(
		hsl('hsl(30.5, 90.6%, 48.3%)'),
		{ mode: 'hsl', h: 30.5, s: 0.9059999999999999, l: 0.483 },
		'float values'
	);
});

test('formatCss', t => {
	assert.equal(
		formatCss('hsl(.5turn 40% 20% / 50%)'),
		'hsl(180 40% 20% / 0.5)'
	);
	assert.equal(formatCss('hsl(.5turn 40% 20%)'), 'hsl(180 40% 20%)');
	assert.equal(formatCss('hsl(.5turn 40% 20% / 100%)'), 'hsl(180 40% 20%)');
	assert.equal(formatCss(hsl('#ffffff00')), 'hsl(none 0% 100% / 0)');
});

test('missing components', t => {
	assert.ok(rgb('hsl(none 50% none)'));
	assert.deepEqual(rgb('hsl(none 50% none)'), rgb('hsl(0deg 50% 0%)'));
	assert.ok(hsl('rgb(none 100 20)'));
	assert.deepEqual(hsl('rgb(none 100 20)'), hsl('rgb(0 100 20)'));
});
