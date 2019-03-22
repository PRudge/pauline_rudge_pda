var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add two numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    res = calculator.runningTotal
    assert.equal(res, 5);
  })

  it('it should subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(3);
    res = calculator.runningTotal
    assert.equal(res, 4);
  })

  it('it should multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    res = calculator.runningTotal
    assert.equal(res, 15);
  })

  it('it should divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    res = calculator.runningTotal
    assert.equal(res, 3);
  })

});
