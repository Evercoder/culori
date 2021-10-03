import tape from 'tape';
import { okhsl, formatHex, formatCss } from '../src/index.js';

tape('rgb → okhsl', t => {
	t.equal(
		formatCss(okhsl('red')),
		'color(--okhsl 29.233885192342633 1.0000000001433997 0.5680846525040862)',
		'red'
	);
	t.equal(
		formatCss(okhsl('white')),
		'color(--okhsl 0 0 0.9999999923961898)',
		'white'
	);
	t.equal(formatCss(okhsl('black')), 'color(--okhsl 0 0 0)', 'black');
	t.equal(
		formatCss(okhsl('#3333')),
		'color(--okhsl 0 0 0.2209950715093747 / 0.2)',
		'#333'
	);
	t.end();
});

tape('okhsl → rgb', t => {
	t.equal(
		formatHex(
			'color(--okhsl 29.233885192342633 1.0000000001433997 0.5680846525040862)'
		),
		'#ff0000',
		'red'
	);
	t.equal(
		formatHex('color(--okhsl 0 0 0.9999999923961898)'),
		'#ffffff',
		'white'
	);
	t.equal(formatHex('color(--okhsl 0 0 0)'), '#000000', 'black');
	t.equal(
		formatHex('color(--okhsl 0 0 0.2209950715093747 / 0.2)'),
		'#333333',
		'#333'
	);
	t.end();
});
