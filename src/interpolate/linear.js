import identity from '../util/identity';
import lerp from '../util/lerp';
import { interpolatorPiecewise } from './piecewise';

const interpolatorLinear = interpolatorPiecewise(lerp);

const interpolateLinear = (fixup = identity) => arr => {
	return interpolatorLinear(fixup(arr));
};

export {
	interpolatorLinear,
	// legacy
	interpolateLinear
};
