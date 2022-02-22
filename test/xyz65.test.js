import tape from 'tape';
import { xyz65, formatCss } from '../src/index.js';

tape('xyz65', t => {
	/*
		These should theoretically be equal to the Xn, Yn, and Zn values
		from xyz65/constants.js, but there's a small rounding error for `y`.
	 */
	t.deepEqual(
		xyz65('white'),
		{
			mode: 'xyz65',
			x: 0.9504559270516715,
			y: 0.9999999999999999,
			z: 1.0890577507598784
		},
		'white'
	);

	t.deepEqual(xyz65('black'), { mode: 'xyz65', x: 0, y: 0, z: 0 });
	t.deepEqual(
		xyz65('red'),
		{
			mode: 'xyz65',
			x: 0.4123907992659593,
			y: 0.2126390058715102,
			z: 0.0193308187155918
		},
		'red'
	);
	t.deepEqual(
		xyz65('#00cc0080'),
		{
			mode: 'xyz65',
			x: 0.21591920006651102,
			y: 0.43183840013302205,
			z: 0.071973066688837,
			alpha: 0.5019607843137255
		},
		'#00cc0080'
	);
	t.end();
});

tape('color(xyz)', t => {
	t.deepEqual(xyz65('color(xyz 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.deepEqual(xyz65('color(xyz 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.end();
});

tape('color(xyz-d65)', t => {
	t.deepEqual(xyz65('color(xyz-d65 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.deepEqual(xyz65('color(xyz-d65 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.end();
});

tape('color(--xyz-d65)', t => {
	t.deepEqual(xyz65('color(--xyz-d65 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.deepEqual(xyz65('color(--xyz-d65 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz65'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(xyz 0% 50% 0.5 / 25%)'),
		'color(xyz-d65 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
