import { RgbWithMode } from './rgb/types';
import { HslWithMode } from './hsl/types';

export type Color = RgbWithMode | HslWithMode;

export type Mode = Pick<RgbWithMode | HslWithMode, 'mode'>;
