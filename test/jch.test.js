import tape from 'tape';
import { formatRgb, formatCss, jch, rgb } from '../src/index.js';

tape('PQ_inv negative value', t => {
	t.equal(
		formatRgb({ mode: 'jch', j: 0.01768, c: 0.095, h: 77 }),
		'rgb(42, 0, 0)'
	);
	t.end();
});

tape('color(--jzczhz)', t => {
	t.deepEqual(jch('color(--jzczhz 30 10e1 -15 / 0.25)'), {
		j: 30,
		c: 100,
		h: -15,
		alpha: 0.25,
		mode: 'jch'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--jzczhz 30 1e1 +15 / 0.25)'),
		'color(--jzczhz 30 10 15 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--jzczhz none 0.5 none)'), 'jch to rgb is ok');
	t.deepEqual(
		rgb('color(--jzczhz none 0.5 none)'),
		rgb('color(--jzczhz 0% 0.5 0)')
	);
	t.ok(jch('rgb(none 100 20)'), 'rgb to jch is ok');
	t.deepEqual(jch('rgb(none 100 20)'), jch('rgb(0 100 20)'));
	t.end();
});
