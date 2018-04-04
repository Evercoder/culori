import convert from './convert';
const converter = convert('hwb');
export default color => converter(color);