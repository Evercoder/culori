let tape = require('tape');
let culori = require('../');

tape('formatter(hex)', function(test) {
	let hex = culori.formatter('hex');

	test.equal(hex('tomato'), '#ff6347');

	test.end();
});

tape('formatter(rgb)', function(test) {
	let rgb = culori.formatter('rgb');

	test.equal(rgb(culori.rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	test.equal(rgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');

	test.end();
});
