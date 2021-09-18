import jabDef from '../jab/definition.js';
import jchDef from '../jch/definition.js';
import luvDef from '../luv/definition.js';
import lchuvDef from '../lchuv/definition.js';
import cubehelixDef from '../cubehelix/definition.js';
import dlabDef from '../dlab/definition.js';
import dlchDef from '../dlch/definition.js';
import yiqDef from '../yiq/definition.js';
import oklabDef from '../oklab/definition.js';
import oklchDef from '../oklch/definition.js';
import hsiDef from '../hsi/definition.js';

import { defineMode } from '../modes.js';
import converter from '../converter.js';
import { differenceEuclidean } from '../difference.js';

defineMode(jabDef);
defineMode(jchDef);
defineMode(cubehelixDef);
defineMode(dlabDef);
defineMode(dlchDef);
defineMode(hsiDef);
defineMode(luvDef);
defineMode(lchuvDef);
defineMode(yiqDef);
defineMode(oklabDef);
defineMode(oklchDef);

let jab = converter('jab');
let jch = converter('jch');
let cubehelix = converter('cubehelix');
let dlab = converter('dlab');
let dlch = converter('dlch');
let hsi = converter('hsi');
let yiq = converter('yiq');
let luv = converter('luv');
let lchuv = converter('lchuv');
let oklab = converter('oklab');
let oklch = converter('oklch');

export { jab, jch, cubehelix, dlab, dlch, hsi, lchuv, luv, yiq, oklab, oklch };

/*
	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"
		
		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010) 

	Available at:
		
		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */
export const differenceKotsarenkoRamos = () =>
	differenceEuclidean('yiq', [0.5053, 0.299, 0.1957]);
