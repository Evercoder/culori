import type { Color, TakeColorChannels, Mode } from './common';

type NumberOrRange = number | [number, number];

type Constraints<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: NumberOrRange;
}>;

export default function random<M extends Mode>(
	mode: M,
	constraints: Constraints<M>
): Color | undefined;
