---
title: 'Optimize bundle size with tree-shaking'
---

The default `culori` import comes with the full set of color spaces and functions to let you prototype quickly and with fewer errors. However, the way color spaces are initialized prevents the library from being tree-shaken, so when you use a bundler (such as [esbuild](https://esbuild.github.io/), [Vite](https://vitejs.dev/), or [Parcel](https://parceljs.org/)), the entire Culori library is bundled regardless of what you're actually using.

This guides walks you through switching your imports to the tree-shakeable version once you're done prototyping and you're ready to ship an optimized bundle.

## Using `culori/fn`

To optimize the bundle size, you can opt into the tree-shakeable version by importing from `culori/fn` instead of `culori`:

```js
import { …, …, … } from 'culori/fn';
```

It works like the default import, with one key difference: __none of the color spaces are pre-registered into the library__. In fact, if you'd try to `parse()` a valid CSS color without having registered any color space, you'd get back `undefined`:

```js
import { parse } from 'culori/fn';

parse('tomato');
// ⇒ undefined
```

Instead, you need to import the definitions of the color spaces you want to support and register them manually with the `useMode()` method.

Since none of the color spaces are pre-registered the shortcuts to `converter(mode)`, such as `culori.rgb` or `culori.hsl`, are also missing. They are, however, helpfully returned by `useMode()`:

```js
import { useMode, modeRgb } from 'culori/fn';

const rgb = useMode(modeRgb);

console.log(rgb('tomato'));
// ⇒ Object { mode: "rgb", r: 1, g: 0.38823529411764707, b: 0.2784313725490196 }
```

To recreate a subset of Culori that only deals with valid CSS colors, you would use this: 

```js
import {
	useMode,
	modeA98,
	modeHsl,
	modeHwb,
	modeLab,
	modeLch,
	modeOklab,
	modeOklch,
	modeP3,
	modeProphoto,
	modeRec2020,
	modeRgb,
	modeXyz50,
	modeXyz65
} from 'culori/fn';

const a98 = useMode(modeA98);
const hsl = useMode(modeHsl);
const hwb = useMode(modeHwb);
const lab = useMode(modeLab);
const lch = useMode(modeLch);
const oklab = useMode(modeOklab);
const oklch = useMode(modeOklch);
const p3 = useMode(modeP3);
const prophoto = useMode(modeProphoto);
const rec2020 = useMode(modeRec2020);
const rgb = useMode(modeRgb);
const xyz50 = useMode(modeXyz50);
const xyz65 = useMode(modeXyz65);
```

You don't need to do all of this manually. You can import the [CSS bundle](#culori-css) instead.

### Using Culori without registering color spaces

You can import and use the [low-level parsing and conversion functions](/api#low-level-api) without registering any color space beforehand:

__hex-to-hsl-string.js__
```js
import { parseHex, convertRgbToHsl, serializeHsl } from 'culori/fn';

console.log(
	serializeHsl(
		convertRgbToHsl(
			parseHex('#ffcc00')
		)
	)
);
// ⇒ hsl(48, 100%, 50%)
```

When using a bundler such as [esbuild](https://esbuild.github.io/), a minified build fits on the back of a napkin.

<details>
<summary>Show esbuild output for code above</summary>

```bash
esbuild --bundle --minify hex-to-hsl-string.js
```

<code style='word-break: break-all;'>(()=>{var b=(e,o)=>{if(typeof e=="number"){if(o===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(o===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(o===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(o===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},u=b;var c=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,x=e=>{let o;return(o=e.match(c))?u(parseInt(o[1],16),o[1].length):void 0},l=x;function f({r:e,g:o,b:t,alpha:s}){let r=Math.max(e,o,t),a=Math.min(e,o,t),i={mode:"hsl",s:r===a?0:(r-a)/(1-Math.abs(r+a-1)),l:.5*(r+a)};return r-a!=0&&(i.h=(r===e?(o-t)/(r-a)+(o<t)*6:r===o?(t-e)/(r-a)+2:(e-o)/(r-a)+4)*60),s!==void 0&&(i.alpha=s),i}function p(e=4){return o=>typeof o=="number"?Math.round(o*(e=Math.pow(10,e)))/e:o}var n=p(2),d=e=>Math.max(0,Math.min(1,e));var m=e=>{if(e===void 0)return;let o=n(e.h||0),t=n(d(e.s)*100),s=n(d(e.l)*100);return e.alpha===void 0||e.alpha===1?`hsl(${o}, ${t}%, ${s}%)`:`hsla(${o}, ${t}%, ${s}%, ${n(d(e.alpha))})`};console.log(m(f(l("#ffcc00"))));})();
</code>
</details>

## Bootstrap packages

For convenience, a couple of bootstrap packages are available.

<h3 id='culori-css'><code>culori/css</code></h3>

Bootstrap all the color spaces available in CSS, plus a handful of  related ones we get for free, since they are used under the hood. 

It provides the following named exports: `a98`, `hsl`, `hsv`, `hwb`, `lab`, `lab65`, `lch`, `lch65`, `lrgb`, `oklab`, `oklch`, `p3`, `prophoto`, `rec2020`, `rgb`, `xyz50`, and `xyz65`.

```js
import 'culori/css';
import { interpolate } from 'culori/fn';

interpolate(['red', 'green'], 'lch');
```

### `culori/all` 

Bootstrap all the color spaces available in Culori.

It provides the following named exports: `a98`, `cubehelix`, `dlab`, `dlch`, `hsi`, `hsl`, `hsv`, `hwb`, `itp`, `jab`, `jch`, `lab`, `lab65`, `lch`, `lch65`, `lchuv`, `lrgb`, `luv`, `okhsl`, `okhsv`, `oklab`, `oklch`, `p3`, `prophoto`, `rec2020`, `rgb`, `xyb`, `xyz50`, `xyz65`, and `yiq`.

```js
import 'culori/all';
import { interpolate } from 'culori/fn';

interpolate(['red', 'green'], 'xyb');
```