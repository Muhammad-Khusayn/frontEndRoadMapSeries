const colors = ["orange", "green", "yellow", "purple", "blue"];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

switch (randomColor) {
  case "orange":
    console.log("the color is orange");
    break;
  case "green":
    console.log("the color is green");
    break;
  case "yellow":
    console.log("the color is yellow");
    break;
  case "purple":
    console.log("the color is purple");
    break;
  case "blue":
    console.log("the color is blue");
    break;
  default:
    console.log("no color was found");
}

function noSpace(str) {
  const arr = str.split(" ");
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const trimmedString = arr[i].trim();
    newArray.push(trimmedString);
  }

  const newString = newArray.join("");

  return newString;
}

console.log(noSpace("messi is the best in the world"));

function maps(x) {
  let outputArray = Array.from(x, (x) => x * 2);
  return outputArray;
}

console.log(maps([1, 2, 3, 4]));

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};
