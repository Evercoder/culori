import identity from '../util/identity';
import lerp from '../util/lerp';
import gamma from '../easing/gamma';
import { interpolatorPiecewise } from './piecewise';

const interpolatorLinear = interpolatorPiecewise(lerp);

const interpolateLinear = (fixup, γ = 1) => arr => {
	let ease = gamma(γ);
	return t => interpolatorLinear((fixup || identity)(arr))(ease(t));
};

export {
	interpolatorLinear,
	// legacy
	interpolateLinear
};
