#!/usr/bin/python

import numpy as np
import io
from colour import (ILLUMINANTS, Lab_to_XYZ, sRGB_to_XYZ, XYZ_to_Lab, XYZ_to_sRGB)
from random import (random, randint)

D50 = ILLUMINANTS['CIE 1931 2 Degree Standard Observer']['D50']
D65 = ILLUMINANTS['CIE 1931 2 Degree Standard Observer']['D65']

f_srgb_lab_d50 = io.open('./datasets/pycolour-srgb-to-labd50.txt', 'w')
f_srgb_lab_d65 = io.open('./datasets/pycolour-srgb-to-labd65.txt', 'w')

for x in range(0, 1000):
    sRGB = np.array([ random(), random(), random() ])
    np.concatenate((sRGB, XYZ_to_Lab(sRGB_to_XYZ(sRGB), D50))).tofile(f_srgb_lab_d50, sep=" ", format="%.8f")
    f_srgb_lab_d50.write(u"\n")
    np.concatenate((sRGB, XYZ_to_Lab(sRGB_to_XYZ(sRGB), D65))).tofile(f_srgb_lab_d65, sep=" ", format="%.8f")
    f_srgb_lab_d65.write(u"\n")
    # print(XYZ_to_sRGB( XYZ, D50, 'Bradford'))

f_srgb_lab_d50.close()
f_srgb_lab_d65.close()

f_lab_d50_srgb = io.open('./datasets/pycolour-labd50-to-srgb.txt', 'w')
f_lab_d65_srgb = io.open('./datasets/pycolour-labd65-to-srgb.txt', 'w')

for x in range(0, 1000):
    Lab = np.array([ randint(0, 100), randint(-100, 100), randint(-100, 100) ])
    np.concatenate((Lab, XYZ_to_sRGB(Lab_to_XYZ(Lab, D50)))).tofile(f_lab_d50_srgb, sep=" ", format="%.8f")
    f_lab_d50_srgb.write(u"\n")
    np.concatenate((Lab, XYZ_to_sRGB(Lab_to_XYZ(Lab, D65)))).tofile(f_lab_d65_srgb, sep=" ", format="%.8f")
    f_lab_d65_srgb.write(u"\n")

f_lab_d50_srgb.close()
f_lab_d65_srgb.close()