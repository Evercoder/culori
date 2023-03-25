import tape from 'tape';
import { lerp, unlerp } from '../src/index.js';

tape('lerp()', t => {
	t.equal(lerp(10, 2, 0.5), 6);
	t.end();
});

tape('unlerp()', t => {
	t.equal(unlerp(5, 10, 2.5), -0.5);
	t.end();
});
