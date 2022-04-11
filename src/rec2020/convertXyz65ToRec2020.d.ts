import type { Xyz65 } from '../xyz65/types';
import type { Rec2020WithMode } from './types';

declare function convertXyz65ToRec2020(color: Xyz65): Rec2020WithMode;

export default convertXyz65ToRec2020;
