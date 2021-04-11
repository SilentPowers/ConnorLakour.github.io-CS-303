"use strict";

const Person = function(fName, bYear){
  this.fName = fName;
  this.bYear = bYear;
};

Person.prototype.calcAge = function(){
  console.log(2037-this.bYear);
};

const Student = function(fName, bYear, course){

  //DRY 
  // this.fName =fName;
  // this.bYear = bYear;

  Person.call(this,fName,bYear);
  this.course = course;
};

//Stduent.prototype object now inherits from Person 
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
  console.log(`Hello im ${this.fName} and im studying ${this.course}`);
};

const student = new Student("Connor",1990,"Astro-biology");
student.introduce();
student.calcAge();