import type { Xyz65 } from './types';
import type { Xyz50WithMode } from '../xyz50/types';

declare function convertXyz65ToXyz50(color: Xyz65): Xyz50WithMode;

export default convertXyz65ToXyz50;
