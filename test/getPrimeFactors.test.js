var expect = require('chai').expect

describe('prime factor',function(){
  it('should be [] for 1', function(){
    expect(getPrimeFactors(1)).to.be.eql([])
  })
})
