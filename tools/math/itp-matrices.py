import numpy as np;

np.set_printoptions(precision=16, sign='-', floatmode='fixed');

XYZ_D65_TO_REC2020 = np.array([
    [1.7166511879712683, -0.3556707837763925, -0.2533662813736599],
    [-0.6666843518324893, 1.6164812366349395, 0.0157685458139111],
    [0.0176398574453108, -0.0427706132578085, 0.9421031212354739]
]);
REC2020_TO_LMS = np.array([
    [1688, 2146, 262],
    [683, 2951, 462],
    [99, 309, 3688]
]) / 4096;
C = np.matmul(REC2020_TO_LMS, XYZ_D65_TO_REC2020);
Cinv = np.linalg.inv(C);

print(C);
print(Cinv);