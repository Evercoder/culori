import convert from './convert';
const converter = convert('rgb');
export default color => converter(color);