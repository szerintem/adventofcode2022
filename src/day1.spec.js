const fs = require('fs')

const day1 = require('./day1')
const input = fs.readFileSync(__dirname+'/day1.txt', 'utf8')

describe('day1', () => {

  describe('max', () => {
    it('should work with exmaple seed', () => {
      expect(day1.max(exampleSeed)).to.eql(24000)
    })
    it('should with with puzzle input', function () {
      expect(day1.max(input)).to.eql(69206)
    })
  })

  describe('top3sum', function () {
    it('should work with example seed', () => {
      expect(day1.top3sum(exampleSeed)).to.eql(45000)
    })
    it('should work with puzzle input', function () {
      expect(day1.top3sum(input)).to.eql(197400)
    })
  })

})

const exampleSeed = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
