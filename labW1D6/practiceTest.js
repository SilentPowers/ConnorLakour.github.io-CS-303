"use strict";
/*eslint-disable*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//17
function multiplyAll(array) {
  const product = array.reduce(function (acc, element) {
    return acc * element;
  }, 1);

  console.log(product)
  return product
}

multiplyAll(array);




//16
//const arr = [student1, student2]
//console.log(arr)
function each(arr) {
  const element = arr.forEach(function (el, i) {

    //console.log(el.fName, el.lName , i )
  })
  return element
}


/*
18. [6] Write a function ‘thisProgramIsTheBest’ which takes 3 parameters.
 First two parameters
are objects that have property ‘color’ and the last one is a function, “cbFun”.
 If the color properties are equal, then return “Same color!”, otherwise call the cbFun 
function with the input
parameters as arguments, and then return “Different colors”.
*/

const ob1 = { color: "red" };
const ob2 = { color: "blue" };


function thisProgramIsTheBest(ob1, ob2, cbFun) {
  if (ob1.color === ob2.color) {
    return "same color"
  }
  return cbFun(ob1, ob2);

}

function cbFun(ob1, ob2) {
  return "Different Colors"
}



// 19. [6] Write a function, helper, that map will use to multiply each element by its corresponding
// the array index. For example, in the code below returnVal should be [0, 20, 60, 120]. Also, fill
// in the blank for what the second log will show as the value of the array:
let array1 = [10, 20, 30, 40]
let returnVal = array1.map(helper);
//console.log(returnVal); // [0, 20, 60, 120]
//console.log(array1); // _____________________

function helper(el, i) {
  return el * i;
}


/*
20. [4] Complete the code for an object, rectangle. It should have properties for length and
width. It should have methods to compute and return the area and the circumference.
*/
const rectangle = {
  length: 5,
  width: 8,
  computeArea: function () {
   const area = this.length * this.width;
    return area;
  },
  
  computeCircumference: function () {
    return 2 * (this.width, this.length);
  },
  
  consoleLog: function () {
    
  this.computeCircumference();
    this.computeArea();
  }
  
}
console.log(rectangle.consoleLog());


//15.[4] Write a function named somethingOdd that takes
// an array of numbers as input and returns
//the product of all the array values at the odd indices. You can use a simple for loop.




/*
14.[4] Write a function named sortThis that takes 
three input parameters and returns an array
that has them sorted in ascending order.
e.g. calling sortThis(5, 2, 3) should return [2, 3, 5]
*/

const arr33 = [5,3,8,1];
const sortThis2 =  function(a,b){
if(a > b){
  return 1;
}
if(a < b){
  return -1
}
if(a === b){
  return 0;
}
}

function sortThis(arr){
 arr.sort(function(a,b){
    return a - b;
  })
  return arr;
}


console.log(arr33.sort(sortThis2))
console.log(sortThis(arr33))
