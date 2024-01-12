import tape from 'tape';
import { okhsl, rgb, formatHex, formatCss } from '../src/index.js';

tape('rgb → okhsl', t => {
	t.equal(
		formatCss(okhsl('red')),
		'color(--okhsl 29.2338851923426 1.0000000001434 0.5680846525040861)',
		'red'
	);
	t.equal(
		formatCss(okhsl('white')),
		'color(--okhsl none 0 0.9999999923961895)',
		'white'
	);
	t.equal(formatCss(okhsl('black')), 'color(--okhsl none 0 0)', 'black');
	t.equal(
		formatCss(okhsl('#3333')),
		'color(--okhsl none 0 0.2209950715093747 / 0.2)',
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
	t.deepEqual(
		formatHex('color(--okhsl 0 1 1)'),
		'#ffffff',
		'color(--okhsl 0 1 1)'
	);
	t.equal(
		formatHex('color(--okhsl 0 1 0)'),
		'#000000',
		'color(--okhsl 0 1 0)'
	);
	t.end();
});

tape('rgb → okhsl → rgb', t => {
	t.equal(formatHex(okhsl('red')), '#ff0000', 'red');
	t.equal(formatHex(okhsl('white')), '#ffffff', 'white');
	t.equal(formatHex(okhsl('black')), '#000000', 'black');
	t.equal(formatHex(okhsl('#3333')), '#333333', '#333');
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--okhsl none 0.5 none)'));
	t.deepEqual(
		rgb('color(--okhsl none 0.5 none)'),
		rgb('color(--okhsl 0 0.5 0)')
	);
	t.ok(okhsl('rgb(none 100 20)'));
	t.deepEqual(okhsl('rgb(none 100 20)'), okhsl('rgb(0 100 20)'));
	t.end();
});
