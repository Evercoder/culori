# Doing things in Culori vs. Chroma

§ chroma.__mix__( _color1_, _color2_, _ratio=0.5_, _mode='rgb'_)

```js
culori.interpolate([color1, color2], mode)(ratio)
```

§ chroma.__average__( _colors_, _mode='rgb'_)

Not implemented.

§ chroma.__blend__( _color1_ , _color2_, _blend_mode_ )

Not implemented.

§ chroma.__random__()

Returns a random color. Not implemented.


§ chroma.contrast()

Not implemented yet.

§ chroma.distance()

Not implemented yet.

§ chroma.deltaE()

Not implemented yet.

§ chroma.brewer

Not implemented yet.

§ chroma.limits

Not implemented yet.

§ color.alpha

Accessible as property on the color object.

§ color.brighten() and color.darken()

Not implemented yet.

§ color.saturate(), color.desaturate()

§ color.temperature()


§ color.set() and get()

With a color in mode A, set a channel in mode B, and return to mode A

```js
let c = B(color);
A({ ...c, c.channel = X });
```

