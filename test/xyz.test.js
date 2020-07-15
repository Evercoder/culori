import tape from 'tape';
import { xyz } from '../src/index';

tape('xyz', t => {
	t.deepEqual(xyz('white'), { mode: 'xyz', x: 0.96422, y: 1, z: 0.82521 });
	t.deepEqual(xyz('black'), { mode: 'xyz', x: 0, y: 0, z: 0 });
	t.deepEqual(xyz('red'), {
		mode: 'xyz',
		x: 0.4360747,
		y: 0.2225045,
		z: 0.0139322
	});
	t.deepEqual(xyz('#00cc0080'), {
		mode: 'xyz',
		x: 0.23251271385359676,
		y: 0.4328708973203402,
		z: 0.058634351825878145,
		alpha: 0.5019607843137255
	});
	t.end();
});
