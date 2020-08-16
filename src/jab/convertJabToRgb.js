import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';
import convertJabToXyz65 from './convertJabToXyz65';

export default color => convertXyz65ToRgb(convertJabToXyz65(color));
