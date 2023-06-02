import { parseHex, convertRgbToHsl, serializeHsl } from '../../src/index.js';

console.log(serializeHsl(convertRgbToHsl(parseHex('#ffcc00'))));
