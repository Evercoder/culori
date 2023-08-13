---
layout: default.njk
title: "Getting Started with Culori"
---

## Install Culori from npm

Culori is distributed [on npm](https://npmjs.com/package/culori) in a variety of formats. Install it with:

```bash
npm install culori
```

Then start importing functions from [the API](/api/):

```js
import { rgb } from 'culori';

rgb('tomato');
// ⇒ Object { mode: "rgb", r: 1, g: 0.38823529411764707, b: 0.2784313725490196 }
```

For code that runs in browsers, you may want to streamline the bundle to only include the parts of Culori you're using. See [Optimize bundle size with tree-shaking](/guides/tree-shaking/) for guidance on switching your imports to use `'culori/fn'` instead of `'culori'` once you're done prototyping.

## Fetch Culori from a CDN

You can use Culori from your favorite Content Delivery Network to create quick prototypes in HTML. Here are a few popular choices: 

CDN | URL
--- | ---
[unpkg](https://unpkg.com/) | `https://unpkg.com/{{pkg.name}}`
[jsDelivr](https://www.jsdelivr.com/) | `https://cdn.jsdelivr.net/npm/{{pkg.name}}`
[skypack](https://www.skypack.dev/) | `https://cdn.skypack.dev/{{pkg.name}}`

Use it as an ES module: 

```html
<script type='module'>
	import { rgb } from 'https://cdn.skypack.dev/{{pkg.name}}';
	console.log(rgb('salmon'));
</script>
```

...or using a traditional `<script>` tag. The library will be made available under the `culori` global variable:

```html
<script src="https://unpkg.com/culori"></script>
<script>
	console.log(culori.rgb('salmon'));
</script>
```

## Use Culori online

### In your browser's console

The library is available on this website as the global variable `culori`, so can try the API in your browser's console as you read through the examples. 

### Observable

If you prefer to see the results visually, [Observable](https://beta.observablehq.com) is a great place to tinker with the library. 

Add this cell and you're good to go:

```js
culori = import('culori@{{pkg.version}}');
```

It's often useful to pin the library to a specific version, to make sure your old notebooks don't break if the API changes in a new major version of the library.

## Use Culori in Deno

The library is published to [deno.land/x/culori](https://deno.land/x/culori) for usage in [Deno](https://deno.land/):

```js
import { rgb } from 'https://deno.land/x/culori@{{pkg.version}}/index.js';

rgb('tomato');
```
