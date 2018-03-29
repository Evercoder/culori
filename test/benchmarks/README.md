# Culori benchmarks

## Benchmarks

### RGB parse speed

This benchmark measures the performance of parsing strings such as `rgb(255, 255, 255)`. 

Library | 16.7 million colors
------- | -------------------
d3-color | 8s
__culori__ | __11s__
chroma | 63s
tinycolor | 34s

`culori` is much faster than `chroma` and `tinycolor` and comparable in speed with `d3-color`; however, it handles more `rgb` formats than `d3-color`.

## Running the benchmarks

In the `culori/test/benchmarks` folder, run `npm install` (or `yarn`) to fetch all the dependencies. 

`node index.js` executes all the benchmarks.