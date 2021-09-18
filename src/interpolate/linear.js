import lerp from './lerp.js';
import gamma from '../easing/gamma.js';
import { interpolatorPiecewise } from './piecewise.js';

const interpolatorLinear = interpolatorPiecewise(lerp);

const interpolateLinear =
	(fixup, γ = 1) =>
	arr => {
		let ease = gamma(γ);
		return t => interpolatorLinear((fixup || (v => v))(arr))(ease(t));
	};

export {
	interpolatorLinear,
	// legacy
	interpolateLinear
};
