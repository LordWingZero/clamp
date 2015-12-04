module.exports = clamp;

/**
 * Returns a value that is between the provided min and max.
 * If value is outside those, the min or max is returned respectively.
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @return {Number} clamped
 */
function clamp(value, min, max) {
  if (min > max) {
    return 0;
  }
  return Math.max(min, Math.min(max, value));
}

/**
 * Shorthand for clamp, provies min as 0.0 and max as 1.0.
 * @param {Number} value
 * @return {Number} clamped
 */
clamp.prototype.saturate = function (v) {
  return clamp(v, 0.0, 1.0);
}
