// Color space definitions
import modeA98 from '../a98/definition.js';
import modeHsl from '../hsl/definition.js';
import modeHsv from '../hsv/definition.js';
import modeHwb from '../hwb/definition.js';
import modeLab from '../lab/definition.js';
import modeLab65 from '../lab65/definition.js';
import modeLch from '../lch/definition.js';
import modeLch65 from '../lch65/definition.js';
import modeLrgb from '../lrgb/definition.js';
import modeP3 from '../p3/definition.js';
import modeProphoto from '../prophoto/definition.js';
import modeRec2020 from '../rec2020/definition.js';
import modeRgb from '../rgb/definition.js';
import modeXyz50 from '../xyz50/definition.js';
import modeXyz65 from '../xyz65/definition.js';
import { useMode } from '../modes.js';

export const a98 = useMode(modeA98);
export const hsl = useMode(modeHsl);
export const hsv = useMode(modeHsv);
export const hwb = useMode(modeHwb);
export const lab = useMode(modeLab);
export const lab65 = useMode(modeLab65);
export const lch = useMode(modeLch);
export const lch65 = useMode(modeLch65);
export const lrgb = useMode(modeLrgb);
export const p3 = useMode(modeP3);
export const prophoto = useMode(modeProphoto);
export const rec2020 = useMode(modeRec2020);
export const rgb = useMode(modeRgb);
export const xyz50 = useMode(modeXyz50);
export const xyz65 = useMode(modeXyz65);

export const xyz = xyz65;
