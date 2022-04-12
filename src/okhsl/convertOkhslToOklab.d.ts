import type { Okhsl } from './types';
import type { Oklab } from '../oklab/types';

declare function convertOkhslToOklab(hsl: Omit<Okhsl, 'mode'>): Oklab;

export default convertOkhslToOklab;
