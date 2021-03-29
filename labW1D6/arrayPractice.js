"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { includesEvenAge, doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum }; //add all of your function names here that you need for the node mocha tests

/*
const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]

 map :
 - double numbers
 - double age
filter:
 - filter all even numbers
 - filter all age > 10
 - find even, include even
 - find age > 10, include age > 10

 reduce
 - find sum of numbers
 - find average of numbers
 - find max of numbers
 - find max for ages
 - use a chain of map filter reduce to find the average age of people with even number ages
 - use a chain of map filter reduce to find the average age of people with odd number ages
*/
//let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }];


function doubleNums(arr) {
  return arr.map(num => num * 2);
}


function doubleAges(arr) {
  const doubleAgesArray = arr.map(function (obj) {
    let { name, age } = obj;
    age = age * 2;
    return { name, age };

  })
  return doubleAgesArray;
}


// console.log(doubleAges(peopleArray));
// console.log(peopleArray)

function filterEven(arr) {
  const evenNums = arr.filter(function (number) {
    return number % 2 === 0;
  })
  return evenNums;
}



function filterOver10(arr) {
  const over10 = arr.filter(function (obj) {
    return obj.age > 10;
  })
  return over10;
}



function findEvenNum(arr) {
  const found = arr.find(function (num) {
    return num % 2 === 0;
  })
  return found;
}


function findEvenAge(arr) {
  const evenAge = arr.find(function (obj) {
    return obj.age % 2 === 0;
  })
  return evenAge;
}

// console.log(findEvenAge([{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]))

function includesEvenNum(arr) {

  const includesEven = arr.find(function (num) {

    return num % 2 === 0;
  })
  return includesEven;
}



function includesEvenAge(arr) {

  const includesEven = arr.find(function (num) {
    if (num !== 0 && num > 0 && num % 2 === 0) {
      return num
    }
  })
  return includesEven;
}