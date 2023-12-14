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
