import hsv_to_rgb from '../converters/hsv_to_rgb';
import rgb_to_hsv from '../converters/rgb_to_hsv';
import convert, { defineConverter } from './convert';
defineConverter('hsv', { rgb: hsv_to_rgb }, { rgb: rgb_to_hsv }, ['h', 's', 'v', 'alpha']);
const converter = convert('hsv');
export default color => converter(color);