import type { Rgb } from './rgb/types';
import type { Color } from './common';
import parseTransparent from './rgb/parseTransparent';
import prepare from './_prepare';

const p1: undefined = parseTransparent('asd');
const p2: Rgb = parseTransparent('transparent');
