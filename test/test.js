var assert = require('assert');
var isMediaType = require('..');

var validMediaTypes = [
  'all',
  'braille',
  'embossed',
  'handheld',
  'print',
  'projection',
  'screen',
  'speech',
  'tty',
  'tv'
];

var invalidMediaTypes = [
  'foo',
  'bar',
  'all*(&)',
  ' braille'
]

describe('is-media-type', function() {

  it('return true for valid media types', function() {
    validMediaTypes.forEach(function(mediaType) {
      assert.ok(isMediaType(mediaType));
    });
  });

  it('return false for invalid media types', function() {
    invalidMediaTypes.forEach(function(invalidMediaType) {
      assert.ok(!isMediaType(invalidMediaType));
    });
  });
});
