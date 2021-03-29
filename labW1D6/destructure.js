"use strict";

// const [bob, sally, johnny] =  ["Bob", "Sally", "Johnny"];

// const [con, ...rest] = ["connor", "lakour" , "robertson", "meador"];


// let {height, width, title} = { title: "Menu", height: 200, width: 100 }
// //console.log(height, width ,title);


// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };

// //change the property name
// const{point: first, shooting: second, power: third, small: fourth, center: fifth} = team;

// console.log(first, second, third, fourth, fifth);

// let now = new Date();
// console.log(now.getFullYear());



/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests

/*
There is a salaries object:

Create the function topSalary(salaries) that returns the name of the top-paid person.
If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
if(salaries === {}){
  return null;
}
let max = 0;
let name = "";
for(const el of Object.entries(salaries)){
  
  const [key, value] = el;
  if(max < value){
    max = value;
    name = key;
  }
}
return name;

  }


 /*
  Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) 
should be 19th and getDateAgo(new Date(), 2) should be 18th. Should work reliably for days=365 or more:
*/
  function getDateAgo(date, days) {

  }
