import convert from './convert';
const converter = convert('lrgb');
export default color => converter(color);