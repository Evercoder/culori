import lerp from './lerp';
import { interpolatorPiecewise } from './piecewise';

export const interpolatorLinear = interpolatorPiecewise(lerp);
