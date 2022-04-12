import type { Prophoto } from './types';
import type { Xyz50 } from '../xyz50/types';

declare function convertProphotoToXyz50(color: Omit<Prophoto, 'mode'>): Xyz50;

export default convertProphotoToXyz50;
