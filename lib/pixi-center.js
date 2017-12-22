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
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var round = opts.round;
    var anchorY = opts.anchorY;
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


function centerAxis(parentLength, elementLength) {
  var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var round = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var offset = (parentLength - elementLength) / 2 + elementLength * anchor;
  if (round) offset = Math.round(offset);
  return offset;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7O0FBQ0E7QUFHQyxVQUFTLElBQVQsQ0FBYyxJQUFkLEVBQ0Q7QUFDSSxNQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBSyxhQUFuQixFQUNBO0FBQ0ksVUFBTSxJQUFJLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxPQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBNkIsUUFBN0IsR0FBd0MsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQ3hDO0FBQUEsUUFEeUUsSUFDekUsdUVBRGdGLEVBQ2hGO0FBQ0ksU0FBSyxPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQjtBQUNBLFNBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsSUFBckI7QUFDSCxHQUpEO0FBTUE7Ozs7Ozs7OztBQU9BLE9BQUssYUFBTCxDQUFtQixTQUFuQixDQUE2QixPQUE3QixHQUF1QyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFDdkM7QUFBQSxRQUQrRCxJQUMvRCx1RUFEc0UsRUFDdEU7QUFBQSxRQUNZLEtBRFosR0FDc0IsSUFEdEIsQ0FDWSxLQURaO0FBQUEsUUFFVSxPQUZWLEdBRXNCLElBRnRCLENBRVUsT0FGVjtBQUlJLFFBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7O0FBRWpCLFFBQUksQ0FBQyxLQUFMLEVBQ0E7QUFDSSxVQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBRWxCLGNBQVEsS0FBSyxNQUFMLENBQVksS0FBcEI7QUFDSDs7QUFFRCxRQUFJLEtBQUssTUFBVCxFQUFpQixVQUFVLEtBQUssTUFBTCxDQUFZLENBQXRCO0FBRWpCLFNBQUssQ0FBTCxHQUFTLFdBQVcsS0FBWCxFQUFrQixLQUFLLEtBQXZCLEVBQThCLE9BQTlCLEVBQXVDLEtBQXZDLENBQVQ7QUFFSCxHQWxCRDtBQW9CQTs7Ozs7Ozs7O0FBT0EsT0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQTZCLE9BQTdCLEdBQXVDLFNBQVMsT0FBVCxDQUFpQixNQUFqQixFQUN2QztBQUFBLFFBRGdFLElBQ2hFLHVFQUR1RSxFQUN2RTtBQUFBLFFBQ1ksS0FEWixHQUNzQixJQUR0QixDQUNZLEtBRFo7QUFBQSxRQUVVLE9BRlYsR0FFc0IsSUFGdEIsQ0FFVSxPQUZWO0FBSUksUUFBSSxDQUFDLEtBQUssTUFBVixFQUFrQjs7QUFFbEIsUUFBSSxDQUFDLE1BQUwsRUFDQTtBQUNJLFVBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0I7QUFFbEIsZUFBUyxLQUFLLE1BQUwsQ0FBWSxNQUFyQjtBQUNIOztBQUVELFFBQUksS0FBSyxNQUFULEVBQWlCLFVBQVUsS0FBSyxNQUFMLENBQVksQ0FBdEI7QUFFakIsU0FBSyxDQUFMLEdBQVMsV0FBVyxNQUFYLEVBQW1CLEtBQUssTUFBeEIsRUFBZ0MsT0FBaEMsRUFBeUMsS0FBekMsQ0FBVDtBQUNILEdBakJELENBdkRKLENBMkVBOztBQUNDLENBN0VBLEVBNkVDLElBN0VELENBQUQ7QUFnRkE7Ozs7Ozs7Ozs7QUFRQSxTQUFTLFVBQVQsQ0FBb0IsWUFBcEIsRUFBa0MsYUFBbEMsRUFDQTtBQUFBLE1BRGlELE1BQ2pELHVFQUQwRCxDQUMxRDtBQUFBLE1BRDZELEtBQzdELHVFQURxRSxJQUNyRTtBQUNJLE1BQUksU0FBVSxDQUFDLGVBQWUsYUFBaEIsSUFBaUMsQ0FBbEMsR0FBd0MsZ0JBQWdCLE1BQXJFO0FBRUEsTUFBSSxLQUFKLEVBQVcsU0FBVSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQVY7QUFDWCxTQUFPLE1BQVA7QUFDSCIsImZpbGUiOiJwaXhpLWNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogcGl4aS1wYXVzZSBpcyBhIHBsdWdpbiBmb3IgcGl4aS5qcywgd2hpY2ggYXV0b21hdGljYWxseSBwYXVzZSBhbmQgcmVzdW1lcyB5b3VyIEFwcCB3aGVuIHRoZSBicm93c2VyIHdpbmRvdydzIHZpc2liaWx0eSBjaGFuZ2VzXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIGlkLWxlbmd0aCAqL1xuXG5cbihmdW5jdGlvbiBpbml0KHBpeGkpXG57XG4gICAgaWYgKCFwaXhpIHx8ICFwaXhpLkRpc3BsYXlPYmplY3QpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQSVhJIHdhcyBub3QgZm91bmRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIGFuIGVsZW1lbnQgYWxvbmcgYm90aCBYIGFuZCBZIGF4aXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIHdpZHRoICAgIFRoZSB3aWR0aFxuICAgICAqIEBwYXJhbSAgezx0eXBlPn0gIGhlaWdodCAgIFRoZSBoZWlnaHRcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICByb3VuZCAgICBUaGUgcm91bmRcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICBhbmNob3JYICBUaGUgYW5jaG9yIHhcbiAgICAgKiBAcGFyYW0gIHs8dHlwZT59ICBhbmNob3JZICBUaGUgYW5jaG9yIHlcbiAgICAgKi9cbiAgICBwaXhpLkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNlbnRlclhZID0gZnVuY3Rpb24gY2VudGVyWFkod2lkdGgsIGhlaWdodCwgb3B0cyA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5jZW50ZXJYKHdpZHRoLCBvcHRzKVxuICAgICAgICB0aGlzLmNlbnRlclkoaGVpZ2h0LCBvcHRzKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIGFuIGVsZW1lbnQgYWxvbmcgaXRzIFggYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgIHdpZHRoICAgIFRoZSB3aWR0aFxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59ICByb3VuZCAgICBUaGUgcm91bmRcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgYW5jaG9yWCAgVGhlIGFuY2hvciB4XG4gICAgICovXG4gICAgcGl4aS5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jZW50ZXJYID0gZnVuY3Rpb24gY2VudGVyWCh3aWR0aCwgb3B0cyA9IHt9KVxuICAgIHtcbiAgICAgICAgY29uc3QgeyByb3VuZCB9ID0gb3B0c1xuICAgICAgICBsZXQgeyBhbmNob3JYIH0gPSBvcHRzXG5cbiAgICAgICAgaWYgKCF0aGlzLndpZHRoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCF3aWR0aClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMucGFyZW50LndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yKSBhbmNob3JYID0gdGhpcy5hbmNob3IueDtcblxuICAgICAgICB0aGlzLnggPSBjZW50ZXJBeGlzKHdpZHRoLCB0aGlzLndpZHRoLCBhbmNob3JYLCByb3VuZClcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIGFuIGVsZW1lbnQgYWxvbmcgaXRzIFkgYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7PHR5cGU+fSAgIGhlaWdodCAgIFRoZSBoZWlnaHRcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSAgcm91bmQgICAgVGhlIHJvdW5kXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSAgIGFuY2hvclkgIFRoZSBhbmNob3IgeVxuICAgICAqL1xuICAgIHBpeGkuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY2VudGVyWSA9IGZ1bmN0aW9uIGNlbnRlclkoaGVpZ2h0LCBvcHRzID0ge30pXG4gICAge1xuICAgICAgICBjb25zdCB7IHJvdW5kIH0gPSBvcHRzXG4gICAgICAgIGxldCB7IGFuY2hvclkgfSA9IG9wdHNcblxuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0KSByZXR1cm47XG5cbiAgICAgICAgaWYgKCFoZWlnaHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcblxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5wYXJlbnQuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yKSBhbmNob3JZID0gdGhpcy5hbmNob3IueTtcblxuICAgICAgICB0aGlzLnkgPSBjZW50ZXJBeGlzKGhlaWdodCwgdGhpcy5oZWlnaHQsIGFuY2hvclksIHJvdW5kKVxuICAgIH07XG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG59KFBJWEkpKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGF4aXMgcG9zaXRpb24gdG8gY2VudGVyIGFuIGVsZW1lbnQgd2l0aGluIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBwYXJlbnRMZW5ndGggICBUaGUgcGFyZW50IGxlbmd0aCBlLmcuIFBJWEkuQ29udGFpbmVyLndpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICBlbGVtZW50TGVuZ3RoICBUaGUgZWxlbWVudCBsZW5ndGggIGUuZy4gUElYSS5TcHJpdGUud2lkdGhcbiAqIEBwYXJhbSAge251bWJlcn0gICAgICAgICAgICAgIGFuY2hvciAgICAgICAgIFRoZSBhbmNob3IgYSB2YWx1ZSBiZXR3ZWVuIDAtMVxuICogQHBhcmFtICB7KEZ1bmN0aW9ufGJvb2xlYW4pfSAgcm91bmQgICAgICAgICAgVGhlIHJvdW5kIHdoZXRoZXIgb3Igbm90IHRvIHJvdW5kIHRvIGEgcGl4ZWxcbiAqL1xuZnVuY3Rpb24gY2VudGVyQXhpcyhwYXJlbnRMZW5ndGgsIGVsZW1lbnRMZW5ndGgsIGFuY2hvciA9IDAsIHJvdW5kID0gdHJ1ZSlcbntcbiAgICBsZXQgb2Zmc2V0ID0gKChwYXJlbnRMZW5ndGggLSBlbGVtZW50TGVuZ3RoKSAvIDIpICsgKGVsZW1lbnRMZW5ndGggKiBhbmNob3IpXG5cbiAgICBpZiAocm91bmQpIG9mZnNldCA9ICBNYXRoLnJvdW5kKG9mZnNldCk7XG4gICAgcmV0dXJuIG9mZnNldFxufVxuIl19