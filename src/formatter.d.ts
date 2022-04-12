import type { Color } from './common';
import type { Rgb } from './rgb/types';
import type { Hsl } from './hsl/types';

export function serializeHex(color: undefined): undefined;
export function serializeHex(color: Omit<Rgb, 'alpha'>): string;

export function serializeHex8(color: undefined): undefined;
export function serializeHex8(color: Omit<Rgb, 'mode'>): string;

export function serializeRgb(color: undefined): undefined;
export function serializeRgb(color: Partial<Rgb>): string | undefined;

export function serializeHsl(color: undefined): undefined;
export function serializeHsl(color: Partial<Hsl>): string | undefined;

export function formatCss(c: Color | string): string | undefined;

export function formatHex(c: Color | string): string | undefined;
export function formatHex8(c: Color | string): string | undefined;
export function formatRgb(c: Color | string): string | undefined;
export function formatHsl(c: Color | string): string | undefined;
