import tape from 'tape';
import { yiq, formatter } from '../src/index';

let rgb = formatter('rgb');

tape('rgb to yiq and back', function(test) {
	test.deepEqual(
		rgb(yiq('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	test.deepEqual(rgb(yiq('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');

	test.deepEqual(rgb(yiq('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');

	test.deepEqual(rgb(yiq('rgb(0, 120, 0)')), 'rgb(0, 120, 0)', 'blue');

	test.deepEqual(rgb(yiq('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');

	test.end();
});
