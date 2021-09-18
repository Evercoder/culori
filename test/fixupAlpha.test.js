import tape from 'tape';
import { fixupAlpha } from '../src/index.js';

tape('fixupAlpha: some defined', t => {
	t.deepEqual(fixupAlpha([undefined, 0, undefined]), [1, 0, 1]);
	t.end();
});

tape('fixupAlpha: all undefined', t => {
	t.deepEqual(fixupAlpha([undefined, undefined, undefined]), [
		undefined,
		undefined,
		undefined
	]);
	t.end();
});
