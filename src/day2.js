
const day2 = function(data) {
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

  let values = [...Object.values(blocks)]
  values = values.sort((a, b) => a - b)

  return values[values.length - 1] + values[values.length - 2] + values[values.length - 3]
}

module.exports = day2
