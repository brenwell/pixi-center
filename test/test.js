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

    it('PIXI.center should center element rounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerXY(300,300)

        assert.equal(square.x, 113, 'Is working');
        assert.equal(square.x, 113, 'Is working');
    });

    it('PIXI.center should center element notrounded', () => {
        const square = new PIXI.Graphics()
        square.beginFill(0x000000)
        square.drawRect(0,0,75,75)
        square.endFill()

        square.centerXY(300,300,false)

        assert.equal(square.x, 112.5, 'Is working');
        assert.equal(square.x, 112.5, 'Is working');
    });
});
