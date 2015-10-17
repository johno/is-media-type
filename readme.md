# is-media-type [![Build Status](https://secure.travis-ci.org/johnotander/is-media-type.png?branch=master)](https://travis-ci.org/johnotander/is-media-type)

Determine whether a string is a valid media query type specified by the W3C.

<http://www.w3.org/TR/CSS21/media.html>.

## Installation

```bash
npm install --save is-media-type
```

## Usage

```javascript
var isMediaType = require('is-media-type')

isMediaType('all')  // => true
isMediaType('braille')  // => true
isMediaType('foo')  // => false
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
