import type { Jab } from '../jab/types';
import type { Jch } from './types';

declare function convertJabToJch(color: Omit<Jab, 'mode'>): Jch;

export default convertJabToJch;
