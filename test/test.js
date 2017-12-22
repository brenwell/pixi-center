const sinon = require('sinon')
const assert = require('chai').assert

// mock the window & canvas
require('jsdom-global')()
require('canvas-prebuilt')

require('pixi.js')
require('../lib/pixi-center')


describe('Creation', () => {

    it('PIXI.center should exist', () => {
        assert.exists(PIXI.DisplayObject.prototype.centerX)
        assert.exists(PIXI.DisplayObject.prototype.centerY)
        assert.exists(PIXI.DisplayObject.prototype.centerXY)
    });
});

describe('centerXY', () => {

    it('PIXI.center should center element rounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerXY(300,300)

        assert.equal(square.x, 113, 'Is working');
        assert.equal(square.y, 113, 'Is working');
    });

    it('PIXI.center should center element not rounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerXY(300,300,{round:false})

        assert.equal(square.x, 112.5, 'Is working');
        assert.equal(square.y, 112.5, 'Is working');
    });
});

describe('centerAt', () => {
    it('PIXI.center should center element rounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerAt({x:300,y:300})

        assert.equal(square.x, 263, 'Is working');
        assert.equal(square.y, 263, 'Is working');
    });

    it('PIXI.center should center element not rounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerAt({x:300,y:300},{round:false})

        assert.equal(square.x, 262.5, 'Is working');
        assert.equal(square.y, 262.5, 'Is working');
    });
});
