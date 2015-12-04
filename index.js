module.exports = clamp;

function clamp(value, min, max) {
  if (min > max) {
    return 0;
  }
  return Math.max(min, Math.min(max, value));
}

clamp.prototype = function saturate(v) {
  return this.clamp(v, 0.0, 1.0);
}
