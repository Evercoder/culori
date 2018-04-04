import lab_to_rgb from '../converters/lab_to_rgb';
import rgb_to_lab from '../converters/rgb_to_lab';
import convert, { defineConverter } from './convert';

defineConverter('lab', { rgb: lab_to_rgb }, { rgb: rgb_to_lab }, ['l', 'a', 'b', 'alpha']);

const converter = convert('lab');
export default color => converter(color);