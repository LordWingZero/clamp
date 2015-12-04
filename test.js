var test = require('tape')
var clamp = require('./')

test('clamp', function(t) {
  t.equal(clamp(0, -100, 100), 0)
  t.equal(clamp(0, 100, 100),  100)
  t.equal(clamp(0, 100, -100), 0)
  t.equal(clamp(100, 0, 50), 50)
  t.equal(clamp(50, 100, 150), 100)
  t.end()
});

test('saturate', function(t) {
  t.equal(clamp.prototype.saturate(0), 0)
  t.equal(clamp.prototype.saturate(0.05), 0.05)
  t.equal(clamp.prototype.saturate(100), 1)
  t.end()
})
