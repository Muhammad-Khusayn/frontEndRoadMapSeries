// ==== Math built in objects =========
Math.PI;
// 3.141592
Math.E;
// 2.718281
Math.abs(-60);
// 60
Math.ceil(Math.PI);
// 4
Math.floor(Math.PI);
// 3
Math.round(Math.PI);
// 3
Math.min(1, 2, 3, 4, 5, 6);
// 1
Math.max(1, 2, 3, 4, 5, 6);
// 6
Math.random();
// Gives random number between 0 and 1
// How to use Math.random()

const randomNumber = Math.random();
const largerNumber = randomNumber * 49;
// The multiplier will set the number from 0 to its value in this case it is from 0 to 49
const wholeNumber = Math.round(largerNumber);
// to get a whole number you may use Math.round() method
console.log(wholeNumber);

// where can you use the random method::::::::::::::

const arr = ["messi", "Ronaldo", "Mbappe", "Haland", "Pedri", "Gavi"];
const randomIndex = Math.floor(Math.random() * arr.length);
console.log(arr[randomIndex]);
