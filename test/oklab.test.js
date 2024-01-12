import tape from 'tape';
import {
	oklab,
	rgb,
	formatCss,
	useParser,
	removeParser
} from '../src/index.js';

tape('rgb → oklab', t => {
	t.deepEqual(
		oklab('white'),
		{ mode: 'oklab', l: 0.999999993473546, a: 0, b: 0 },
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
			l: 0.6279553606145515,
			a: 0.22486306106597417,
			b: 0.12584629853073503
		},
		'red'
	);
	t.end();
});

tape('color(--oklab) with custom ident registration', t => {
	const c = 'color(--oklab 30 0.5 1 / 0.25)';
	const cc = {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	};
	t.equal(oklab(c), undefined);
	useParser('--oklab', 'oklab');
	t.deepEqual(oklab(c), cc);
	removeParser('--oklab');
	t.equal(oklab(c), undefined);
	t.end();
});

tape('oklab()', t => {
	t.deepEqual(oklab('oklab(0.4 0.5 1 / 0.25)'), {
		l: 0.4,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'oklab'
	});
	t.deepEqual(oklab('oklab(25% -20% 125% / 15%)'), {
		mode: 'oklab',
		l: 0.25,
		a: -0.08,
		b: 0.5,
		alpha: 0.15
	});
	t.deepEqual(
		oklab('oklab(-0.5 1 0)'),
		{ l: 0, a: 1, b: 0, mode: 'oklab' },
		'clamp L to 0'
	);
	t.deepEqual(
		oklab('oklab(2 1 0)'),
		{ l: 1, a: 1, b: 0, mode: 'oklab' },
		'clamp L to 1'
	);

	t.deepEqual(
		oklab('oklab(0.4 -1 1 / -0.5)'),
		{ mode: 'oklab', l: 0.4, a: -1, b: 1, alpha: 0 },
		'clamp alpha < 0'
	);

	t.deepEqual(
		oklab('oklab(0.4 -1 1 / 1.5)'),
		{ mode: 'oklab', l: 0.4, a: -1, b: 1, alpha: 1 },
		'clamp alpha > 1'
	);
	t.end();
});

tape('formatCss', t => {
	t.equal(formatCss('oklab(30% 0.5 1 / 0.25)'), 'oklab(0.3 0.5 1 / 0.25)');
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('oklab(none 0.5 none)'), 'oklab to rgb is ok');
	t.deepEqual(rgb('oklab(none 0.5 none)'), rgb('oklab(0% 0.5 0%)'));
	t.ok(oklab('rgb(none 100 20)'), 'rgb to oklab is ok');
	t.deepEqual(oklab('rgb(none 100 20)'), oklab('rgb(0 100 20)'));
	t.end();
});
