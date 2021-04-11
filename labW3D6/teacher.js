"use strict";
/*eslint-disable*/
// The next exercise comes from: https://www.learn-js.org/en/Inheritance
// Create an object called Teacher derived from the Person class, and implement a method
// called teach
// which receives a string called subject, and returns a string:
// [teacher's name] is now teaching [subject]
const Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

const Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

const Teacher = function() {
  this.teach = function(subject){
      console.log(this.name + " is now teaching " + subject);
  }
}
Teacher.prototype = new Person();
const him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");

module.exports ={Student, Teacher}
