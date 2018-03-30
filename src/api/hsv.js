import convert from './convert';
import prepare from './prepare';

export default color => convert(prepare(color, 'hsv'), 'hsv');