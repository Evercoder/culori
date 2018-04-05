let tape = require('tape');
let culori = require('../');
let { toArray } = culori;

tape('toArray() produces an array', function(test) {
	test.deepEqual(
		toArray()(culori('rgb(0,50,100)')),
		[ 0, 0.19607843137254902, 0.39215686274509803, undefined ]
	)

	test.end()
})