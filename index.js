'use strict';

var mediaQueryTypes = require('media-query-types');

module.exports = function isMediaType(mediaType) {
  if(typeof mediaType !== 'string') {
    throw new TypeError('is-media-type expects a string');
  }

  return mediaQueryTypes().indexOf(mediaType) != -1;
}
