const sinon = require('sinon')
const assert = require('chai').assert

// mock the window & canvas
require('jsdom-global')()
require('canvas-prebuilt')

require('pixi.js')
require('../lib/pixi-pause')


describe('Creation', () => {

    it('PIXI.autoPause should exist', () => {
        assert.exists(PIXI.autoPause)
        assert.isTrue(PIXI.autoPause)
    });
});
