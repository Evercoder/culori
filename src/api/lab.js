import convert from './convert';
const converter = convert('lab');
export default color => converter(color);