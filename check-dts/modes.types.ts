import { converters } from '../src/modes';
import type { Cubehelix, Rgb } from '../src';

const c1: ((c: Omit<Cubehelix, 'mode'>) => Rgb) | undefined =
	converters.cubehelix.rgb;
