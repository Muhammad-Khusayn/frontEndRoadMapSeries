// ==== basic function ====

function myFunction() {
  console.log("Hello World, this is my function");
}
// === invoke, call function ====
myFunction();

// === how to declare and instantly invoke the function ===

(function instantFunction() {
  console.log("Messi is the best player in the world");
})();

/* Parameters and arguments in functions 
Parameters are what we pass in to the functions inside the brackets
arguments are the values after the declaration of function */

function myFunction1(para1, para2) {
  console.log(para1);
  console.log(para2);
}

myFunction1("messi", "ronaldo");
/* Scopes 
Scopes determines the accessibility of variables objects and functions from different parts of the code 
For Example: 
para1 is cannot be invoked out of the function it is only available within the function
*/

// ===== declare functions as variables =======
const anotherFunction = function () {
  console.log("another function");
};

anotherFunction();

// ======= Arrow Functions =======

const arrowFunction = () => {
  console.log("this is an arrow function");
};

arrowFunction();

// ====== return functions ======

const returFunction = () => {
  const a = 20;
  return a;
};

const result = returFunction();

console.log(result);

// you can rich a variable from a globel scope to a function scope

const myNumber = 20;

let myFunction2 = () => {
  if (myNumber < 50) {
    return "the function has returned early";
  }

  return 40;
};

console.log(myFunction2());

// you access functions within the objects
const objFunction = () => {
  return "Object Function";
};

const myObj = {
  prop1: 20,
  prop2: objFunction,
};

console.log(myObj.prop2());
