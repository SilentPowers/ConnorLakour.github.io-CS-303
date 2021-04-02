
"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi() {
     console.log( `Hello, my name is ${this.name}. I am ${this.age}. My job is ${this.job}`);
  }
  
  // add sayHi function to both objects
  //higher order fcn 
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'




/** works if not in strict-mode
 * @returns {undefined}
 */
//  function sayHi2() {
//   this.lat = 44.00;
//   this.long = -93.96;
//   console.log(this);
// }

// sayHi2(); // undefined
// console.log(lat);