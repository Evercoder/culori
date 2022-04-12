import type { Jch } from './types';
import type { Jab } from '../jab/types';

declare function convertJchToJab(color: Omit<Jch, 'mode'>): Jab;

export default convertJchToJab;
