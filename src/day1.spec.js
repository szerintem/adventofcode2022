
const day1 = require('./day1')

describe('day1', () => {
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
    expect(day1(data)).to.eql(24000)
  })
})
