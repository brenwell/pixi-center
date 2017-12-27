/**
 * pixi-center. Helps you horizontaly and vertically center anything which inherits from `PIXI.DisplayObject`
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
        this.centerX(width, opts)
        this.centerY(height, opts)
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

        if (typeof anchorX === "undefined" && this.anchor) anchorX = this.anchor.x;

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

        if (typeof anchorY === "undefined" && this.anchor) anchorY = this.anchor.y;

        this.y = centerAxis(height, this.height, anchorY, round)
    };

    /**
     * Centers an object at a point regardless of anchor
     *
     * @param  {<type>}  coords  The coordinates
     */
    pixi.DisplayObject.prototype.centerAt = function centerAt(coords, opts = {})
    {
        if (!coords) return;

        const { x,y } = coords
        const { round } = opts
        let { anchorX, anchorY } = opts

        if (typeof anchorX === "undefined" && this.anchor) anchorX = this.anchor.x;

        if (typeof anchorY === "undefined" && this.anchor) anchorY = this.anchor.y;

        if (x && isNumber(x))
        {
            this.x = centerAtPoint(x, this.width, anchorX, round)
        }

        if (y && isNumber(y))
        {
            this.y = centerAtPoint(y, this.height, anchorY, round)
        }
    }

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
function centerAxis(parentLength, elementLength, anchor = 0, round = true)
{
    let offset = ((parentLength - elementLength) / 2) + ((elementLength * anchor) / 2)

    if (round) offset =  Math.round(offset);

    return offset
}

/**
 * Centers an object at a certain point
 *
 * @param  {<type>}              axisPoint      The axis point
 * @param  {number}              elementLength  The element length
 * @param  {number}              anchor         The anchor
 * @param  {(Function|boolean)}  round          The round
 */
function centerAtPoint(axisPoint, elementLength, anchor = 0, round = true)
{
    let offset = (parseFloat(axisPoint) - (elementLength / 2)) + (elementLength * anchor);

    if (round) offset =  Math.round(offset);

    return offset
}

/**
 * Determines if number.
 *
 * @param  {<type>}   val  The value
 * @return {boolean}  True if number, False otherwise.
 */
function isNumber(val)
{
    return !Number.isNaN(parseFloat(val))
}
