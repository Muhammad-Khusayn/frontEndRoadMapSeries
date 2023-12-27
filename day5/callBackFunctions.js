function myCallBack(someNumber) {
  return someNumber * 2;
}

function mainFunction(randomNumber, shouldCall, callback) {
  let result = randomNumber;

  if (shouldCall) {
    result = callback(randomNumber);
  }

  return result;
}

// console.log(mainFunction(20, true, myCallBack));

// another way of calling the function above

// console.log(
//   mainFunction(20, true, (num) => {
//     return num * 2;
//   })
// );

// ======== OR ============

console.log(mainFunction(20, true, (num) => num * 2));

// ======== Array.map =========
const array1 = [1, 2, 3, 4, 5];

const map1 = array1.map((x) => x * 2);

console.log(map1);
