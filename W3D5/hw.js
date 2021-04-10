"use strict";


///////////////// Working with prototype

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); //gets jump from rabbit object, true

delete rabbit.jumps; 

console.log( rabbit.jumps ); // gets jump from animal object, null

delete animal.jumps;

console.log( rabbit.jumps ); // undefined


///////////////// Searching algorithm
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


//Performance wise there is no difference in getting glasses property, both are the fastest


/////////////////Where does it write?

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal2
};

rabbit2.eat(); //rabbit now has property =  full: true;


////////////////////Why are both hamsters full?
let hamster = {
  // stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

//Both are linked to the same array, so each object should get their own array.
//Both shared the same stomach
//As a common solution, all properties that describe the state of a particular object,
// like stomach above, should be written into that object. That prevents such problems.

/**
 * 
 */
function Calculator() {
  this.read = function() {
    this.input1 = +prompt("input1?", 0);
    this.input2 = +prompt("input2?", 0);
  };

  this.sum = function() {
    return this.input1 + this.input2;
  };

  this.mul = function() {
    return this.input1 * this.input2;
  };
}




