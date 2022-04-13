import type { Color, TakeColorChannels, Mode, Find } from './common';
import type { Rgb } from './rgb/types';

type NumberOrRange = number | [number, number];

type Constraints<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: NumberOrRange;
}>;

declare function random(): Rgb;
declare function random<M extends Mode>(
	mode: M,
	constraints?: Constraints<M>
): Find<Color, M>;
declare function random(mode: undefined, constraints?: Constraints<'rgb'>): Rgb;

export default random;
