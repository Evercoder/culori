import type { Oklab } from '../oklab/types';
import type { OkhslWithMode } from './types';

declare function convertOklabToOkhsl(color: Oklab): OkhslWithMode;

export default convertOklabToOkhsl;
