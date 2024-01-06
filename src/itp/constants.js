// PQ Constants
// https://en.wikipedia.org/wiki/High-dynamic-range_video#Perceptual_quantizer
export const M1 = 2610 / 16384;
export const M2 = 2523 / 32;
export const IM1 = 16384 / 2610;
export const IM2 = 32 / 2523;
export const C1 = 3424 / 4096;
export const C2 = 2413 / 128;
export const C3 = 2392 / 128;

// Maximum luminance in PQ is 10,000 cd/m^2
// Relative XYZ has Y=1 for media white
// BT.2048 says media white Y=203 at PQ 58
//
// This is confirmed here: https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-BT.2408-3-2019-PDF-E.pdf
export const YW = 203;
