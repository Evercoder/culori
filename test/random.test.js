let tape = require('tape');
let culori = require('..');

let { random } = culori;

tape('random (rgb)', test => {
	console.log(random());

	test.end();
});
