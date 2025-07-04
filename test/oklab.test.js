import test from 'node:test';
import assert from 'node:assert';
import {
	oklab,
	rgb,
	formatCss,
	useParser,
	removeParser
} from '../src/index.js';

test('rgb → oklab', t => {
	assert.deepEqual(
		oklab('white'),
		{ mode: 'oklab', l: 1.0000000000000002, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in OKLab
	assert.deepEqual(
		oklab('#111'),
		{ mode: 'oklab', l: 0.17763777307657064, a: 0, b: 0 },
		'#111'
	);

	assert.deepEqual(
		oklab('black'),
		{ mode: 'oklab', l: 0, a: 0, b: 0 },
		'black'
	);
	assert.deepEqual(
		oklab('red'),
		{
			mode: 'oklab',
			l: 0.6279553639214311,
			a: 0.22486306842627443,
			b: 0.12584627733058495
		},
		'red'
	);
});

test('color(--oklab) with custom ident registration', t => {
	const c = 'color(--oklab 30 0.5 1 / 0.25)';
	const cc = {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	};
	assert.equal(oklab(c), undefined);
	useParser('--oklab', 'oklab');
	assert.deepEqual(oklab(c), cc);
	removeParser('--oklab');
	assert.equal(oklab(c), undefined);
});

test('oklab()', t => {
	assert.deepEqual(oklab('oklab(0.4 0.5 1 / 0.25)'), {
		l: 0.4,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	});
	assert.deepEqual(oklab('oklab(25% -20% 125% / 15%)'), {
		mode: 'oklab',
		l: 0.25,
		a: -0.08,
		b: 0.5,
		alpha: 0.15
	});
	assert.deepEqual(
		oklab('oklab(-0.5 1 0)'),
		{ l: 0, a: 1, b: 0, mode: 'oklab' },
		'clamp L to 0'
	);
	assert.deepEqual(
		oklab('oklab(2 1 0)'),
		{ l: 1, a: 1, b: 0, mode: 'oklab' },
		'clamp L to 1'
	);

	assert.deepEqual(
		oklab('oklab(0.4 -1 1 / -0.5)'),
		{ mode: 'oklab', l: 0.4, a: -1, b: 1, alpha: 0 },
		'clamp alpha < 0'
	);

	assert.deepEqual(
		oklab('oklab(0.4 -1 1 / 1.5)'),
		{ mode: 'oklab', l: 0.4, a: -1, b: 1, alpha: 1 },
		'clamp alpha > 1'
	);
});

test('formatCss', t => {
	assert.equal(
		formatCss('oklab(30% 0.5 1 / 0.25)'),
		'oklab(0.3 0.5 1 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('oklab(none 0.5 none)'), 'oklab to rgb is ok');
	assert.deepEqual(rgb('oklab(none 0.5 none)'), rgb('oklab(0% 0.5 0%)'));
	assert.ok(oklab('rgb(none 100 20)'), 'rgb to oklab is ok');
	assert.deepEqual(oklab('rgb(none 100 20)'), oklab('rgb(0 100 20)'));
});
