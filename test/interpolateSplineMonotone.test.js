import tape from 'tape';
import { samples, interpolateSplineMonotone } from '../src/index';

tape('interpolateSplineMonotone', t => {
	let data = [3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05];
	t.deepEqual(samples(10).map(interpolateSplineMonotone()(data)), [
		3,
		2.826611796982167,
		2.6089163237311386,
		1.3592592592592596,
		0.973593964334705,
		0.8984224965706447,
		0.7148148148148149,
		0.40631001371742104,
		0.09005486968449936,
		0.049999999999999975
	]);

	t.end();
});
