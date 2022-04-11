import type { Prophoto } from './types';
import type { Xyz50WithMode } from '../xyz50/types';

declare function convertProphotoToXyz50(color: Prophoto): Xyz50WithMode;

export default convertProphotoToXyz50;
