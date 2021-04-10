"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {Accumulator }; //add all of your function names here that you need for the node mocha tests
/*
Write a constructor function Accumulator(initialValue, increment). 
     The object it creates should:
•	Store the current accumulated value in a property currentValue.  
    The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.
*/

/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){

  this.currentValue = initialValue;

  this.accumulate = function(){
    this.currentValue = this.currentValue + increment;
  };

  this.report = function() {
    console.log(this.currentValue);
  };

}
