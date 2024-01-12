import tape from 'tape';
import { okhsv, rgb, formatHex, formatCss } from '../src/index.js';

tape('rgb → okhsv', t => {
	t.equal(
		formatCss(okhsv('red')),
		'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)',
		'red'
	);
	t.equal(
		formatCss(okhsv('white')),
		'color(--okhsv none 0 1.00000009386827)',
		'white'
	);
	t.equal(formatCss(okhsv('black')), 'color(--okhsv none 0 0)', 'black');
	t.equal(
		formatCss(okhsv('#3333')),
		'color(--okhsv none 0 0.220995101721347 / 0.2)',
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
	t.equal(
		formatHex('color(--okhsv 0 1 1)'),
		'#ff0088',
		'color(--okhsv 0 1 1)'
	);
	t.equal(
		formatHex('color(--okhsv 0 1 0)'),
		'#000000',
		'color(--okhsv 0 1 0)'
	);
	t.end();
});

tape('rgb → okhsv → rgb', t => {
	t.equal(formatHex(okhsv('red')), '#ff0000', 'red');
	t.equal(formatHex(okhsv('white')), '#ffffff', 'white');
	t.equal(formatHex(okhsv('black')), '#000000', 'black');
	t.equal(formatHex(okhsv('#3333')), '#333333', '#333');
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--okhsv none 0.5 none)'));
	t.deepEqual(
		rgb('color(--okhsv none 0.5 none)'),
		rgb('color(--okhsv 0 0.5 0)')
	);
	t.ok(okhsv('rgb(none 100 20)'));
	t.deepEqual(okhsv('rgb(none 100 20)'), okhsv('rgb(0 100 20)'));
	t.end();
});
