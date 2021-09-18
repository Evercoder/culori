/*
	Cosine interpolation
	--------------------

	Reference: 

		http://paulbourke.net/miscellaneous/interpolation/
 */

import lerp from './lerp.js';
import easeInOutSine from '../easing/inOutSine.js';
import gamma from '../easing/gamma.js';
import { interpolatorPiecewise } from './piecewise.js';

// @deprecated
const cosine =
	(fixup, γ = 1) =>
	arr => {
		let ease = gamma(γ);
		let interpolator = interpolatorPiecewise((a, b, t) =>
			lerp(a, b, easeInOutSine(t))
		)((fixup || (v => v))(arr));
		return t => interpolator(ease(t));
	};

export default cosine;
