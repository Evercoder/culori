import { parseHex, convertRgbToHsl, serializeHsl } from '../../src/index-fn.js';

console.log(serializeHsl(convertRgbToHsl(parseHex('#ffcc00'))));
