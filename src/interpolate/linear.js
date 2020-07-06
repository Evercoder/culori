import identity from '../util/identity';
import lerp from '../util/lerp';
import gamma from '../easing/gamma';
import { interpolatorPiecewise } from './piecewise';

const interpolatorLinear = interpolatorPiecewise(lerp);

const interpolateLinear = (fixup, γ = 1) => arr => {
	return t => interpolatorLinear((fixup || identity)(arr))(gamma(t, γ));
};

export {
	interpolatorLinear,
	// legacy
	interpolateLinear
};
