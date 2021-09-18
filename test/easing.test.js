import tape from 'tape';

import midpoint from '../src/easing/midpoint.js';
import smoothstep from '../src/easing/smoothstep.js';
import smootherstep from '../src/easing/smootherstep.js';

tape('easingMidpoint', t => {
	let noop = midpoint(0.5);
	let curve = midpoint(0.2);

	t.equal(noop(0.1), 0.1);
	t.equal(noop(0.4), 0.4);
	t.equal(noop(0.5), 0.5);
	t.equal(noop(0.7), 0.7);
	t.equal(noop(1), 1);

	t.equal(curve(0), 0);
	t.equal(curve(1), 1);

	t.end();
});

tape('easingSmoothstep', t => {
	t.equal(smoothstep(0), 0);
	t.equal(smoothstep(1), 1);
	t.equal(smoothstep(0.5), 0.5);
	t.end();
});

tape('easingSmootherstep', t => {
	t.equal(smootherstep(0), 0);
	t.equal(smootherstep(1), 1);
	t.equal(smootherstep(0.5), 0.5);
	t.end();
});
