import tape from 'tape';
import { p3, formatCss } from '../src/index.js';

tape('p3', t => {
	t.deepEqual(p3('white'), {
		mode: 'p3',
		r: 1.0000557432255317,
		g: 0.9999925423005881,
		b: 0.999904428542237
	});
	t.deepEqual(p3('black'), { mode: 'p3', r: 0, g: 0, b: 0 });
	t.deepEqual(p3('red'), {
		mode: 'p3',
		r: 0.9175519791705169,
		g: 0.20030416187200784,
		b: 0.13857345204350563
	});
	t.end();
});

tape('color(display-p3)', t => {
	t.deepEqual(p3('color(display-p3 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'p3'
	});
	t.deepEqual(p3('color(display-p3 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'p3'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(display-p3 0% 50% 0.5 / 25%)'),
		'color(display-p3 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
