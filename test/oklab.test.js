import tape from 'tape';
import { oklab, formatCss, useParser, removeParser } from '../src/index.js';

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
	t.deepEqual(oklab('oklab(30 0.5 1 / 0.25)'), {
		l: 30,
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
	t.end();
});

tape('formatCss', t => {
	t.equal(formatCss('oklab(30% 0.5 1 / 0.25)'), 'oklab(0.3 0.5 1 / 0.25)');
	t.end();
});
