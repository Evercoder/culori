# Contributing

## Development

Tests are defined using the `node:test` and `node:assert` modules. Running the tests require Node 21 or newer:

```bash
npm run test
```

We use ESLint to lint JavaScript code. 


```bash
npm run lint
```

While Culori can be used from source in environments supporting ES Modules, we also use esbuild to build bundles in CommonJS, ESM, and UMD formats.

```bash
npm run build
```

## Documentation

The documentation website [culorijs.org] is built with Eleventy out of the `www/` folder, and deployed on GitHub pages via the `gh-pages` branch.

The following scripts are available:

```bash
npm run docs:start
npm run docs:build
npm run docs:deploy
```