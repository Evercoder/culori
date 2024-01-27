import test from 'node:test';
import assert from 'node:assert';
import { lab, rgb, formatCss } from '../src/index.js';

test('lab', t => {
	assert.deepEqual(
		lab('white'),
		{ mode: 'lab', l: 100.00000139649632, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in CIELab
	assert.deepEqual(
		lab('#111'),
		{ mode: 'lab', l: 5.063329676301251, a: 0, b: 0 },
		'#111'
	);

	assert.deepEqual(lab('black'), { mode: 'lab', l: 0, a: 0, b: 0 }, 'black');
	assert.deepEqual(
		lab('red'),
		{
			mode: 'lab',
			l: 54.29054294696968,
			a: 80.80492033462417,
			b: 69.89098825896278
		},
		'red'
	);

	assert.deepEqual(lab('lab(50% -10% 200% / 10%)'), {
		mode: 'lab',
		l: 50,
		a: -12.5,
		b: 250,
		alpha: 0.1
	});
});

test('formatCss', t => {
	assert.equal(formatCss('lab(40% 10 30 / 50%)'), 'lab(40 10 30 / 0.5)');
	assert.equal(formatCss('lab(40% 10 30 / 100%)'), 'lab(40 10 30)');
	assert.equal(formatCss('lab(40% 10 30)'), 'lab(40 10 30)');
});

test('missing components', t => {
	assert.ok(rgb('lab(none 0.5 none)'), 'lab to rgb is ok');
	assert.deepEqual(rgb('lab(none 0.5 none)'), rgb('lab(0% 0.5 0%)'));
	assert.ok(lab('rgb(none 100 20)'), 'rgb to lab is ok');
	assert.deepEqual(lab('rgb(none 100 20)'), lab('rgb(0 100 20)'));
});
