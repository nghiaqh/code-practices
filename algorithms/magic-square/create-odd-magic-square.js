/**
 * Create a nxn square contains undefined values
 *
 * @param {number} n - an integer
 * @returns {Array|null}
 */
function createEmptySquare (n) {
  if (!Number.isInteger(n) || n <= 0) return null

  const square = [...Array(n)].map(x => null)
  square.forEach((value, index) => {
    square[index] = [...Array(n)].map(x => null)
  })

  return square
}

/**
 * Create a magic square of odd order
 *
 * @param {number} n - an odd positive integer
 * @returns {Array|null} - return null if n is not an odd number
 */
function createOddMagicSquare (n, progression = null) {
  if (!(n % 2)) return null
  if (!progression) {
    progression = [...Array(n * n)].map((x, i) => i + 1)
  }

  const square = createEmptySquare(n)

  let x = Math.floor(n / 2)
  let y = n - 1
  square[x][y] = progression[0]

  console.log(`Step 1 [${x}, ${y}]: `)
  console.log(square)

  for (let i = 1; i < n * n; i++) {
    x -= 1
    y += 1

    if (x < 0 && y === n) {
      x = 0
      y = n - 2
    } else {
      x = x < 0 ? n - 1 : x
      y = y === n ? 0 : y
    }

    if (square[x][y] !== null) {
      x = x + 1
      y = y - 2
    }

    x = x === -1 ? 0 : x
    y = y === n ? n - 2 : y
    square[x][y] = progression[i]

    console.log(`Step ${i + 1} [${x}, ${y}]: `)
    console.log(square)
  }

  return square
}

module.exports = {
  createOddMagicSquare
}
