# Culori benchmarks

## Benchmarks

### RGB parse speed

This benchmark measures the performance of parsing strings such as `rgb(255, 255, 255)`. 

Library | 16.7 million colors
------- | -------------------
d3-color | 8s
__culori__ | __12s__
tinycolor | 36s
chroma | 66s

`culori` is much faster than `chroma` and `tinycolor`. It's a bit slower than `d3-color`, but handles more RGB(A) CSS formats.

## Running the benchmarks

In the `culori/test/benchmarks` folder, run `npm install` (or `yarn`) to fetch all the dependencies. 

`node index.js` executes all the benchmarks.