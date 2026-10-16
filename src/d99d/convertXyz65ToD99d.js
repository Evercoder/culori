import { deg50, sinDeg50, cosDeg50 } from './constants.js';
import convertXyz65ToLab65 from '../lab65/convertXyz65ToLab65.js';
import normalizeHue from '../util/normalizeHue.js';

const convertXyz65ToD99d = ({ x, y, z, alpha }) => {
    x = x || 0;
    y = y || 0;
    z = z || 0;
    const myX = 1.12 * x - 0.12 * z;
    const myLab = convertXyz65ToLab65({ x: myX, y, z, alpha });
    const L99d = 325.22 * Math.log(1 + 0.0036 * myLab.l);
    const e = myLab.a * cosDeg50 + myLab.b * sinDeg50;
    const f = 1.14 * (myLab.b * cosDeg50 - myLab.a * sinDeg50);
    const G = Math.sqrt(e * e + f * f);
    const C99d = 22.5 * Math.log(1 + 0.06 * G);

    const h99d = Math.atan2(f, e) + deg50;
    const a99d = C99d * Math.cos(h99d);
    const b99d = C99d * Math.sin(h99d);

    let res = {
        mode: 'd99d',
        l: L99d,
        a: a99d,
        b: b99d,
        c: C99d,
        h: normalizeHue(h99d * 180 / Math.PI)
    };

    if (alpha !== undefined) res.alpha = alpha;
    return res;
};

export default convertXyz65ToD99d;
