/**
 * Check if a 2D array is square
 *
 * @param {Array} square - a 2D array
 * @returns {boolean} - true if all rows and colums has same length
 */
function isSquare (square) {
  const rowsCount = square.length
  if (rowsCount <= 0) return false

  const columnsCount = square[0].length

  square.forEach(row => {
    if (row.length !== columnsCount) return false
  })

  return true
}

/**
 * Check if an array of integers meet square magic requirements:
 * - sum of its items equal SUM
 * - contains only valid numbers (defined in NUMBERS)
 * - contains only distinct numbers (not duplicated or included in EXCLUDED)
 *
 * @param {Array} input - an array of integers
 * @param {number} SUM - an integer
 * @param {number[]} NUMBERS - an array of integers
 * @param {number[]} EXCLUDED - an array of integers
 */
function belongsToMagicSquare (input, SUM, NUMBERS, EXCLUDED) {
  if (!Array.isArray(input) || input.length <= 0) return false

  let sum = 0
  let hasInvalidItem = false
  let cache = []

  input.forEach(i => {
    if (cache.includes(i) || !NUMBERS.includes(i) || EXCLUDED.includes(i)) {
      hasInvalidItem = true
      return
    }

    sum += i

    cache.push(i)
  })

  return !hasInvalidItem && sum === SUM
}

/**
 * Check if a nxn array is a magic square
 * - Contains distinct integers [1, 2, 3, ... n]
 * - Sum of each row, column and diagonal are equal to n(n^2 + 1)/2
 *
 * @param {Array} square - a nxn array
 * @returns {boolean} - true if input square is a magic square
 */
function isMagicSquare (square) {
  if (!isSquare(square)) return false

  const n = square.length
  if (n === 2) return false

  const NUMBERS = [...Array(n * n)].map((x, i) => i + 1)
  const SUM = n * (n * n + 1) / 2

  let cache = []
  let hasInvalidRow = false

  for (let i = 0; i < n; i++) {
    const row = square[i]
    if (!belongsToMagicSquare(row, SUM, NUMBERS, cache)) {
      return false
    }
    cache.push(...row)
  }

  return !hasInvalidRow
}

module.exports = {
  isSquare,
  belongsToMagicSquare,
  isMagicSquare
}
