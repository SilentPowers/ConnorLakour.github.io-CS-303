"use strict";
/*eslint-disable*/

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


const car = new Car();
car.accelerate()
car.accelerate()
car.brake()

