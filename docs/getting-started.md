---
layout: layouts/default
title: Getting Started
menu-order: 1
---

## Try it online

The library is added to every page of this website, so you can try the API in your browser's console as you read through the examples. You can also use culori in the Runkit npm playground ([npm.runkit.com/culori](https://npm.runkit.com/culori)) to test the API without installing anything.

If you prefer to see the results visually, [Observable](https://beta.observablehq.com) is a great place to tinker with the library. Add this cell and you're good to go:

```
culori = require('culori@{{pkg.version}}');
```

(You can omit the version but it's useful to be specific while the API is still unstable, so that your old notebooks don't crash when something changes.)

## Install it as an npm package

<a href="https://www.npmjs.org/package/culori"><img src="https://img.shields.io/npm/v/culori.svg?style=flat-square&labelColor=d84f4c&color=black" alt="npm version"></a> <a href="https://bundlephobia.com/result?p=culori"><img src="https://img.shields.io/bundlephobia/minzip/culori?style=flat-square&labelColor=d84f4c&color=black" alt="npm version"></a>

culori is bundled as both UMD and ES [on npm](https://npmjs.com/package/culori). Install it using `npm`:

```bash
npm install culori
```

You can then import culori in your project:

```js
// CJS style: import the whole library
let culori = require('culori');

// ES style: import individual methods
import { rgb } from 'culori';
```

## Add it via the `<script>` tag

To import culori as a `<script>` tag to use in a web page, you can load it from [unpkg](https://unpkg.com). The library will be made available under the `culori` global variable.

```html
<script src="https://unpkg.com/culori"></script>
<script>
	console.log(culori.rgb('salmon'));
</script>
```
