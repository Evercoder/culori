# Culori benchmarks

## Benchmarks

## RGB parse speed

This benchmark measures the performance of parsing strings such as `rgb(255, 255, 255)`. 

Library | 16.7 million colors
------- | -------------------
d3-color | 8s
__culori__ | __11s__
chroma | 63s
tinycolor | 34s

Currently, [d3-color](https://github.com/d3/d3-color) has the fastest RGB parser.

## Running the benchmarks

In the `culori/test/benchmarks` folder, run `npm install` (or `yarn`) to fetch all the dependencies. 

`node index.js` executes all the benchmarks.