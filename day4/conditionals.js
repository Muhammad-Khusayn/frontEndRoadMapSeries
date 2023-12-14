// ======= basic structure of conditionals ==========

if ("oneString" === "anotherString") {
  console.log("the stings are equal");
} else {
  console.log("the strings are not equal");
}

// ====== different ways of writing if statements ===========

const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber;

// Only if statement

if (jsExpression) {
  console.log("the expression is true");
}

// An if-else statement

if (jsExpression) {
  console.log("this expression is true");
} else {
  console.log("this expression is false");
}

if (jsExpression) {
  console.log("the expression is true");
} else if (firstNumber > 0) {
  console.log("the expression is false and the firstNumber is greater than 0");
} else {
  console.log("expression is false and firstNumber is 0 or less");
}
