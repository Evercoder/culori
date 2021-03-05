import convertLab65ToXyz65 from './convertLab65ToXyz65';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb';

const convertLab65ToRgb = lab => convertXyz65ToRgb(convertLab65ToXyz65(lab));

export default convertLab65ToRgb;
