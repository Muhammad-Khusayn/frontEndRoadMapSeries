// .pop() method removes the last element from the array
const arr = [1, 2, 3, 5, 6];
arr.pop(); // removed 6
arr.pop(); // removed 5
// .push() method adds elements to the array
arr.push(4, 5, 6); // added 4 ,5, 6
console.log(arr); // output [1, 2, 3, 4, 5, 6]
arr.unshift(0); // adds element in the beggining

// ===== .slice() =====

const newArr = arr.slice();
// output is the same as the arr. We just copied the array

const anotherArr = newArr.slice(3); // sliced the array till the given index
console.log(anotherArr); // output [3, 4, 5, 6]

// ====== .splice() ========

const strArr = [1, 2, 3, "oops", 5, 6, 7];
const splArr = strArr.splice(3, 1, 4); // starts at index 3 changes 1 element inputs 4 instead of sliced element
console.log(strArr);

// ======= .indexOf() =========

console.log(arr[arr.indexOf(3)]);

// ======= .findIndec() =======
// For an in depth search in more complicated arrays

const complexArr = [
  {
    firstName: "Leo",
    lastName: "Messi",
  },
  {
    firstName: "Sergio",
    lastName: "Aguero",
  },
  {
    firstName: "Mateo",
    lastName: "Messi",
  },
  {
    firstName: "Thiago",
    lastName: "Messi",
  },
];
console.log(
  complexArr.findIndex((arrItem) => {
    return arrItem.lastName !== "Messi";
  })
);

// For finIndex() you need to write a callback (function) and include your search conditions

// ========== .map() =========

const blogPostsFromDatabase = [
  {
    title: "What is JavaScript",
    category: "uncatigorized",
  },
  {
    title: "Array Methods in JavaScript",
    category: "uncatigorized",
  },
  {
    title: "Is Web Development Actual Today",
    category: "uncatigorized",
  },
];

const result = blogPostsFromDatabase.map((arrItem) => {
  arrItem.category = "Web Development";
  return arrItem;
});

console.log(result);
