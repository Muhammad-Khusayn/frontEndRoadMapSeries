// looping through arrays
// what have we been doing:

const arrSimple = [1, 2, 3, 4, 5];

for (let i = 0; i < arrSimple.length; i++) {
  console.log(arrSimple[i]);
}

// what is a different way to do it
// ========= .forEach(arrow function)

arrSimple.forEach((arrItem) => {
  console.log(arrItem);
});

// You may pass in other attributes

arrSimple.forEach((arrItem, Index) => {
  console.log(arrItem, Index);
});

const colors = ["blue", "red", "green", "orange", "black", "white"];

let orangeExists = false;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "orange") {
    orangeExists = true;
  }
}

console.log(orangeExists);

// another simpler way to check the item for its existance in the array is as follows:

console.log(colors.includes("orange"));

// ========== .includes() method ==========
// OR you may also use indexOf() method
console.log(colors.indexOf("orange"));
console.log(colors.indexOf("orange") !== -1);

// ======== .filter() ========
const allOrders = [
  {
    productName: "Lattafa Asad",
    isDigital: false,
    isCanceled: false,
    isOpen: false,
  },
  {
    productName: "Lattafa Khamrah",
    isDigital: false,
    isCanceled: true,
    isOpen: false,
  },
  {
    productName: "Lattafa Pure Oud",
    isDigital: true,
    isCanceled: true,
    isOpen: false,
  },
  {
    productName: "Jean Paul Gaultier",
    isDigital: true,
    isCanceled: false,
    isOpen: false,
  },
];

// Now we are going to filter through the items above and give a soecific condition which in case of being matched with product will return the product
const digitalOrders = allOrders.filter((arrItem) => {
  return arrItem.isDigital;
});

console.log(digitalOrders);

// we may give more then one condition

const digitalCanceledOrders = allOrders.filter((arrItem) => {
  return arrItem.isDigital && arrItem.isCanceled;
});
console.log(digitalCanceledOrders);

const arr = [10, 20, 30, 25, 14];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// You also may use reduce method

function reducerCallback(sum, arrItem) {
  return (sum += arrItem);
}

const result = arr.reduce(reducerCallback, 0);
console.log(result);

// how write the code above in one line and retrive avarage number

console.log(arr.reduce((sum, arrItem) => (sum += arrItem), 0) / arr.length);
