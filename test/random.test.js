import tape from 'tape';
import { random } from '../src/index.js';

tape('random (rgb)', test => {
	let c1 = random();
	let c2 = random('rgb', { r: 0.1 });
	let c3 = random('rgb', { r: [0.4, 0.6] });
	let c4 = random(undefined, { r: 0.1 });

	test.equal(c1.mode, 'rgb');
	test.ok(c1.r >= 0);
	test.ok(c1.r <= 1);

	test.equal(c2.mode, 'rgb');
	test.equal(c2.r, 0.1);

	test.equal(c3.mode, 'rgb');
	test.ok(c3.r >= 0.4);
	test.ok(c3.r <= 0.6);

	test.equal(c4.mode, 'rgb');
	test.equal(c4.r, 0.1);

	test.end();
});

tape('random (lch)', test => {
	let c = random('lch');
	test.equal(c.mode, 'lch');
	test.end();
});
