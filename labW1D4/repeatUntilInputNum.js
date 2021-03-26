"use strict";
/*
Create a function readNumber which prompts for a number until the visitor 
enters a valid numeric value.
The resulting value must be returned as a number.
The visitor can also stop the process by entering an empty line or pressing 
“CANCEL”. In that case, the function should return null.

*/

/**
 * @returns{*} = a number or null
 */
 function readNumber() {
  let num;

  do {
    num = promptInput();
    //while isFinite is not a number
    //isFinite checks and if not a number mutates num to NaN
  } while ( !isFinite(num) );

  //null and empty space are treated as a zero so we must check
  if (num === null || num === '') return null;

  return +num;
}

console.log(`Read: ${readNumber()}`);



function promptInput() {
  let prompt = require("prompt-sync")();
  let input = prompt("Enter a valid numeric value:")
  return input;
}


//let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
//console.log( isFinite(num) );


