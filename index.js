/**
 * pixi-pause is a plugin for pixi.js, which automatically pause and resumes your App when the browser window's visibilty changes
 */

/* eslint-disable prefer-destructuring */
/* eslint-disable id-length */


(function init(pixi)
{
    if (!pixi || !pixi.DisplayObject)
    {
        throw new Error("PIXI was not found")
    }

    /**
     * Centers an element along both X and Y axis
     *
     * @param  {<type>}  width    The width
     * @param  {<type>}  height   The height
     * @param  {<type>}  round    The round
     * @param  {<type>}  anchorX  The anchor x
     * @param  {<type>}  anchorY  The anchor y
     */
    pixi.DisplayObject.prototype.centerXY = function centerXY(width, height, opts = {})
    {
        const { round, anchorX, anchorY } = opts

        this.centerX(width, round, anchorX)
        this.centerY(height, round, anchorY)
    };

    /**
     * Centers an element along its X axis
     *
     * @param  {<type>}   width    The width
     * @param  {boolean}  round    The round
     * @param  {number}   anchorX  The anchor x
     */
    pixi.DisplayObject.prototype.centerX = function centerX(width, opts = {})
    {
        const { round } = opts
        let { anchorX } = opts

        if (!this.width) return;

        if (!width)
        {
            if (!this.parent) return;

            width = this.parent.width;
        }

        if (this.anchor) anchorX = this.anchor.x;

        this.x = centerAxis(width, this.width, anchorX, round)

    };

    /**
     * Centers an element along its Y axis
     *
     * @param  {<type>}   height   The height
     * @param  {boolean}  round    The round
     * @param  {number}   anchorY  The anchor y
     */
    pixi.DisplayObject.prototype.centerY = function centerY(height, opts = {})
    {
        const { round } = opts
        let { anchorY } = opts

        if (!this.height) return;

        if (!height)
        {
            if (!this.parent) return;

            height = this.parent.height;
        }

        if (this.anchor) anchorY = this.anchor.y;

        this.y = centerAxis(height, this.height, anchorY, round)
    };


// eslint-disable-next-line
}(PIXI));


/**
 * Returns the axis position to center an element within another
 *
 * @param  {number}              parentLength   The parent length e.g. PIXI.Container.width
 * @param  {number}              elementLength  The element length  e.g. PIXI.Sprite.width
 * @param  {number}              anchor         The anchor a value between 0-1
 * @param  {(Function|boolean)}  round          The round whether or not to round to a pixel
 */
function centerAxis(parentLength, elementLength, anchor, round = true)
{
    let offset = ((parentLength - elementLength) / 2) + (elementLength * anchor)

    if (round) offset =  Math.round(offset);
    return offset
}
