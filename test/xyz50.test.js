import tape from 'tape';
import { xyz50, formatCss } from '../src/index.js';

tape('xyz50', t => {
	t.deepEqual(xyz50('white'), {
		mode: 'xyz50',
		x: 0.96422,
		y: 1,
		z: 0.82521
	});
	t.deepEqual(xyz50('black'), { mode: 'xyz50', x: 0, y: 0, z: 0 });
	t.deepEqual(xyz50('red'), {
		mode: 'xyz50',
		x: 0.4360747,
		y: 0.2225045,
		z: 0.0139322
	});
	t.deepEqual(xyz50('#00cc0080'), {
		mode: 'xyz50',
		x: 0.23251271385359676,
		y: 0.4328708973203402,
		z: 0.058634351825878145,
		alpha: 0.5019607843137255
	});
	t.end();
});

tape('color(xyz-d50)', t => {
	t.deepEqual(xyz50('color(xyz-d50 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz50'
	});
	t.deepEqual(xyz50('color(xyz-d50 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz50'
	});
	t.end();
});

tape('color(--xyz-d50)', t => {
	t.deepEqual(xyz50('color(--xyz-d50 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz50'
	});
	t.deepEqual(xyz50('color(--xyz-d50 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz50'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(xyz-d50 0% 50% 0.5 / 25%)'),
		'color(xyz-d50 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
