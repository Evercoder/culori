---
layout: layouts/default
title: Getting Started
---

## Try it online

You can use [npm.runkit.com/culori](https://npm.runkit.com/culori) as a playground to test various API methods without installing culori in your project. [Observable](https://beta.observablehq.com) is another great place to tinker with the library and see the results visually.

## Install it as an npm package

<a href="https://www.npmjs.org/package/culori"><img src="https://img.shields.io/npm/v/culori.svg?style=flat" alt="npm version"></a> <a href="https://bundlephobia.com/result?p=culori"><img src="https://badgen.net/bundlephobia/minzip/culori" alt="bundlephobia"></a>

culori is bundled as UMD and ES [on npm](https://npmjs.com/package/culori). Install it using `npm` or `yarn`:

```bash
# using npm
npm install culori

# using yarn
yarn add culori
```

You can then import culori in your project:

```js
// CJS style: import the whole library
let culori = require('culori');

// ES style: import individual methods
import { rgb } from 'culori';
```

## Add it via the `<script>` tag

To import culori as a `<script>` tag to use in a web page, you can load it from [unpkg](https://unpkg.com):

```html
<script src='https://unpkg.com/culori'></script>
```
