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


  pixi.DisplayObject.prototype.centerXY = function centerXY(width, height, round, anchorX, anchorY) {
    this.centerX(width, round, anchorX);
    this.centerY(height, round, anchorY);
  };
  /**
   * Centers an element along its X axis
   *
   * @param  {<type>}   width    The width
   * @param  {boolean}  round    The round
   * @param  {number}   anchorX  The anchor x
   */


  pixi.DisplayObject.prototype.centerX = function centerX(width) {
    var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var anchorX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!this.width) return;

    if (!width) {
      if (!this.parent) return;
      width = this.parent.width;
    }

    if (this.anchor) anchorX = this.anchor.x;
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
    var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var anchorY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!this.height) return;

    if (!height) {
      if (!this.parent) return;
      height = this.parent.height;
    }

    if (this.anchor) anchorY = this.anchor.y;
    this.y = centerAxis(height, this.height, anchorY, round);
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


function centerAxis(parentLength, elementLength, anchor) {
  var round = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var offset = (parentLength - elementLength) / 2 + elementLength * anchor;
  if (round) offset = Math.round(offset);
  return offset;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7O0FBQ0E7QUFHQyxVQUFTLElBQVQsQ0FBYyxJQUFkLEVBQ0Q7QUFDSSxNQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBSyxhQUFuQixFQUNBO0FBQ0ksVUFBTSxJQUFJLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxPQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBNkIsUUFBN0IsR0FBd0MsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLE9BQXhDLEVBQWlELE9BQWpELEVBQ3hDO0FBQ0ksU0FBSyxPQUFMLENBQWEsS0FBYixFQUFvQixLQUFwQixFQUEyQixPQUEzQjtBQUNBLFNBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEIsT0FBNUI7QUFDSCxHQUpEO0FBTUE7Ozs7Ozs7OztBQU9BLE9BQUssYUFBTCxDQUFtQixTQUFuQixDQUE2QixPQUE3QixHQUF1QyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFDdkM7QUFBQSxRQUQrRCxLQUMvRCx1RUFEdUUsSUFDdkU7QUFBQSxRQUQ2RSxPQUM3RSx1RUFEdUYsQ0FDdkY7QUFDSSxRQUFJLENBQUMsS0FBSyxLQUFWLEVBQWlCOztBQUVqQixRQUFJLENBQUMsS0FBTCxFQUNBO0FBQ0ksVUFBSSxDQUFDLEtBQUssTUFBVixFQUFrQjtBQUVsQixjQUFRLEtBQUssTUFBTCxDQUFZLEtBQXBCO0FBQ0g7O0FBRUQsUUFBSSxLQUFLLE1BQVQsRUFBaUIsVUFBVSxLQUFLLE1BQUwsQ0FBWSxDQUF0QjtBQUVqQixTQUFLLENBQUwsR0FBUyxXQUFXLEtBQVgsRUFBa0IsS0FBSyxLQUF2QixFQUE4QixPQUE5QixFQUF1QyxLQUF2QyxDQUFUO0FBRUgsR0FmRDtBQWlCQTs7Ozs7Ozs7O0FBT0EsT0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQTZCLE9BQTdCLEdBQXVDLFNBQVMsT0FBVCxDQUFpQixNQUFqQixFQUN2QztBQUFBLFFBRGdFLEtBQ2hFLHVFQUR3RSxJQUN4RTtBQUFBLFFBRDhFLE9BQzlFLHVFQUR3RixDQUN4RjtBQUNJLFFBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0I7O0FBRWxCLFFBQUksQ0FBQyxNQUFMLEVBQ0E7QUFDSSxVQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBRWxCLGVBQVMsS0FBSyxNQUFMLENBQVksTUFBckI7QUFDSDs7QUFFRCxRQUFJLEtBQUssTUFBVCxFQUFpQixVQUFVLEtBQUssTUFBTCxDQUFZLENBQXRCO0FBRWpCLFNBQUssQ0FBTCxHQUFTLFdBQVcsTUFBWCxFQUFtQixLQUFLLE1BQXhCLEVBQWdDLE9BQWhDLEVBQXlDLEtBQXpDLENBQVQ7QUFDSCxHQWRELENBcERKLENBcUVBOztBQUNDLENBdkVBLEVBdUVDLElBdkVELENBQUQ7QUEwRUE7Ozs7Ozs7Ozs7QUFRQSxTQUFTLFVBQVQsQ0FBb0IsWUFBcEIsRUFBa0MsYUFBbEMsRUFBaUQsTUFBakQsRUFDQTtBQUFBLE1BRHlELEtBQ3pELHVFQURpRSxJQUNqRTtBQUNJLE1BQUksU0FBVSxDQUFDLGVBQWUsYUFBaEIsSUFBaUMsQ0FBbEMsR0FBd0MsZ0JBQWdCLE1BQXJFO0FBRUEsTUFBSSxLQUFKLEVBQVcsU0FBVSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQVY7QUFDWCxTQUFPLE1BQVA7QUFDSCIsImZpbGUiOiJwaXhpLWNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogcGl4aS1wYXVzZSBpcyBhIHBsdWdpbiBmb3IgcGl4aS5qcywgd2hpY2ggYXV0b21hdGljYWxseSBwYXVzZSBhbmQgcmVzdW1lcyB5b3VyIEFwcCB3aGVuIHRoZSBicm93c2VyIHdpbmRvdydzIHZpc2liaWx0eSBjaGFuZ2VzXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIGlkLWxlbmd0aCAqL1xuXG5cbihmdW5jdGlvbiBpbml0KHBpeGkpXG57XG4gICAgaWYgKCFwaXhpIHx8ICFwaXhpLkRpc3BsYXlPYmplY3QpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQSVhJIHdhcyBub3QgZm91bmRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIGFuIGVsZW1lbnQgYWxvbmcgYm90aCBYIGFuZCBZIGF4aXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIHdpZHRoICAgIFRoZSB3aWR0aFxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIGhlaWdodCAgIFRoZSBoZWlnaHRcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICByb3VuZCAgICBUaGUgcm91bmRcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICBhbmNob3JYICBUaGUgYW5jaG9yIHhcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICBhbmNob3JZICBUaGUgYW5jaG9yIHlcbiAgICAgKi9cbiAgICBwaXhpLkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNlbnRlclhZID0gZnVuY3Rpb24gY2VudGVyWFkod2lkdGgsIGhlaWdodCwgcm91bmQsIGFuY2hvclgsIGFuY2hvclkpXG4gICAge1xuICAgICAgICB0aGlzLmNlbnRlclgod2lkdGgsIHJvdW5kLCBhbmNob3JYKVxuICAgICAgICB0aGlzLmNlbnRlclkoaGVpZ2h0LCByb3VuZCwgYW5jaG9yWSlcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2VudGVycyBhbiBlbGVtZW50IGFsb25nIGl0cyBYIGF4aXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gICB3aWR0aCAgICBUaGUgd2lkdGhcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSAgcm91bmQgICAgVGhlIHJvdW5kXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSAgIGFuY2hvclggIFRoZSBhbmNob3IgeFxuICAgICAqL1xuICAgIHBpeGkuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY2VudGVyWCA9IGZ1bmN0aW9uIGNlbnRlclgod2lkdGgsIHJvdW5kID0gdHJ1ZSwgYW5jaG9yWCA9IDApXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMud2lkdGgpIHJldHVybjtcblxuICAgICAgICBpZiAoIXdpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5wYXJlbnQud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmNob3IpIGFuY2hvclggPSB0aGlzLmFuY2hvci54O1xuXG4gICAgICAgIHRoaXMueCA9IGNlbnRlckF4aXMod2lkdGgsIHRoaXMud2lkdGgsIGFuY2hvclgsIHJvdW5kKVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgYW4gZWxlbWVudCBhbG9uZyBpdHMgWSBheGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICAgaGVpZ2h0ICAgVGhlIGhlaWdodFxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59ICByb3VuZCAgICBUaGUgcm91bmRcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgYW5jaG9yWSAgVGhlIGFuY2hvciB5XG4gICAgICovXG4gICAgcGl4aS5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jZW50ZXJZID0gZnVuY3Rpb24gY2VudGVyWShoZWlnaHQsIHJvdW5kID0gdHJ1ZSwgYW5jaG9yWSA9IDApXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0KSByZXR1cm47XG5cbiAgICAgICAgaWYgKCFoZWlnaHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcblxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5wYXJlbnQuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yKSBhbmNob3JZID0gdGhpcy5hbmNob3IueTtcblxuICAgICAgICB0aGlzLnkgPSBjZW50ZXJBeGlzKGhlaWdodCwgdGhpcy5oZWlnaHQsIGFuY2hvclksIHJvdW5kKVxuICAgIH07XG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG59KFBJWEkpKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGF4aXMgcG9zaXRpb24gdG8gY2VudGVyIGFuIGVsZW1lbnQgd2l0aGluIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBwYXJlbnRMZW5ndGggICBUaGUgcGFyZW50IGxlbmd0aCBlLmcuIFBJWEkuQ29udGFpbmVyLndpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBlbGVtZW50TGVuZ3RoICBUaGUgZWxlbWVudCBsZW5ndGggIGUuZy4gUElYSS5TcHJpdGUud2lkdGhcbiAqIEBwYXJhbSAge251bWJlcn0gICAgICAgICAgICAgIGFuY2hvciAgICAgICAgIFRoZSBhbmNob3IgYSB2YWx1ZSBiZXR3ZWVuIDAtMVxuICogQHBhcmFtICB7KEZ1bmN0aW9ufGJvb2xlYW4pfSAgcm91bmQgICAgICAgICAgVGhlIHJvdW5kIHdoZXRoZXIgb3Igbm90IHRvIHJvdW5kIHRvIGEgcGl4ZWxcbiAqL1xuZnVuY3Rpb24gY2VudGVyQXhpcyhwYXJlbnRMZW5ndGgsIGVsZW1lbnRMZW5ndGgsIGFuY2hvciwgcm91bmQgPSB0cnVlKVxue1xuICAgIGxldCBvZmZzZXQgPSAoKHBhcmVudExlbmd0aCAtIGVsZW1lbnRMZW5ndGgpIC8gMikgKyAoZWxlbWVudExlbmd0aCAqIGFuY2hvcilcblxuICAgIGlmIChyb3VuZCkgb2Zmc2V0ID0gIE1hdGgucm91bmQob2Zmc2V0KTtcbiAgICByZXR1cm4gb2Zmc2V0XG59XG4iXX0=