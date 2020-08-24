import lerp from './lerp';
import gamma from '../easing/gamma';
import { interpolatorPiecewise } from './piecewise';

const interpolatorLinear = interpolatorPiecewise(lerp);

const interpolateLinear = (fixup, γ = 1) => arr => {
	let ease = gamma(γ);
	return t => interpolatorLinear((fixup || (v => v))(arr))(ease(t));
};

export {
	interpolatorLinear,
	// legacy
	interpolateLinear
};
