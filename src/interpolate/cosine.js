/*
	Cosine interpolation
	--------------------

	Reference: 

		http://paulbourke.net/miscellaneous/interpolation/
 */

import identity from '../util/identity';
import lerp from '../util/lerp';
import cosine from '../easing/cosine';
import { interpolatorPiecewise } from './piecewise';

const interpolatorCosine = interpolatorPiecewise((a, b, t) =>
	lerp(a, b, cosine(t))
);

const interpolateCosine = (fixup = identity) => arr => {
	return interpolatorCosine(fixup(arr));
};

export { interpolatorCosine, interpolateCosine };
