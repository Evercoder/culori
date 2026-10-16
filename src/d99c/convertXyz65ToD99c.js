import { kE } from './constants.js';
import convertXyz65ToLab65 from '../lab65/convertXyz65ToLab65.js';
import normalizeHue from '../util/normalizeHue.js';

const convertXyz65ToD99c = ({ x, y, z, alpha }) => {
    x = x || 0;
    y =  y || 0;
    z = z || 0;
    const myX = 1.1 * x - 0.1 * z;
    const myLab = convertXyz65ToLab65({ x: myX, y, z, alpha });
    const L99c = (1 / kE) * 317.65 * Math.log(1 + 0.0037 * myLab.l);
    const f = 0.94 * myLab.b;
    const G = Math.sqrt(myLab.a * myLab.a + f * f);
    const C99c = 23 * Math.log(1 + 0.066 * G);
    const h99c = Math.atan2(f, myLab.a);
    const a99c = C99c * Math.cos(h99c);
    const b99c = C99c * Math.sin(h99c);

    let res = {
        mode: 'd99c',
        l: L99c,
        a: a99c,
        b: b99c,
        c: C99c,
        h: normalizeHue(h99c * 180 / Math.PI)
    };

    if (alpha !== undefined) res.alpha = alpha;
    return res;
};

export default convertXyz65ToD99c;
