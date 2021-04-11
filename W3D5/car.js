"use strict";
/*eslint-disable*/

//Prototype inheritance

// function Car() {
//   this.make = "Mazda";
//   this.speed = 100;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed)
// }

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed)
// }


// const car = new Car();
// car.accelerate()
// car.accelerate()
// car.brake()


//ES6 classes

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed)
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed)
  }

  get speedKM(){
    return this.speed / 1.6;
  }

  set speedKM(speed){
    this.speed = speed;
  }
}
const myCar = new Car("Miata", 75)
console.log(myCar.speedKM);
// myCar.accelerate()
// myCar.accelerate()
// myCar.accelerate()
myCar.speedKM = 88;
console.log(myCar.speedKM)
