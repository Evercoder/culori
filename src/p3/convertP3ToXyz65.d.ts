import type { P3 } from './types';
import type { Xyz65WithMode } from '../xyz65/types';

declare function convertP3ToXyz65(color: P3): Xyz65WithMode;

export default convertP3ToXyz65;
