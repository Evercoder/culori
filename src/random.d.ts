import type { Color, Mode } from './common';

type NumberOrRange = number | [number, number];

type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

type Constraints<M extends Mode> = {
	[P in keyof Partial<Omit<Find<Color, M>, 'mode'>>]: NumberOrRange;
};

export default function random<M extends Mode>(
	mode: M,
	color: Constraints<M>
): Color | undefined;
