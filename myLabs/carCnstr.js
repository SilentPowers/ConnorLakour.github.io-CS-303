"use strict";
/*eslint-disable*/

//Prototype inheritance

function Car() {
  this.make = "Mazda";
  this.speed = 100;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed)
}

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed)
}


// const car = new Car();
// car.accelerate()
// car.accelerate()
// car.brake()

function EV(make, speed, charge){
Car.call(this, make, speed)
// this.make = make;
// this.speed = speed;
this.charge = charge;
}

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){

  this.speed = this.speed + 20;
  this.charge = this.charge -1;
  console.log(`Tesla going at ${this.speed} and charge at ${this.charge}%`)
}




const myEV = new EV("Tesla", 100, 44);
myEV.accelerate()
// myEV.brake();
// myEV.brake();
myEV.accelerate();
myEV.chargeBattery(88);
myEV.accelerate();




//ES6 classes

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(this.speed)
//   }

//   brake() {
//     this.speed = this.speed - 5;
//     console.log(this.speed)
//   }

//   get speedKM(){
//     return this.speed / 1.6;
//   }

//   set speedKM(speed){
//     this.speed = speed;
//   }
// }
// const myCar = new Car("Miata", 75)
// console.log(myCar.speedKM);
// // myCar.accelerate()
// // myCar.accelerate()
// // myCar.accelerate()
// myCar.speedKM = 88;
// console.log(myCar.speedKM)






