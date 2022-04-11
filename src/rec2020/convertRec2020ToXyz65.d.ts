import type { Rec2020 } from './types';
import type { Xyz65WithMode } from '../xyz65/types';

declare function convertRec2020ToXyz65(color: Rec2020): Xyz65WithMode;

export default convertRec2020ToXyz65;
