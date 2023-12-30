// Identifiers  Quantifiers
const regEx = new RegExp("g");

// new lets declare an existing objecg give new properties
// RegExp above is used to test the string below if they have letter 'g'

const string1 = "Messi is the best";
const string2 = "Messi is a top g";

console.log(regEx.test(string1));
console.log(regEx.test(string2));

// Note reg expretions are case sensetive

// ========= another way to declare regular expretions =============

console.log(/Messi/.test(string1));

// OR give by letters

/[A-Z]/.test(string1); // upper case letters from A to Z
/[0-9]/.test(string1); // numbers from 1 to 9
/[A-Za-z0-9 ]/.test(string1); // you may combine all the conditions even spaces

const numberExpression = "0123456789";

// the expression below is an equivalent of /[0-9]/.test(string1);

console.log(/\d/.test(numberExpression));

// \s matches all widespace characters ==== \w matches all numbers and letters
