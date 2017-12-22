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
    if (!coords) return;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7O0FBQ0E7QUFHQyxVQUFTLElBQVQsQ0FBYyxJQUFkLEVBQ0Q7QUFDSSxNQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBSyxhQUFuQixFQUNBO0FBQ0ksVUFBTSxJQUFJLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxPQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBNkIsUUFBN0IsR0FBd0MsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQ3hDO0FBQUEsUUFEeUUsSUFDekUsdUVBRGdGLEVBQ2hGO0FBQ0ksU0FBSyxPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQjtBQUNBLFNBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsSUFBckI7QUFDSCxHQUpEO0FBTUE7Ozs7Ozs7OztBQU9BLE9BQUssYUFBTCxDQUFtQixTQUFuQixDQUE2QixPQUE3QixHQUF1QyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFDdkM7QUFBQSxRQUQrRCxJQUMvRCx1RUFEc0UsRUFDdEU7QUFBQSxRQUNZLEtBRFosR0FDc0IsSUFEdEIsQ0FDWSxLQURaO0FBQUEsUUFFVSxPQUZWLEdBRXNCLElBRnRCLENBRVUsT0FGVjtBQUlJLFFBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7O0FBRWpCLFFBQUksQ0FBQyxLQUFMLEVBQ0E7QUFDSSxVQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBRWxCLGNBQVEsS0FBSyxNQUFMLENBQVksS0FBcEI7QUFDSDs7QUFFRCxRQUFJLE9BQU8sT0FBUCxLQUFtQixXQUFuQixJQUFrQyxLQUFLLE1BQTNDLEVBQW1ELFVBQVUsS0FBSyxNQUFMLENBQVksQ0FBdEI7QUFFbkQsU0FBSyxDQUFMLEdBQVMsV0FBVyxLQUFYLEVBQWtCLEtBQUssS0FBdkIsRUFBOEIsT0FBOUIsRUFBdUMsS0FBdkMsQ0FBVDtBQUVILEdBbEJEO0FBb0JBOzs7Ozs7Ozs7QUFPQSxPQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBNkIsT0FBN0IsR0FBdUMsU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQ3ZDO0FBQUEsUUFEZ0UsSUFDaEUsdUVBRHVFLEVBQ3ZFO0FBQUEsUUFDWSxLQURaLEdBQ3NCLElBRHRCLENBQ1ksS0FEWjtBQUFBLFFBRVUsT0FGVixHQUVzQixJQUZ0QixDQUVVLE9BRlY7QUFJSSxRQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCOztBQUVsQixRQUFJLENBQUMsTUFBTCxFQUNBO0FBQ0ksVUFBSSxDQUFDLEtBQUssTUFBVixFQUFrQjtBQUVsQixlQUFTLEtBQUssTUFBTCxDQUFZLE1BQXJCO0FBQ0g7O0FBRUQsUUFBSSxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsS0FBSyxNQUEzQyxFQUFtRCxVQUFVLEtBQUssTUFBTCxDQUFZLENBQXRCO0FBRW5ELFNBQUssQ0FBTCxHQUFTLFdBQVcsTUFBWCxFQUFtQixLQUFLLE1BQXhCLEVBQWdDLE9BQWhDLEVBQXlDLEtBQXpDLENBQVQ7QUFDSCxHQWpCRDtBQW1CQTs7Ozs7OztBQUtBLE9BQUssYUFBTCxDQUFtQixTQUFuQixDQUE2QixRQUE3QixHQUF3QyxTQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFDeEM7QUFBQSxRQURrRSxJQUNsRSx1RUFEeUUsRUFDekU7QUFDSSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBRGpCLFFBR1ksQ0FIWixHQUdvQixNQUhwQixDQUdZLENBSFo7QUFBQSxRQUdjLENBSGQsR0FHb0IsTUFIcEIsQ0FHYyxDQUhkO0FBQUEsUUFJWSxLQUpaLEdBSXNCLElBSnRCLENBSVksS0FKWjtBQUFBLFFBS1UsT0FMVixHQUsrQixJQUwvQixDQUtVLE9BTFY7QUFBQSxRQUttQixPQUxuQixHQUsrQixJQUwvQixDQUttQixPQUxuQjtBQU9JLFFBQUksT0FBTyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDLEtBQUssTUFBM0MsRUFBbUQsVUFBVSxLQUFLLE1BQUwsQ0FBWSxDQUF0QjtBQUVuRCxRQUFJLE9BQU8sT0FBUCxLQUFtQixXQUFuQixJQUFrQyxLQUFLLE1BQTNDLEVBQW1ELFVBQVUsS0FBSyxNQUFMLENBQVksQ0FBdEI7O0FBRW5ELFFBQUksS0FBSyxTQUFTLENBQVQsQ0FBVCxFQUNBO0FBQ0ksV0FBSyxDQUFMLEdBQVMsY0FBYyxDQUFkLEVBQWlCLEtBQUssS0FBdEIsRUFBNkIsT0FBN0IsRUFBc0MsS0FBdEMsQ0FBVDtBQUNIOztBQUVELFFBQUksS0FBSyxTQUFTLENBQVQsQ0FBVCxFQUNBO0FBQ0ksV0FBSyxDQUFMLEdBQVMsY0FBYyxDQUFkLEVBQWlCLEtBQUssTUFBdEIsRUFBOEIsT0FBOUIsRUFBdUMsS0FBdkMsQ0FBVDtBQUNIO0FBQ0osR0FyQkQsQ0EvRUosQ0FzR0E7O0FBQ0MsQ0F4R0EsRUF3R0MsSUF4R0QsQ0FBRDtBQTJHQTs7Ozs7Ozs7OztBQVFBLFNBQVMsVUFBVCxDQUFvQixZQUFwQixFQUFrQyxhQUFsQyxFQUNBO0FBQUEsTUFEaUQsTUFDakQsdUVBRDBELENBQzFEO0FBQUEsTUFENkQsS0FDN0QsdUVBRHFFLElBQ3JFO0FBQ0ksTUFBSSxTQUFVLENBQUMsZUFBZSxhQUFoQixJQUFpQyxDQUFsQyxHQUF3QyxnQkFBZ0IsTUFBckU7QUFFQSxNQUFJLEtBQUosRUFBVyxTQUFVLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBVjtBQUVYLFNBQU8sTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsYUFBbEMsRUFDQTtBQUFBLE1BRGlELE1BQ2pELHVFQUQwRCxDQUMxRDtBQUFBLE1BRDZELEtBQzdELHVFQURxRSxJQUNyRTtBQUNJLE1BQUksU0FBVSxXQUFXLFNBQVgsSUFBeUIsZ0JBQWdCLENBQTFDLEdBQWlELGdCQUFnQixNQUE5RTtBQUVBLE1BQUksS0FBSixFQUFXLFNBQVUsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFWO0FBRVgsU0FBTyxNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFDQTtBQUNJLFNBQU8sQ0FBQyxPQUFPLEtBQVAsQ0FBYSxXQUFXLEdBQVgsQ0FBYixDQUFSO0FBQ0giLCJmaWxlIjoicGl4aS1jZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHBpeGktcGF1c2UgaXMgYSBwbHVnaW4gZm9yIHBpeGkuanMsIHdoaWNoIGF1dG9tYXRpY2FsbHkgcGF1c2UgYW5kIHJlc3VtZXMgeW91ciBBcHAgd2hlbiB0aGUgYnJvd3NlciB3aW5kb3cncyB2aXNpYmlsdHkgY2hhbmdlc1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpZC1sZW5ndGggKi9cblxuXG4oZnVuY3Rpb24gaW5pdChwaXhpKVxue1xuICAgIGlmICghcGl4aSB8fCAhcGl4aS5EaXNwbGF5T2JqZWN0KVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUElYSSB3YXMgbm90IGZvdW5kXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2VudGVycyBhbiBlbGVtZW50IGFsb25nIGJvdGggWCBhbmQgWSBheGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICB3aWR0aCAgICBUaGUgd2lkdGhcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICBoZWlnaHQgICBUaGUgaGVpZ2h0XG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgcm91bmQgICAgVGhlIHJvdW5kXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgYW5jaG9yWCAgVGhlIGFuY2hvciB4XG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgYW5jaG9yWSAgVGhlIGFuY2hvciB5XG4gICAgICovXG4gICAgcGl4aS5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jZW50ZXJYWSA9IGZ1bmN0aW9uIGNlbnRlclhZKHdpZHRoLCBoZWlnaHQsIG9wdHMgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2VudGVyWCh3aWR0aCwgb3B0cylcbiAgICAgICAgdGhpcy5jZW50ZXJZKGhlaWdodCwgb3B0cylcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2VudGVycyBhbiBlbGVtZW50IGFsb25nIGl0cyBYIGF4aXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gICB3aWR0aCAgICBUaGUgd2lkdGhcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSAgcm91bmQgICAgVGhlIHJvdW5kXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSAgIGFuY2hvclggIFRoZSBhbmNob3IgeFxuICAgICAqL1xuICAgIHBpeGkuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY2VudGVyWCA9IGZ1bmN0aW9uIGNlbnRlclgod2lkdGgsIG9wdHMgPSB7fSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHsgcm91bmQgfSA9IG9wdHNcbiAgICAgICAgbGV0IHsgYW5jaG9yWCB9ID0gb3B0c1xuXG4gICAgICAgIGlmICghdGhpcy53aWR0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghd2lkdGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcblxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnBhcmVudC53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYW5jaG9yWCA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmFuY2hvcikgYW5jaG9yWCA9IHRoaXMuYW5jaG9yLng7XG5cbiAgICAgICAgdGhpcy54ID0gY2VudGVyQXhpcyh3aWR0aCwgdGhpcy53aWR0aCwgYW5jaG9yWCwgcm91bmQpXG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2VudGVycyBhbiBlbGVtZW50IGFsb25nIGl0cyBZIGF4aXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gICBoZWlnaHQgICBUaGUgaGVpZ2h0XG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gIHJvdW5kICAgIFRoZSByb3VuZFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBhbmNob3JZICBUaGUgYW5jaG9yIHlcbiAgICAgKi9cbiAgICBwaXhpLkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNlbnRlclkgPSBmdW5jdGlvbiBjZW50ZXJZKGhlaWdodCwgb3B0cyA9IHt9KVxuICAgIHtcbiAgICAgICAgY29uc3QgeyByb3VuZCB9ID0gb3B0c1xuICAgICAgICBsZXQgeyBhbmNob3JZIH0gPSBvcHRzXG5cbiAgICAgICAgaWYgKCF0aGlzLmhlaWdodCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMucGFyZW50LmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYW5jaG9yWSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmFuY2hvcikgYW5jaG9yWSA9IHRoaXMuYW5jaG9yLnk7XG5cbiAgICAgICAgdGhpcy55ID0gY2VudGVyQXhpcyhoZWlnaHQsIHRoaXMuaGVpZ2h0LCBhbmNob3JZLCByb3VuZClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2VudGVycyBhbiBvYmplY3QgYXQgYSBwb2ludCByZWdhcmRsZXNzIG9mIGFuY2hvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgY29vcmRzICBUaGUgY29vcmRpbmF0ZXNcbiAgICAgKi9cbiAgICBwaXhpLkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNlbnRlckF0ID0gZnVuY3Rpb24gY2VudGVyQXQoY29vcmRzLCBvcHRzID0ge30pXG4gICAge1xuICAgICAgICBpZiAoIWNvb3JkcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgeCx5IH0gPSBjb29yZHNcbiAgICAgICAgY29uc3QgeyByb3VuZCB9ID0gb3B0c1xuICAgICAgICBsZXQgeyBhbmNob3JYLCBhbmNob3JZIH0gPSBvcHRzXG5cbiAgICAgICAgaWYgKHR5cGVvZiBhbmNob3JYID09PSBcInVuZGVmaW5lZFwiICYmIHRoaXMuYW5jaG9yKSBhbmNob3JYID0gdGhpcy5hbmNob3IueDtcblxuICAgICAgICBpZiAodHlwZW9mIGFuY2hvclkgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5hbmNob3IpIGFuY2hvclkgPSB0aGlzLmFuY2hvci55O1xuXG4gICAgICAgIGlmICh4ICYmIGlzTnVtYmVyKHgpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnggPSBjZW50ZXJBdFBvaW50KHgsIHRoaXMud2lkdGgsIGFuY2hvclgsIHJvdW5kKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHkgJiYgaXNOdW1iZXIoeSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMueSA9IGNlbnRlckF0UG9pbnQoeSwgdGhpcy5oZWlnaHQsIGFuY2hvclksIHJvdW5kKVxuICAgICAgICB9XG4gICAgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbn0oUElYSSkpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXhpcyBwb3NpdGlvbiB0byBjZW50ZXIgYW4gZWxlbWVudCB3aXRoaW4gYW5vdGhlclxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gICAgICAgICAgICAgIHBhcmVudExlbmd0aCAgIFRoZSBwYXJlbnQgbGVuZ3RoIGUuZy4gUElYSS5Db250YWluZXIud2lkdGhcbiAqIEBwYXJhbSAge251bWJlcn0gICAgICAgICAgICAgIGVsZW1lbnRMZW5ndGggIFRoZSBlbGVtZW50IGxlbmd0aCAgZS5nLiBQSVhJLlNwcml0ZS53aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSAgICAgICAgICAgICAgYW5jaG9yICAgICAgICAgVGhlIGFuY2hvciBhIHZhbHVlIGJldHdlZW4gMC0xXG4gKiBAcGFyYW0gIHsoRnVuY3Rpb258Ym9vbGVhbil9ICByb3VuZCAgICAgICAgICBUaGUgcm91bmQgd2hldGhlciBvciBub3QgdG8gcm91bmQgdG8gYSBwaXhlbFxuICovXG5mdW5jdGlvbiBjZW50ZXJBeGlzKHBhcmVudExlbmd0aCwgZWxlbWVudExlbmd0aCwgYW5jaG9yID0gMCwgcm91bmQgPSB0cnVlKVxue1xuICAgIGxldCBvZmZzZXQgPSAoKHBhcmVudExlbmd0aCAtIGVsZW1lbnRMZW5ndGgpIC8gMikgKyAoZWxlbWVudExlbmd0aCAqIGFuY2hvcilcblxuICAgIGlmIChyb3VuZCkgb2Zmc2V0ID0gIE1hdGgucm91bmQob2Zmc2V0KTtcblxuICAgIHJldHVybiBvZmZzZXRcbn1cblxuLyoqXG4gKiBDZW50ZXJzIGFuIG9iamVjdCBhdCBhIGNlcnRhaW4gcG9pbnRcbiAqXG4gKiBAcGFyYW0gIHs8dHlwZT59ICAgICAgICAgICAgICBheGlzUG9pbnQgICAgICBUaGUgYXhpcyBwb2ludFxuICogQHBhcmFtICB7bnVtYmVyfSAgICAgICAgICAgICAgZWxlbWVudExlbmd0aCAgVGhlIGVsZW1lbnQgbGVuZ3RoXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBhbmNob3IgICAgICAgICBUaGUgYW5jaG9yXG4gKiBAcGFyYW0gIHsoRnVuY3Rpb258Ym9vbGVhbil9ICByb3VuZCAgICAgICAgICBUaGUgcm91bmRcbiAqL1xuZnVuY3Rpb24gY2VudGVyQXRQb2ludChheGlzUG9pbnQsIGVsZW1lbnRMZW5ndGgsIGFuY2hvciA9IDAsIHJvdW5kID0gdHJ1ZSlcbntcbiAgICBsZXQgb2Zmc2V0ID0gKHBhcnNlRmxvYXQoYXhpc1BvaW50KSAtIChlbGVtZW50TGVuZ3RoIC8gMikpICsgKGVsZW1lbnRMZW5ndGggKiBhbmNob3IpO1xuXG4gICAgaWYgKHJvdW5kKSBvZmZzZXQgPSAgTWF0aC5yb3VuZChvZmZzZXQpO1xuXG4gICAgcmV0dXJuIG9mZnNldFxufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSAgezx0eXBlPn0gICB2YWwgIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gIFRydWUgaWYgbnVtYmVyLCBGYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbClcbntcbiAgICByZXR1cm4gIU51bWJlci5pc05hTihwYXJzZUZsb2F0KHZhbCkpXG59XG4iXX0=