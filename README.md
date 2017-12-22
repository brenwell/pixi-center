# pixi-center

Center Sprites, Text and DisplayObjects in pixi.js with ease.


## Install

```shell
npm i pixi-center
```

## Usage

### Importing

Pixi pause will be automatically added to `PIXI.displayObject` which almost everything inxcluding `PIXI.Sprite` and `PIXI.Text` inerit from.

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

### Examples



#### Using the parent to center

This is the simplest example. **Pixi-center** uses the parent's width and/or height if no options are passed. Which means to center it needs to be added (addChild) to something.

```js
const label = new PIXI.Text(text,style)
container.addChild(label)

// call after the object as been added to a child
label.centerXY()
```

#### Explictly supplying the bounds of which the element should center

This will center the text with a theoretical box of `width:200` by `height:300`

```js
const label = new PIXI.Text(text,style)
label.centerXY(200,300)
```

#### Center one axis only

This will center the text with a theoretical box of `width:200` by `height:300`

```js
const label = new PIXI.Text(text,style)
// center just the x axis within 500px
label.centerY(500)

container.addChild(label)

// center just the y axis with the parent container
label.centerY()
```

### Options

The possible options are

```js
{
    round: true, // default is true. Applies to centerX, centerY & centerXY.
    anchorX: 0, // if not set will take from object. Applies to centerX & centerXY.
    anchorY: 0  // if not set will take from objecy. Applies to centerY & centerXY.
}
```

#### Round to pixel

By default pixi-center will play objects on whole pixels, by rounding them. Which is great for text as it will be crystal clear. However at times this behaviour is undesirable. Passing the options with `round:false` as the last argument will disable this.

```js
label.centerX( undefined, {round: false} )
label.centerY( undefined, {round: false} )
label.centerXY( undefined, undefined, {round: false} )
```

#### Accomdate anchor positions

By default pixi-center will account for an elements anchor points when centering. But this can be overwritten if you wish to. By Passing the options with `anchorX` or `anchorY` as the last argument.

```js
label.centerX( undefined, {anchorX: 0} )
label.centerY( undefined, {anchorY: 0} )
label.centerXY( undefined, undefined, {anchorX: 0, anchorY: 0.5} )
```