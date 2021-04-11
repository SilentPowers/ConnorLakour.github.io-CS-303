"use strict";
/*eslint-disable*/

const Person = function(fName, bYear){
  this.fName = fName;
  this.bYear = bYear;
};

Person.prototype.calcAge = function(){
  console.log(2037-this.bYear);
};

//class has a lot going on behind the scenes, 
//class is a layer of abstraction over constructor fcns

class Student extends Person{

}

