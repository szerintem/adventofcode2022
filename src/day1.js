
const day1 = function(data) {
  const rows = data.split("\n")

  let current = 0
  const blocks = []

  for(const rowNumber in rows) {
    const rowContent = rows[rowNumber]

    if(rowContent === '') {
      blocks.push(current)
      current = 0
      continue
    }

    current += parseInt(rowContent)
  }
  blocks.push(current)

  return Math.max(...Object.values(blocks))
}

module.exports = day1
