// boolean

const booleanVarriable = true;

console.log(booleanVarriable);

//  string

const myString = "Hello world";

console.log(myString);

// number

const firstNumber = 20;

console.log(firstNumber);

// Reassigne variables

var secondNumber = 40;

var secondNumber = 80;

console.log(secondNumber);

// array

const myArray = [booleanVarriable, myString];

console.log(myArray);

// Object

const myObject = {
  firstProperty: myArray,
  sumProperty: Number(firstNumber) + secondNumber,
};

console.log(myObject.firsProperty, myObject.sumProperty);

console.log(myObject.firstProperty[1]);
