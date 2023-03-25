const lerp = (a, b, t) => a + t * (b - a);
const unlerp = (a, b, v) => (v - a) / (b - a);

export { lerp, unlerp };
