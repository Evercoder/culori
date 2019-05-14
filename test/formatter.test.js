import tape from 'tape';
import { formatter, rgb } from '../src/index';

tape('formatter(hex)', function(test) {
	let hex = formatter('hex');

	test.equal(hex('tomato'), '#ff6347');

	test.end();
});

tape('formatter(rgb)', function(test) {
	let torgb = formatter('rgb');

	test.equal(torgb(rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	test.equal(torgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');

	test.end();
});
