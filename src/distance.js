import { getModeDefinition } from './modes';
import converter from './converter';

const euclidean = mode => {
	let channels = getModeDefinition(mode).channels;
	let conv = converter(mode);
	return (a, b) => {
		let colorA = conv(a);
		let colorB = conv(b);
		return Math.sqrt(
			channels.reduce(
				(delta, k) => 
					// ignore alpha channel in computing the euclidean distance
					delta + (k === 'alpha' ? 0 : Math.pow(colorA[k] - colorB[k], 2)), 
					0
				)
		);
	}
};

const cie94 = (KL = 1, K1 = 0.045, K2 = 0.015) => {
	let lab = converter('lab'),
		lch = converter('lch');
	
	return (a, b) => {

		let labA = lab(a), labB = lab(b);
		let lchA = lch(labA), lchB = lch(labB);

		let deltaL_squared = (labA.l - labB.l) ** 2;
		let deltaC_squared = (lchA.c - lchB.c) ** 2;
		let deltaH_squared = ((labA.a - labB.a) ** 2) + ((labA.b - labB.b) ** 2) - deltaC_squared;

		return Math.sqrt(
			deltaL_squared / (KL ** 2) + 
			deltaC_squared / ((1 + K1 * lchA.c) ** 2) +
			deltaH_squared / ((1 + K2 * lchA.c) ** 2)
		);
	}
}

/*
	The CIEDE2000 color difference.

	Original implementation in Matlab by Gaurav Sharma:
		http://www2.ece.rochester.edu/~gsharma/ciede2000/

	Based on the paper: 
		"The CIEDE2000 Color-Difference Formula: 
		Implementation Notes, Supplementary Test Data, 
		and Mathematical Observations" by Gaurav Sharma, 
		Wencheng Wu, Edul N. Dalal.
		http://www2.ece.rochester.edu/~gsharma/ciede2000/ciede2000noteCRNA.pdf
 */

const ciede2000 = (Kl = 1, Kc = 1, Kh = 1) => {
	let lab = converter('lab');
	return (std, smp) => {
		let LabStd = lab(std);
		let LabSmp = lab(smp);

		let lStd = LabStd.l;
		let aStd = LabStd.a;
		let bStd = LabStd.b;
		let cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		let lSmp = LabSmp.l;
		let aSmp = LabSmp.a;
		let bSmp = LabSmp.b;
		let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		let cAvg = (cStd + cSmp) / 2;
		
		let G = 0.5 * (1 - Math.sqrt(Math.pow(cAvg, 7) / (Math.pow(cAvg, 7) + Math.pow(25, 7))));

		let apStd = aStd * (1 + G);
		let apSmp = aSmp * (1 + G);
		
		let cpStd = Math.sqrt(apStd * apStd + bStd * bStd);
		let cpSmp = Math.sqrt(apSmp * apSmp + bSmp * bSmp);
		
		let hpStd = Math.abs(apStd) + Math.abs(bStd) === 0 ? 0 : Math.atan2(bStd, apStd);
			hpStd += (hpStd < 0) * 2 * Math.PI;

		let hpSmp = Math.abs(apSmp) + Math.abs(bSmp) === 0 ? 0 : Math.atan2(bSmp, apSmp);
			hpSmp += (hpSmp < 0) * 2 * Math.PI;

		let dL = lSmp - lStd;
		let dC = cpSmp - cpStd;
		
		let dhp = cpStd * cpSmp === 0 ? 0 : hpSmp - hpStd;
			dhp -= (dhp > Math.PI) * 2 * Math.PI;
			dhp += (dhp < -Math.PI) * 2 * Math.PI;

		let dH = 2 * Math.sqrt(cpStd * cpSmp) * Math.sin(dhp / 2);

		let Lp = (lStd + lSmp) / 2;
		let Cp = (cpStd + cpSmp) / 2;

		let hp;
		if (cpStd * cpSmp === 0) {
			hp = hpStd + hpSmp;
		} else {
			hp = (hpStd + hpSmp) / 2;
			hp -= (Math.abs(hpStd - hpSmp) > Math.PI) * Math.PI;
			hp += (hp < 0) * 2 * Math.PI;
		}

		let Lpm50 = Math.pow(Lp - 50, 2);
		let T = 1 - 
				0.17 * Math.cos(hp - Math.PI / 6) + 
				0.24 * Math.cos(2 * hp) + 
				0.32 * Math.cos(3 * hp + Math.PI / 30) -
				0.20 * Math.cos(4 * hp - 63 * Math.PI / 180);
		
		let Sl = 1 + (0.015 * Lpm50) / Math.sqrt(20 + Lpm50);
		let Sc = 1 + 0.045 * Cp;
		let Sh = 1 + 0.015 * Cp * T;
		
		let deltaTheta = 30 * Math.PI / 180 * Math.exp(-1 * Math.pow((180 / Math.PI * hp - 275)/25, 2));
		let Rc = 2 * Math.sqrt(
			Math.pow(Cp, 7) / (Math.pow(Cp, 7) + Math.pow(25, 7))
		);

		let Rt = -1 * Math.sin(2 * deltaTheta) * Rc;

		return Math.sqrt(
			Math.pow(dL / (Kl * Sl), 2) + 
			Math.pow(dC / (Kc * Sc), 2) + 
			Math.pow(dH / (Kh * Sh), 2) + 
			Rt * dC / (Kc * Sc) * dH / (Kh * Sh)
		);
	}
}

// todo
const cmc = () => {
	let lab = converter('lab');
	return (colorA, colorB) => NaN
}

const formulas = {
	cie76: () => euclidean('lab'),
	cie94: () => cie94(),
	ciede2000: () => ciede2000(),
	cmc: () => cmc(),
	euclidean: mode => euclidean(mode)
};

export default (formula = 'euclidean', mode = 'rgb') => {
	return formulas[formula](mode);
}