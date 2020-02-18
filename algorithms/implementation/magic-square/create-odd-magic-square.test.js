const assert = require('assert')

const { createOddMagicSquare } = require('./create-odd-magic-square')

const square = createOddMagicSquare(3)
const expected = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]

assert.deepStrictEqual(square, expected)
