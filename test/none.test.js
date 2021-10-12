import tape from 'tape';
import { parse, formatRgb, formatHsl, formatCss } from '../src/index.js';

tape('parse "none" keyword', t => {
	t.deepEqual(
		parse('rgb(none, 255, 127.5)'),
		undefined,
		'rgb() <number> (legacy)'
	);
	t.deepEqual(
		parse('rgb(none 255 127.5 / none)'),
		{ mode: 'rgb', g: 1, b: 0.5 },
		'rgb() <number>'
	);
	t.deepEqual(
		parse('rgb(none, 100%, 50%)'),
		undefined,
		'rgb() <percentage> (legacy)'
	);
	t.deepEqual(
		parse('rgba(none 100% 50% / none)'),
		{ mode: 'rgb', g: 1, b: 0.5 },
		'rgb() <percentage>'
	);
	t.deepEqual(parse('hsl(none, 50%, 100%)'), undefined, 'hsl() (legacy)');
	t.deepEqual(parse('hsla(none 50% none)'), { mode: 'hsl', s: 0.5 }, 'hsl()');

	t.deepEqual(
		parse('hwb(none none 50% / none)'),
		{ mode: 'hwb', b: 0.5 },
		'hwb()'
	);

	t.deepEqual(parse('lab(none 12 none)'), { mode: 'lab', a: 12 }, 'lab()');

	t.deepEqual(
		parse('lch(5% none 1turn)'),
		{ mode: 'lch', l: 5, h: 360 },
		'lch()'
	);

	t.deepEqual(
		parse('color(display-p3 none none none / 0.1)'),
		{ mode: 'p3', alpha: 0.1 },
		'color()'
	);

	t.end();
});

tape('serialize "none" keyword', t => {
	t.equal(
		formatRgb('rgb(none 255 127.5)'),
		'rgb(none, 255, 128)',
		'formatRgb'
	);
	t.equal(
		formatHsl('hsl(none none none)'),
		'hsl(0, none, none)',
		'formatHsl'
	);
	t.equal(
		formatHsl('hsl(none none none)'),
		'hsl(0, none, none)',
		'formatHsl'
	);
	t.equal(
		formatCss('hsl(none none none)'),
		'hsl(0 none none)',
		'formatCss(hsl)'
	);
	t.equal(
		formatCss('lab(none none none / none)'),
		'lab(none none none)',
		'formatCss(lab)'
	);
	t.equal(
		formatCss('lch(none none none / none)'),
		'lch(none none 0)',
		'formatCss(lch)'
	);
	t.end();
});
