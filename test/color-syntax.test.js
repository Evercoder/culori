import tape from 'tape';
import { parse } from '../src/index.js';

tape('fewer values than channels', t => {
	t.deepEqual(parse('color(srgb)'), undefined);
	t.deepEqual(parse('color(srgb )'), undefined);
	t.deepEqual(parse('color(srgb/)'), undefined);
	t.deepEqual(parse('color(srgb /0.5)'), undefined);
	t.deepEqual(parse('color(srgb 0.25)'), undefined);
	t.deepEqual(parse('color(srgb 0.25 50%)'), undefined);
	t.deepEqual(parse('color( srgb 25% .5 / 0.2)'), undefined);
	t.end();
});

tape('more values than channels', t => {
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 0.66)'), undefined);
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 0.66 / 70% )'), undefined);
	t.deepEqual(parse('color(srgb 25% .5 75% 0.33 / 0.7)'), undefined);
	t.end();
});
