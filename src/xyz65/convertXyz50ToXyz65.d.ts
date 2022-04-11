import type { Xyz50 } from '../xyz50/types';
import type { Xyz65WithMode } from './types';

declare function convertXyz50ToXyz65(color: Xyz50): Xyz65WithMode;

export default convertXyz50ToXyz65;
