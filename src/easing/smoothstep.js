/*
	Smoothstep easing function. 
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
const smoothstep = t => t * t * (3 - 2 * t);

export default smoothstep;
