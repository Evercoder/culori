import hsi_to_rgb from '../converters/hsi_to_rgb';
import rgb_to_hsi from '../converters/rgb_to_hsi';
import convert, { defineConverter } from './convert';
defineConverter('hsi', { rgb: hsi_to_rgb }, { rgb: rgb_to_hsi }, ['h', 's', 'i', 'alpha']);
const converter = convert('hsi');
export default color => converter(color);