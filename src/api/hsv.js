import convert from './convert';
const converter = convert('hsv');
export default color => converter(color);