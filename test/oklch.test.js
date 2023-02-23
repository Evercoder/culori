import tape from 'tape';
import { oklch, formatCss } from '../src/index.js';

tape('oklch', t => {
	t.deepEqual(
		oklch('white'),
		{ mode: 'oklch', l: 0.999999993473546, c: 0 },
		'white'
	);
	t.deepEqual(
		oklch('#111'),
		{ mode: 'oklch', l: 0.1776377719172259, c: 0 },
		'#111'
	);
	t.deepEqual(oklch('black'), { mode: 'oklch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		oklch('red'),
		{
			mode: 'oklch',
			l: 0.6279553606145515,
			c: 0.25768330773615683,
			h: 29.2338851923426
		},
		'red'
	);
	t.end();
});

tape('oklch()', t => {
	t.deepEqual(oklch('oklch(30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'oklch'
	});
	t.end();
});

tape('color(--oklch)', t => {
	t.deepEqual(oklch('color(--oklch 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'oklch'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--oklch 30 0.5 1 / 0.25)'),
		'oklch(30 0.5 1 / 0.25)'
	);
	t.end();
});
