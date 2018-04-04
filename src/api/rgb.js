import convert, { defineConverter } from './convert';

defineConverter('rgb', {}, {}, ['r', 'g', 'b', 'alpha']);

const converter = convert('rgb');
export default color => converter(color);