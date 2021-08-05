import tape from 'tape';
import { hwb, formatCss } from '../src/index';

tape('hwb() parses hwb CSS strings', function (test) {
	test.deepEqual(
		hwb('hwb(100 0% 0%)'),
		{ h: 100, w: 0, b: 0, mode: 'hwb' },
		'black'
	);

	test.deepEqual(
		hwb('hwb(200 150% 150%)'),
		{ h: 200, w: 0.5, b: 0.5, mode: 'hwb' },
		'grey'
	);

	test.deepEqual(
		hwb('hwb(200 150% 150% / 50%)'),
		{ h: 200, w: 0.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha [0-1])'
	);

	test.deepEqual(
		hwb('hwb(200 150% 150% / .5)'),
		{ h: 200, w: 0.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha percentage)'
	);

	test.end();
});

tape('formatCss', t => {
	t.equal(formatCss('hwb(200 150% 150% / .5)'), 'hwb(200 50% 50% / 0.5)');
	t.equal(formatCss('hwb(200 150% 150% / 100%)'), 'hwb(200 50% 50%)');
	t.equal(formatCss('hwb(200 150% 150%)'), 'hwb(200 50% 50%)');
	t.end();
});
