/**
 * pixi-pause is a plugin for pixi.js, which automatically pause and resumes your App when the browser window's visibilty changes
 */

/* eslint-disable prefer-destructuring */

/* eslint-disable id-length */
(function init(pixi) {
  if (!pixi || !pixi.DisplayObject) {
    throw new Error("PIXI was not found");
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


  pixi.DisplayObject.prototype.centerXY = function centerXY(width, height) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.centerX(width, opts);
    this.centerY(height, opts);
  };
  /**
   * Centers an element along its X axis
   *
   * @param  {<type>}   width    The width
   * @param  {boolean}  round    The round
   * @param  {number}   anchorX  The anchor x
   */


  pixi.DisplayObject.prototype.centerX = function centerX(width) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var round = opts.round;
    var anchorX = opts.anchorX;
    if (!this.width) return;

    if (!width) {
      if (!this.parent) return;
      width = this.parent.width;
    }

    if (typeof anchorX === "undefined" && this.anchor) anchorX = this.anchor.x;
    this.x = centerAxis(width, this.width, anchorX, round);
  };
  /**
   * Centers an element along its Y axis
   *
   * @param  {<type>}   height   The height
   * @param  {boolean}  round    The round
   * @param  {number}   anchorY  The anchor y
   */


  pixi.DisplayObject.prototype.centerY = function centerY(height) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var round = opts.round;
    var anchorY = opts.anchorY;
    if (!this.height) return;

    if (!height) {
      if (!this.parent) return;
      height = this.parent.height;
    }

    if (typeof anchorY === "undefined" && this.anchor) anchorY = this.anchor.y;
    this.y = centerAxis(height, this.height, anchorY, round);
  };
  /**
   * Centers an object at a point regardless of anchor
   *
   * @param  {<type>}  coords  The coordinates
   */


  pixi.DisplayObject.prototype.centerAt = function centerAt(coords) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var x = coords.x,
        y = coords.y;
    var round = opts.round;
    var anchorX = opts.anchorX,
        anchorY = opts.anchorY;
    if (typeof anchorX === "undefined" && this.anchor) anchorX = this.anchor.x;
    if (typeof anchorY === "undefined" && this.anchor) anchorY = this.anchor.y;

    if (x && isNumber(x)) {
      this.x = centerAtPoint(x, this.width, anchorX, round);
    }

    if (y && isNumber(y)) {
      this.y = centerAtPoint(y, this.height, anchorY, round);
    }
  }; // eslint-disable-next-line

})(PIXI);
/**
 * Returns the axis position to center an element within another
 *
 * @param  {number}              parentLength   The parent length e.g. PIXI.Container.width
 * @param  {number}              elementLength  The element length  e.g. PIXI.Sprite.width
 * @param  {number}              anchor         The anchor a value between 0-1
 * @param  {(Function|boolean)}  round          The round whether or not to round to a pixel
 */


function centerAxis(parentLength, elementLength) {
  var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var round = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var offset = (parentLength - elementLength) / 2 + elementLength * anchor;
  if (round) offset = Math.round(offset);
  return offset;
}
/**
 * Centers an object at a certain point
 *
 * @param  {<type>}              axisPoint      The axis point
 * @param  {number}              elementLength  The element length
 * @param  {number}              anchor         The anchor
 * @param  {(Function|boolean)}  round          The round
 */


function centerAtPoint(axisPoint, elementLength) {
  var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var round = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var offset = parseFloat(axisPoint) - elementLength / 2 + elementLength * anchor;
  if (round) offset = Math.round(offset);
  return offset;
}
/**
 * Determines if number.
 *
 * @param  {<type>}   val  The value
 * @return {boolean}  True if number, False otherwise.
 */


function isNumber(val) {
  return !Number.isNaN(parseFloat(val));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFQLENBQWEsV0FBVyxHQUFYLENBQWIsQ0FBUjtBQUNIIiwiZmlsZSI6InBpeGktY2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBwaXhpLXBhdXNlIGlzIGEgcGx1Z2luIGZvciBwaXhpLmpzLCB3aGljaCBhdXRvbWF0aWNhbGx5IHBhdXNlIGFuZCByZXN1bWVzIHlvdXIgQXBwIHdoZW4gdGhlIGJyb3dzZXIgd2luZG93J3MgdmlzaWJpbHR5IGNoYW5nZXNcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgaWQtbGVuZ3RoICovXG5cblxuKGZ1bmN0aW9uIGluaXQocGl4aSlcbntcbiAgICBpZiAoIXBpeGkgfHwgIXBpeGkuRGlzcGxheU9iamVjdClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBJWEkgd2FzIG5vdCBmb3VuZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgYW4gZWxlbWVudCBhbG9uZyBib3RoIFggYW5kIFkgYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgd2lkdGggICAgVGhlIHdpZHRoXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgaGVpZ2h0ICAgVGhlIGhlaWdodFxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIHJvdW5kICAgIFRoZSByb3VuZFxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIGFuY2hvclggIFRoZSBhbmNob3IgeFxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIGFuY2hvclkgIFRoZSBhbmNob3IgeVxuICAgICAqL1xuICAgIHBpeGkuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY2VudGVyWFkgPSBmdW5jdGlvbiBjZW50ZXJYWSh3aWR0aCwgaGVpZ2h0LCBvcHRzID0ge30pXG4gICAge1xuICAgICAgICB0aGlzLmNlbnRlclgod2lkdGgsIG9wdHMpXG4gICAgICAgIHRoaXMuY2VudGVyWShoZWlnaHQsIG9wdHMpXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgYW4gZWxlbWVudCBhbG9uZyBpdHMgWCBheGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICAgd2lkdGggICAgVGhlIHdpZHRoXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gIHJvdW5kICAgIFRoZSByb3VuZFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBhbmNob3JYICBUaGUgYW5jaG9yIHhcbiAgICAgKi9cbiAgICBwaXhpLkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNlbnRlclggPSBmdW5jdGlvbiBjZW50ZXJYKHdpZHRoLCBvcHRzID0ge30pXG4gICAge1xuICAgICAgICBjb25zdCB7IHJvdW5kIH0gPSBvcHRzXG4gICAgICAgIGxldCB7IGFuY2hvclggfSA9IG9wdHNcblxuICAgICAgICBpZiAoIXRoaXMud2lkdGgpIHJldHVybjtcblxuICAgICAgICBpZiAoIXdpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5wYXJlbnQud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGFuY2hvclggPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5hbmNob3IpIGFuY2hvclggPSB0aGlzLmFuY2hvci54O1xuXG4gICAgICAgIHRoaXMueCA9IGNlbnRlckF4aXMod2lkdGgsIHRoaXMud2lkdGgsIGFuY2hvclgsIHJvdW5kKVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgYW4gZWxlbWVudCBhbG9uZyBpdHMgWSBheGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICAgaGVpZ2h0ICAgVGhlIGhlaWdodFxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59ICByb3VuZCAgICBUaGUgcm91bmRcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgYW5jaG9yWSAgVGhlIGFuY2hvciB5XG4gICAgICovXG4gICAgcGl4aS5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jZW50ZXJZID0gZnVuY3Rpb24gY2VudGVyWShoZWlnaHQsIG9wdHMgPSB7fSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHsgcm91bmQgfSA9IG9wdHNcbiAgICAgICAgbGV0IHsgYW5jaG9yWSB9ID0gb3B0c1xuXG4gICAgICAgIGlmICghdGhpcy5oZWlnaHQpIHJldHVybjtcblxuICAgICAgICBpZiAoIWhlaWdodClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnBhcmVudC5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGFuY2hvclkgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5hbmNob3IpIGFuY2hvclkgPSB0aGlzLmFuY2hvci55O1xuXG4gICAgICAgIHRoaXMueSA9IGNlbnRlckF4aXMoaGVpZ2h0LCB0aGlzLmhlaWdodCwgYW5jaG9yWSwgcm91bmQpXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgYW4gb2JqZWN0IGF0IGEgcG9pbnQgcmVnYXJkbGVzcyBvZiBhbmNob3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIGNvb3JkcyAgVGhlIGNvb3JkaW5hdGVzXG4gICAgICovXG4gICAgcGl4aS5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jZW50ZXJBdCA9IGZ1bmN0aW9uIGNlbnRlckF0KGNvb3Jkcywgb3B0cyA9IHt9KVxuICAgIHtcbiAgICAgICAgY29uc3QgeyB4LHkgfSA9IGNvb3Jkc1xuICAgICAgICBjb25zdCB7IHJvdW5kIH0gPSBvcHRzXG4gICAgICAgIGxldCB7IGFuY2hvclgsIGFuY2hvclkgfSA9IG9wdHNcblxuICAgICAgICBpZiAodHlwZW9mIGFuY2hvclggPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5hbmNob3IpIGFuY2hvclggPSB0aGlzLmFuY2hvci54O1xuXG4gICAgICAgIGlmICh0eXBlb2YgYW5jaG9yWSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmFuY2hvcikgYW5jaG9yWSA9IHRoaXMuYW5jaG9yLnk7XG5cbiAgICAgICAgaWYgKHggJiYgaXNOdW1iZXIoeCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMueCA9IGNlbnRlckF0UG9pbnQoeCwgdGhpcy53aWR0aCwgYW5jaG9yWCwgcm91bmQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSAmJiBpc051bWJlcih5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy55ID0gY2VudGVyQXRQb2ludCh5LCB0aGlzLmhlaWdodCwgYW5jaG9yWSwgcm91bmQpXG4gICAgICAgIH1cbiAgICB9XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxufShQSVhJKSk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBheGlzIHBvc2l0aW9uIHRvIGNlbnRlciBhbiBlbGVtZW50IHdpdGhpbiBhbm90aGVyXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSAgICAgICAgICAgICAgcGFyZW50TGVuZ3RoICAgVGhlIHBhcmVudCBsZW5ndGggZS5nLiBQSVhJLkNvbnRhaW5lci53aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSAgICAgICAgICAgICAgZWxlbWVudExlbmd0aCAgVGhlIGVsZW1lbnQgbGVuZ3RoICBlLmcuIFBJWEkuU3ByaXRlLndpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBhbmNob3IgICAgICAgICBUaGUgYW5jaG9yIGEgdmFsdWUgYmV0d2VlbiAwLTFcbiAqIEBwYXJhbSAgeyhGdW5jdGlvbnxib29sZWFuKX0gIHJvdW5kICAgICAgICAgIFRoZSByb3VuZCB3aGV0aGVyIG9yIG5vdCB0byByb3VuZCB0byBhIHBpeGVsXG4gKi9cbmZ1bmN0aW9uIGNlbnRlckF4aXMocGFyZW50TGVuZ3RoLCBlbGVtZW50TGVuZ3RoLCBhbmNob3IgPSAwLCByb3VuZCA9IHRydWUpXG57XG4gICAgbGV0IG9mZnNldCA9ICgocGFyZW50TGVuZ3RoIC0gZWxlbWVudExlbmd0aCkgLyAyKSArIChlbGVtZW50TGVuZ3RoICogYW5jaG9yKVxuXG4gICAgaWYgKHJvdW5kKSBvZmZzZXQgPSAgTWF0aC5yb3VuZChvZmZzZXQpO1xuXG4gICAgcmV0dXJuIG9mZnNldFxufVxuXG4vKipcbiAqIENlbnRlcnMgYW4gb2JqZWN0IGF0IGEgY2VydGFpbiBwb2ludFxuICpcbiAqIEBwYXJhbSAgezx0eXBlPn0gICAgICAgICAgICAgIGF4aXNQb2ludCAgICAgIFRoZSBheGlzIHBvaW50XG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBlbGVtZW50TGVuZ3RoICBUaGUgZWxlbWVudCBsZW5ndGhcbiAqIEBwYXJhbSAge251bWJlcn0gICAgICAgICAgICAgIGFuY2hvciAgICAgICAgIFRoZSBhbmNob3JcbiAqIEBwYXJhbSAgeyhGdW5jdGlvbnxib29sZWFuKX0gIHJvdW5kICAgICAgICAgIFRoZSByb3VuZFxuICovXG5mdW5jdGlvbiBjZW50ZXJBdFBvaW50KGF4aXNQb2ludCwgZWxlbWVudExlbmd0aCwgYW5jaG9yID0gMCwgcm91bmQgPSB0cnVlKVxue1xuICAgIGxldCBvZmZzZXQgPSAocGFyc2VGbG9hdChheGlzUG9pbnQpIC0gKGVsZW1lbnRMZW5ndGggLyAyKSkgKyAoZWxlbWVudExlbmd0aCAqIGFuY2hvcik7XG5cbiAgICBpZiAocm91bmQpIG9mZnNldCA9ICBNYXRoLnJvdW5kKG9mZnNldCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBudW1iZXIuXG4gKlxuICogQHBhcmFtICB7PHR5cGU+fSAgIHZhbCAgVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSAgVHJ1ZSBpZiBudW1iZXIsIEZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKVxue1xuICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKHBhcnNlRmxvYXQodmFsKSlcbn1cbiJdfQ==