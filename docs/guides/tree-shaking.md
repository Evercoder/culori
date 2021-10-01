---
title: 'Optimize bundle size with tree-shaking'
---

The default `culori` import comes with the full set of color spaces and functions to let you prototype quickly and with fewer errors. 

However, the way color spaces are initialized prevents the library from being tree-shaken, so when you use a bundler such as Webpack or Parcel, the entire Culori library is bundled regardless of what you're actually using.

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
	modeP3,
	modeProphoto,
	modeRec2020,
	modeRgb,
	modeXyz
} from 'culori/fn';

const a98 = useMode(modeA98);
const hsl = useMode(modeHsl);
const hwb = useMode(modeHwb);
const lab = useMode(modeLab);
const lch = useMode(modeLch);
const p3 = useMode(modeP3);
const prophoto = useMode(modeProphoto);
const rec2020 = useMode(modeRec2020);
const rgb = useMode(modeRgb);
const xyz = useMode(modeXyz);
```

> __Note:__ It's essential to register all the color spaces available in CSS with `useMode()` to make each color space's parsers available to functions such as `parse()` and `converter()`.