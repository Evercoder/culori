import type { Color, Find, Mode } from './common';

type NumberOrRange = number | [number, number];

type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;

type Constraints<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: NumberOrRange;
}>;

export default function random<M extends Mode>(
	mode: M,
	constraints: Constraints<M>
): Color | undefined;
