// This program changest background color on click

const htmlBody = document.querySelector("body");

const randomClickFunction = function () {
  const colors = [
    "#ff5a36",
    "#b5b3f4",
    "#bd33a4",
    "#fff8e7",
    "#ffa6c9",
    "#397a4c",
    "#babaf7",
    "#2a1c2b",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  htmlBody.style.backgroundColor = randomColor;
  console.log("The user is clicked and set the color to" + randomColor);
};

htmlBody.onclick = randomClickFunction;
