import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';
import convertJabToXyz65 from './convertJabToXyz65';

const convertJabToRgb = color => convertXyz65ToRgb(convertJabToXyz65(color));

export default convertJabToRgb;
