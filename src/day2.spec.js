const fs = require('fs')

const day2 = require('./day2')

describe('day2', () => {
  it('should work with seed data', () => {
    const data = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
    const result = day2(data)
    expect(result).to.eql(45000)
  })
  it('should with with puzzle input', function () {
    const data = fs.readFileSync(__dirname+'/day1.seed', 'utf8')
    const result = day2(data)
    console.log('result', typeof result, JSON.stringify(result))
    // 197400
  })
})
