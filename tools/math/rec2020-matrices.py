import numpy as np;
np.set_printoptions(precision=16, sign='-', floatmode='fixed');

[Xw, Yw, Zw] = [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329];
[xr, yr, xg, yg, xb, yb] = [0.708, 0.292, 0.170, 0.797, 0.131, 0.046];

# http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html

Xr = xr / yr;
Yr = 1;
Zr = (1 - xr - yr) / yr;

Xg = xg / yg;
Yg = 1;
Zg = (1 - xg - yg) / yg;

Xb = xb / yb;
Yb = 1;
Zb = (1 - xb - yb) / yb;

X = np.array([
	[Xr, Xg, Xb],
	[Yr, Yg, Yb],
	[Zr, Zg, Zb]
]);

W = np.array([ Xw, Yw, Zw ]);

[Sr, Sg, Sb] = np.matmul(np.linalg.inv(X), W);

M = np.array([
	[ Sr * Xr, Sg * Xg, Sb * Xb ], 
	[ Sr * Yr, Sg * Yg, Sb * Yb ], 
	[ Sr * Zr, Sg * Zg, Sb * Zb ]
]);

print(M);
print(np.linalg.inv(M));