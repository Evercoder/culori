import type { Oklab } from '../oklab/types';
import type { Okhsl } from './types';

declare function convertOklabToOkhsl(color: Omit<Oklab, 'mode'>): Okhsl;

export default convertOklabToOkhsl;
