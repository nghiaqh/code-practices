function countSteps (n, t, s) {
  let total = t || 0
  const skip = s || []

  for (let stairs = 1; stairs <= 3; stairs++) {
    const steps = Math.floor(n / stairs)
    if (steps <= 0) break

    for (let i = steps; i > 0; i--) {
      const remained = n - stairs * i
      const toSkip = skip.includes(remained) && skip.includes(stairs)
      console.log(`${n} = ${stairs} * ${i} + ${remained} ${toSkip ? '[skipped]' : ''}`)

      if (remained > 0) {
        if (!toSkip) {
          console.log(`recursive(${remained}, ${total}, [${skip}])`)
          total = countSteps(remained, total, skip)
        }
      } else {
        if (!skip.includes(0)) { skip.push(0) }
        if (!skip.includes(stairs)) {
          skip.push(stairs)
          total++
          console.log(`total = ${total}`)
          console.log(`skip = ${skip}`)
        }
      }
    }
  }

  return total
}

// console.log(countSteps(1))
// console.log('----------')
// console.log(countSteps(3))
console.log('----------')
console.log(countSteps(5))
