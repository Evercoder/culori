---
layout: layouts/default
title: "Getting Started"
menu-order: 1
---

## Install Culori from npm

Add Culori as a dependency to your project:

```bash
npm install culori
```

Then start using it:

```js
import { rgb } from 'culori';

rgb('tomato');
// ⇒ Object { mode: "rgb", r: 1, g: 0.38823529411764707, b: 0.2784313725490196 }
```

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

## Use it online

### In your browser's console

The library is added to every page of this website, so you can try the API in your browser's console as you read through the examples. 

### Runkit

You can also use Culori in the Runkit npm playground ([npm.runkit.com/culori](https://npm.runkit.com/culori)) to test the API without installing anything.

### Observable

If you prefer to see the results visually, [Observable](https://beta.observablehq.com) is a great place to tinker with the library. 

Add this cell and you're good to go:

```js
culori = import('culori@{{pkg.version}}');
```

It's often useful to pin the library to a specific version, to make sure your old notebooks don't break if the API changes in a new major version of the library.

