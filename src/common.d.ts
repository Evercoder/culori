import { RgbWithMode } from './rgb/types';
import { HslWithMode } from './hsl/types';

export type Color = RgbWithMode | HslWithMode;

export type Mode = Pick<RgbWithMode | HslWithMode, 'mode'>['mode'];

export type Find<C, M extends Mode> = C extends { mode: M } ? C : never;
