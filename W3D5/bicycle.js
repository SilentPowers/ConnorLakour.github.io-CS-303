"use strict";

/*
There is a file, bicycle.java, in the Mocha test assignment folder for today. 
Rename it to be a .js
file, and modify the code to be JavaScript.
a. Remove the Java constructor functions.
b. Make it run using only object literals and set the inheritance between mountainBike and
bicycle using the __proto__ property.
c. Remove all the unnecessary code and keywords such as class, extends, public, int, void,
etc.
d. Create an object named mountBike with 3 gears, speed =2, and any seatHeight.
e. Create a bicycle object with gears = 1 and speed = 0. This will be the __proto__ for the
mountainbike.
f. Add the module.exports at the end of the file and export the mountainBike object.
g. Use the bikeTests.js mocha test file to test it.
*/



/**
 * 
 */
function Bicycle() {
    this.gear;
    this.speed;
}

Bicycle.prototype.applyBrake = function (decrement) {
    this.speed -= decrement;
};

Bicycle.prototype.speedUp = function (increment) 
    {
     this.speed += increment;
    };



    const MountainBike = {

        __proto__: Bicycle,

        // the MountainBike subclass adds one more field
        seatHeight: 1,

        // the MountainBike subclass adds one more method
        setHeight(newValue) {
            this.seatHeight = newValue;
        }
    };
    

    // overriding toString() method
    // of Bicycle to print more info
    //     @Override public String toString()
    //     {
    //         return ("No of gears are " + gear + "\n"
    //                 + "speed of bicycle is " + speed); + "\nseat height is "
    //                 + seatHeight);
    //     }
    // }


    const bike = {
        gear: 1,
        speed: 0
    };

    const mountBike = {
        gear: 3,
        speed: 2,
        seatHeight: 9,
        __proto__: Bicycle,
    };



    const myBike = new MountainBike();
    console.log(myBike.speedUp(1));
    console.log(myBike.speedUp(2));
    console.log(myBike.speed);