import tape from 'tape';
import { hwb, rgb, formatCss } from '../src/index.js';

tape('hwb() parses hwb CSS strings', function (test) {
	test.deepEqual(
		hwb('hwb(100 0% 0%)'),
		{ h: 100, w: 0, b: 0, mode: 'hwb' },
		'black'
	);

	test.deepEqual(
		hwb('hwb(200 150% 150%)'),
		{ h: 200, w: 1.5, b: 1.5, mode: 'hwb' },
		'grey'
	);

	test.deepEqual(
		hwb('hwb(200 150% 50% / 50%)'),
		{ h: 200, w: 1.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha [0-1])'
	);

	test.deepEqual(
		hwb('hwb(200 150% 50% / .5)'),
		{ h: 200, w: 1.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha percentage)'
	);

	test.end();
});

tape('formatCss', t => {
	t.equal(formatCss('hwb(200 150% 50% / .5)'), 'hwb(200 150% 50% / 0.5)');
	t.equal(formatCss('hwb(200 150% 50% / 100%)'), 'hwb(200 150% 50%)');
	t.equal(formatCss('hwb(200 150% 50%)'), 'hwb(200 150% 50%)');
	t.equal(formatCss(hwb('#ffffff00')), 'hwb(none 100% 0% / 0)');
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('hwb(none 50% none)'));
	t.deepEqual(rgb('hwb(none 50% none)'), rgb('hwb(0deg 50% 0%'));
	t.ok(hwb('rgb(none 100 20)'));
	t.deepEqual(hwb('rgb(none 100 20)'), hwb('rgb(0 100 20)'));
	t.end();
});

tape('powerless components', t => {
	t.deepEqual(hwb(rgb('hwb(60deg 75% 50%)')), {
		mode: 'hwb',
		w: 0.6,
		b: 0.4
	});
	t.end();
});
