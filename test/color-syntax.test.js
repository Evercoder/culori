import tape from 'tape';
import { parse } from '../src/index.js';

tape('fewer values than channels', t => {
	t.deepEqual(parse('color(srgb)'), { mode: 'rgb', r: 0, g: 0, b: 0 });
	t.deepEqual(parse('color(srgb )'), { mode: 'rgb', r: 0, g: 0, b: 0 });
	t.deepEqual(parse('color(srgb/)'), undefined);
	t.deepEqual(parse('color(srgb /0.5)'), {
		mode: 'rgb',
		r: 0,
		g: 0,
		b: 0,
		alpha: 0.5
	});
	t.deepEqual(parse('color(srgb 0.25)'), {
		mode: 'rgb',
		r: 0.25,
		g: 0,
		b: 0
	});
	t.deepEqual(parse('color(srgb 0.25 50%)'), {
		mode: 'rgb',
		r: 0.25,
		g: 0.5,
		b: 0
	});
	t.deepEqual(parse('color( srgb 25% .5 / 0.2)'), {
		mode: 'rgb',
		r: 0.25,
		g: 0.5,
		b: 0,
		alpha: 0.2
	});
	t.end();
});

tape('more values than channels', t => {
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 0.66)'), {
		mode: 'rgb',
		r: 0.25,
		g: 0.5,
		b: 0.75
	});
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 0.66 / 70% )'), {
		mode: 'rgb',
		r: 0.25,
		g: 0.5,
		b: 0.75,
		alpha: 0.7
	});
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 / 0.7)'), {
		mode: 'rgb',
		r: 0.25,
		g: 0.5,
		b: 0.75,
		alpha: 0.7
	});
	t.end();
});
