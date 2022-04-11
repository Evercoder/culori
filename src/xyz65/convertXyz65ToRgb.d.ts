import type { Xyz65 } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertXyz65ToRgb(color: Xyz65): RgbWithMode;

export default convertXyz65ToRgb;
