// here is a link if you wanna learn more about quantifiers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers

const string1 = "my favourite foood is steak and many";

/[a-z ]*/.exec(string1); // Matches the preceding item "x" 0 or more times.
/[a-z ]+/.exec(string1); // Matches the preceding item "x" 1 or more times.
console.log(/[a-z]+/.exec(string1));
console.log(/[a-z ]+/.exec(string1));
// if you will not add a space after the condition in the brackets the regex will not procced to check what followed after space
console.log(/[a-z ]?/.exec(string1));

// to be more specific ypu maye use method above
console.log(/[a-z ]{5}/.exec(string1)); // the code matches 5 characters
// you also can give a range
console.log(/[a-z ]{0,6}/.exec(string1)); // the code matches the characters between the index of 2 and 6

// ========== FLAGS ==========
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags

const str = "my name is, 2022 @ messi";

console.log(/^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(str));
