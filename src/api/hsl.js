import hsl_to_rgb from '../converters/hsl_to_rgb';
import rgb_to_hsl from '../converters/rgb_to_hsl';
import convert, { defineConverter } from './convert';
defineConverter('hsl', { rgb: hsl_to_rgb }, { rgb: rgb_to_hsl }, ['h', 's', 'l', 'alpha']);
const converter = convert('hsl');
export default color => converter(color);