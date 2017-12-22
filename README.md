# pixi-center

Center `PIXI.Sprite`, `PIXI.Text`, & `PIXI.Container` vertically and horizontally with ease. Actually you can center anything which inherits from `PIXI.DisplayObject`. It will round to the nearest pixel so your text stays sharp!

**Working example**

https://jsfiddle.net/brenwell/zpk590p6/


## Install

```shell
npm i pixi-center
```

## Importing

For convenience **pixi-center** will be automatically added to `PIXI.displayObject` which almost everything, including `PIXI.Sprite` and `PIXI.Text`, inerit from.

#### common.js

```js
require('pixi.js')
require('pixi-center')
```

#### es6 modules

```js
import pixi from 'pixi.js'
import pixiPause from 'pixi-center'
```

## Usage

### Methods

```js
mySprite.centerX(
    width,      // container width
    options     // see options (Optional)
)

mySprite.centerY(
    height,     // container height
    options     // see options (Optional)
)

mySprite.centerXY(
    width,      // container width
    height,     // container height
    options     // see options (Optional)
)

mySprite.centerAt(
    coordinates, // Coordinates e.g. {x:10,y:30}
    options     // see options (Optional)
)
```


### Using the parent to center

This is the simplest example. **Pixi-center** uses the parent's width and/or height if no options are passed. Which means, your object needs to be added to a container before calling centerXY.

```js
const label = new PIXI.Text(text,style)
container.addChild(label)

// call after the object has been added to a child
label.centerXY()
```

### Explictly supplying the bounds for which the element should center

This will center the text within a theoretical box of `width:200` by `height:300`

```js
label.centerXY(200,300)
```

### Center one axis only

This will center the text vertically within a theoretical box of `height:300`, and then horizontally within the container,

```js
const label = new PIXI.Text(text,style)
// center just the x axis within 500px
label.centerY(500)

container.addChild(label)

// center just the y axis with the parent container
label.centerY()
```

### Center at a point

This will center the label at the given coordinate, regardless of anchor values.

```js
label.centerAt({x: 10, y: 10})
```

## Options

The possible options are

```js
const opts = {
    round: true, // default is true. Applies to centerX, centerY & centerXY.
    anchorX: 0, // if not set will take from object. Applies to centerX & centerXY.
    anchorY: 0  // if not set will take from objecy. Applies to centerY & centerXY.
}
```

### Round to pixel

By default pixi-center will play objects on whole pixels, by rounding them. Which is great for text as it will be crystal clear. However at times this behaviour is undesirable. Passing the options with `round:false` as the last argument will disable this.

```js
label.centerX( undefined, {round: false} )
label.centerY( undefined, {round: false} )
label.centerXY( undefined, undefined, {round: false} )
label.centerAt( {x: 0, y: 0}, {round: false} )
```

### Anchor positions

By default pixi-center will account for an elements anchor points when centering. But this can be overwritten if you wish to. By Passing the options with `anchorX` or `anchorY` as the last argument.

```js
label.centerX( undefined, {anchorX: 0} )
label.centerY( undefined, {anchorY: 0} )
label.centerXY( undefined, undefined, {anchorX: 0, anchorY: 0.5} )
label.centerAt( {x: 0, y: 0}, {anchorX: 0, anchorY: 0.5} )
```

## Update on Resize

You can simply call any of the `center` functions on window.resize

```js
window.onresize = (e) => label.centerXY()
```

Or for elements with an update method you could re-center when it is fired

```js
mySprite.update = () => mySprite.centerXY()
```
