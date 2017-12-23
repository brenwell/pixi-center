# pixi-center

Center `PIXI.Text`, `PIXI.Sprite`, & `PIXI.Container` vertically and horizontally with ease. Actually you can center anything which inherits from `PIXI.DisplayObject`. It will round to the nearest pixel so your text stays sharp!

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

**centerX**

Center an object horizontally inside a container

```js
mySprite.centerX(
    width,      // container width (Optional)
    options     // see options (Optional)
)
```

**centerY**

Center an object vertically inside a container

```js
mySprite.centerY(
    height,     // container height (Optional)
    options     // see options (Optional)
)
```

**centerXY**

Center an object horizontally & vertically inside a container

```js
mySprite.centerXY(
    width,      // container width (Optional)
    height,     // container height (Optional)
    options     // see options (Optional)
)
```

Center an object horizontally & vertically at a point

**centerAt**

```js
mySprite.centerAt(
    coordinates, // Coordinates e.g. {x:10,y:30}
    options     // see options (Optional)
)
```

###Examples

#### Using the parent container to center

This is the simplest example. **Pixi-center** uses the parent's width and/or height if no options are passed. Which means, your object needs to be added to a container before calling centerXY, centerX or centerY.

```js
const label = new PIXI.Text(text,style)
container.addChild(label)

// call after the object has been added to a child
label.centerXY()
```

#### Explictly supplying the bounds

This will center the text within a theoretical box of `width:200` by `height:300`. Since you are providing the bounds it is not immportant to add the object to a container before calling centerXY, centerX or centerY.

```js
const label = new PIXI.Text(text,style)
label.centerXY(200,300)

// can be added after
container.addChild(label)
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
const label = new PIXI.Text(text,style)
label.centerAt({x: 10, y: 10})
```

## Options

The possible options are

```js
const opts = {
    round: true, // default is true. Applies to all methods.
    anchorX: 0, // if not set will be taken from object if possible.
    anchorY: 0  // if not set will be taken from object if possible.
}
```

### Round to pixel

By default **pixi-center** will place objects on whole pixels by rounding the result of the calculation. Which is great for text as it will be crystal clear. However at times this behaviour is unwanted. Passing an options object with `round:false` as the last argument will disable this.

```js
label.centerX( null, {round: false} )
label.centerY( null, {round: false} )
label.centerXY( null, null, {round: false} )
label.centerAt( {x: 0, y: 0}, {round: false} )
```

### Anchor positions

By default **pixi-center** will account for an element's anchor points when centering. But this can be overwritten if you wish by passing an options object with `anchorX` or `anchorY` set with values between 0-1 as the last argument. This will offset the centering.

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

## Gotchas

**Not centering in an empty PIXI.Container or my PIXI.Container keeps growing every time I `center` my object**

PIXI.Containers have a width and height of 0 until something is placed inside them. If you want to center the text inside an empty container, it is best to add a PIXI.Graphics element first to give it some bounds

```js
const container = new PIXI.Container()

const rectangle = new PIXI.Graphics()
rectangle.drawRect(0,0,100,100)
rectangle.alpha = 0 // if you dont want to see it
container.addChild(rectangle)

const label = new PIXI.Text('center me')
container.addChild(label)
container.centerXY()
```

To resize the `container` it is best to resize the `rectangle` instead