import rgb_to_lrgb from '../converters/rgb_to_lrgb';
import lrgb_to_rgb from '../converters/lrgb_to_rgb';
import convert, { defineConverter } from './convert';
defineConverter('lrgb', { rgb: lrgb_to_rgb }, { rgb: rgb_to_lrgb }, ['r', 'g', 'b', 'alpha']);
const converter = convert('lrgb');
export default color => converter(color);