import test from 'ava'
import isMediaType from './'

const validMediaTypes = [
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
]

const invalidMediaTypes = [
  'foo',
  'bar',
  'all*(&)',
  ' braille'
]


test('returns true for valid media types', t => {
  t.plan(validMediaTypes.length)

  validMediaTypes.forEach(mediaType => {
    t.true(isMediaType(mediaType))
  })
})

test('returns false for invalid media types', t => {
  t.plan(invalidMediaTypes.length)

  invalidMediaTypes.forEach(invalidMediaType => {
    t.false(isMediaType(invalidMediaType))
  })
})
