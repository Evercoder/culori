import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'rgb',
	keys: ['r', 'g', 'b', 'alpha']
})

export default converter;