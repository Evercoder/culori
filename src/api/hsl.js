import convert from './convert';
const converter = convert('hsl');
export default color => converter(color);