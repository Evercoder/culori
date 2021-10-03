import tape from 'tape';
import { okhsv, formatHex, formatCss } from '../src/index.js';

tape('rgb → okhsv', t => {
	t.equal(
		formatCss(okhsv('red')),
		'color(--okhsv 29.233885192342633 0.9995219692256989 1.0000000001685625)',
		'red'
	);
	t.equal(
		formatCss(okhsv('white')),
		'color(--okhsv 0 0 0.9999999923961898)',
		'white'
	);
	t.equal(formatCss(okhsv('black')), 'color(--okhsv 0 0 0)', 'black');
	t.equal(
		formatCss(okhsv('#3333')),
		'color(--okhsv 0 0 0.2209950715093747 / 0.2)',
		'#333'
	);
	t.end();
});

tape('okhsv → rgb', t => {
	t.equal(
		formatHex(
			'color(--okhsv 29.233885192342633 0.9995219692256989 1.0000000001685625)'
		),
		'#ff0000',
		'red'
	);
	t.equal(
		formatHex('color(--okhsv 0 0 0.9999999923961898)'),
		'#ffffff',
		'white'
	);
	t.equal(formatHex('color(--okhsv 0 0 0)'), '#000000', 'black');
	t.equal(
		formatHex('color(--okhsv 0 0 0.2209950715093747 / 0.2)'),
		'#333333',
		'#333'
	);
	t.end();
});
