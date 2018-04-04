import convert from './convert';
const converter = convert('hsi');
export default color => converter(color);