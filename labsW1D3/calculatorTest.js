"use strict";

const assert = require("assert"); 
const myExports = require("./calculator.js");
const calculator = myExports.calculator;

describe("calculator", function() {
  //let calculator;
  before(function() {
 // calculator = new Calculator();
  calculator.getValues(2, 3);
  });
  it("when 2 and 3 are entered, the sum is 5", function() {
  assert.equal(calculator.sum(), 5);
  });
  it("when 2 and 3 are entered, the product is 6", function() {
  assert.equal(calculator.mul(), 6);
  });
  });
