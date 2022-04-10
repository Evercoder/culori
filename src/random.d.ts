import type { Color, Mode } from './common';

type NumberOrRange = number | [number, number];

type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;

type Constraints<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: NumberOrRange;
}>;

export default function random<M extends Mode>(
	mode: M,
	constraints: Constraints<M>
): Color | undefined;
