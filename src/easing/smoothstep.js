/*
	Smoothstep easing function. 
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
export default t => t * t * (3 - 2 * t);
