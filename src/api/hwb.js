import hwb_to_rgb from '../converters/hwb_to_rgb';
import rgb_to_hwb from '../converters/rgb_to_hwb';
import convert, { defineConverter } from './convert';
defineConverter('hwb', { rgb: hwb_to_rgb }, { rgb: rgb_to_hwb }, ['h', 'w', 'b', 'alpha']);
const converter = convert('hwb');
export default color => converter(color);