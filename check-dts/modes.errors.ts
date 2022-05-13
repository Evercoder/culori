import { converters } from '../src/modes';
import type { Cubehelix, Rgb } from '../src';

// THROWS Type '((c: Omit<Cubehelix, "mode">) => Rgb) | undefined' is not assignable to type '(c: Omit<Cubehelix, "mode">) => Rgb'
const c1: (c: Omit<Cubehelix, 'mode'>) => Rgb = converters.cubehelix.rgb;
