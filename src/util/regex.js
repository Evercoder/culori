// converts a regexp to string
// (does not cover all cases, but for our purposes it works)
const s = r => r.toString().replace(/^\/|\/$/g, '');

// matches a number
const n = /([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/;

// matches a percentage
const p = /([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%/;
const sp = s(p);


// matches a percentage or number
const pn = `(?:${s(p)}|${s(n)})`;

// hue can be a number or an angle (number + angle unit)
const hue = `(?:${s(n)}(deg|grad|rad|turn)|${s(n)})`;

// Reference:
// https://drafts.csswg.org/css-color/#rgb-functions
export const rgb_legacy = new RegExp(`^rgba?\\(\\s*${pn}\\s*,\\s*${pn}\\s*,\\s*${pn}\\s*(?:,\\s*${pn}\\s*)?\\)$`);
export const rgb_current = new RegExp(`^rgba?\\(\\s*${pn}\\s+${pn}\\s+${pn}\\s*(?:\\/\\s*${pn}\\s*)?\\)$`);

// Reference:
// https://drafts.csswg.org/css-color/#the-hsl-notation
export const hsl_legacy = new RegExp(`^hsla?\\(\\s*${hue}\\s*,\\s*${sp}\\s*,\\s*${sp}\\s*(?:,\\s*${pn}\\s*)?\\)$`);
export const hsl_current = new RegExp(`^hsla?\\(\\s*${hue}\\s+${sp}\\s+${sp}\\s*(?:\\/\\s*${pn}\\s*)?\\)$`);

export const hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;