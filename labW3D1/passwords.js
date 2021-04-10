"use strict"

// The call to askPassword() in the code below should check the password 
//and then call user.loginOk/loginFail depending on the answer.
// But it leads to an error. Why?
// Fix the highlighted line for everything to start working 
//right (other lines are not to be changed).


// eslint-disable-next-line require-jsdoc
function askPassword(ok, fail) {
  let prompt = require("prompt-sync")();
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//ask fcn gets ok and fail fcns w/out the object because they are in an object,
// so in essence they are just refrences  and "this" will be undefined.


// The task is a little more complex variant of Fix a function that loses "this".
// The user object was modified. Now instead of two functions loginOk/loginFail, 
//it has a single function user.login(true/false).
// What should we pass askPassword in the code below,
// so that it calls user.login(true) as ok and user.login(false) as fail?
// eslint-disable-next-line require-jsdoc
function askPassword2(ok, fail) {
  let prompt = require("prompt-sync")();
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  login(result) {
    console.log( this.name + (result ? " logged in" : " failed to log in") );
  }
};

//partial function because it has args
//askPassword2(user2.login.bind(user2, true) ,user2.login.bind(user2, false)); 

//using arrow fcn
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList() {
//   this.students.forEach((student) => {
// //the arrow fcn will get its "this" from the group object
//     console.log(this.title + ": " + student);
//   });
//   }
//  };
//  group.showList();


//using bind method
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    //const self = this;
  this.students.forEach(function(student) {
    console.log(this.title + ": " + student);
    //this was undefined because its a fcn, and in a regular fcn call, this is undefined
  }.bind(group));
  }
 };
 group.showList();




//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests
