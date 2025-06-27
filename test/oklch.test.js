import test from 'node:test';
import assert from 'node:assert';
import {
	rgb,
	oklch,
	formatCss,
	useParser,
	removeParser,
	displayable,
	inGamut
} from '../src/index.js';

test('oklch', t => {
	assert.deepEqual(
		oklch('white'),
		{ mode: 'oklch', l: 1.0000000000000002, c: 0 },
		'white'
	);
	assert.deepEqual(
		oklch('#111'),
		{ mode: 'oklch', l: 0.17763777307657064, c: 0 },
		'#111'
	);
	assert.deepEqual(oklch('black'), { mode: 'oklch', l: 0, c: 0 }, 'black');
	assert.deepEqual(
		oklch('red'),
		{
			mode: 'oklch',
			l: 0.6279553639214311,
			c: 0.2576833038053608,
			h: 29.233880279627854
		},
		'red'
	);
});

test('oklch()', t => {
	assert.deepEqual(oklch('oklch(0.3 0.5 1 / 0.25)'), {
		l: 0.3,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'oklch'
	});
	assert.deepEqual(oklch('oklch(40% 50% .5turn / 15%)'), {
		mode: 'oklch',
		l: 0.4,
		c: 0.2,
		h: 180,
		alpha: 0.15
	});
	assert.deepEqual(
		oklch('oklch(-1 0.5 0.5turn / 0.42)'),
		{
			mode: 'oklch',
			l: 0,
			c: 0.5,
			h: 180,
			alpha: 0.42
		},
		'clamp L to 0'
	);
	assert.deepEqual(
		oklch('oklch(2 0.5 40deg / 0.42)'),
		{
			mode: 'oklch',
			l: 1,
			c: 0.5,
			h: 40,
			alpha: 0.42
		},
		'clamp L to 1'
	);
	assert.deepEqual(
		oklch('oklch(0.4 0.5 10 / -0.5)'),
		{ mode: 'oklch', l: 0.4, c: 0.5, h: 10, alpha: 0 },
		'clamp alpha < 0'
	);

	assert.deepEqual(
		oklch('oklch(0.4 0.5 10 / 1.5)'),
		{ mode: 'oklch', l: 0.4, c: 0.5, h: 10, alpha: 1 },
		'clamp alpha > 1'
	);
});

test('color(--oklch) with custom ident', t => {
	const color_str = 'color(--oklch 30 0.5 1 / 0.25)';
	const color = {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'oklch'
	};
	assert.equal(oklch(color_str), undefined);
	useParser('--oklch', 'oklch');
	assert.deepEqual(oklch(color_str), color);
	removeParser('--oklch');
	assert.equal(oklch(color_str), undefined);
});

test('formatCss', t => {
	assert.equal(
		formatCss('oklch(30% 0.5 1 / 0.25)'),
		'oklch(0.3 0.5 1 / 0.25)'
	);
	assert.equal(
		formatCss(oklch('#ffffff00')),
		'oklch(1.0000000000000002 0 none / 0)'
	);
});

test('Issue #255', t => {
	assert.deepEqual(rgb(oklch('tomato')), {
		mode: 'rgb',
		r: 0.9999999999999997,
		g: 0.38823529411764784,
		b: 0.2784313725490196
	});
	assert.ok(displayable(oklch('tomato')));
});

test('Issue #249', t => {
	assert.ok(displayable('oklch(100% 0 0)'));
	assert.ok(inGamut('rgb')('oklch(100% 0 0)'));
});
