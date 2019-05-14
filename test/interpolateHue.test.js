import tape from 'tape';
import { interpolateHue, formatter } from '../src/index';

tape('interpolate/hue', function(test) {
	test.deepEqual(interpolateHue([0, 360]), [0, 0], '[0, 360]');

	test.deepEqual(interpolateHue([360, 0]), [0, 0], '[360, 0]');

	test.deepEqual(interpolateHue([350, 0]), [350, 360]);

	test.deepEqual(interpolateHue([0, 350]), [0, -10]);
	test.end();
});
