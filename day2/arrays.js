const myNumberArray = [0, 1, 2, 3, 4, 5, 6, 7];

console.log(myNumberArray[2]);

const myMixedDataTypeArray = [0, "a string", { prop: "messi" }, [1, 2, 4]];

console.log(myMixedDataTypeArray[2]);

/* 

this is how you call a data from a certain array in JS (by indicating index)
In JS you can make an array with mixed data types line5

*/

console.log(myMixedDataTypeArray[3][0]);
// This is how you get a value from a nested array
