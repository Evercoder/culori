import tape from 'tape';
import { oklab, formatCss } from '../src/index.js';

tape('rgb → oklab', t => {
	t.deepEqual(
		oklab('white'),
		{ mode: 'oklab', l: 0.9999999934735462, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in OKLab
	t.deepEqual(
		oklab('#111'),
		{ mode: 'oklab', l: 0.1776377719172259, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(oklab('black'), { mode: 'oklab', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		oklab('red'),
		{
			mode: 'oklab',
			l: 0.6279553606145516,
			a: 0.22486306106597398,
			b: 0.1258462985307351
		},
		'red'
	);
	t.end();
});

tape('color(--oklab)', t => {
	t.deepEqual(oklab('color(--oklab 0.5 0.5 1 / 0.25)'), {
		l: 0.5,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	});
	t.deepEqual(oklab('color(--oklab 50% 50% 1 / 0.25)'), {
		l: 0.5,
		a: 0,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--oklab 50% 50% 1 / 0.25)'),
		'color(--oklab 0.5 0 1 / 0.25)'
	);
	t.end();
});
