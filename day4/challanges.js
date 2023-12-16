const arr = [2, 2, 2, 2, 2];

function getSum(sm) {
  let sum = 0;
  for (let i = 0; i <= sm.length; i++) {
    sum += sm[i];
  }
  const avarage = sum / sm.length;
  return sum;
}

// console.log(getSum([2, 2, 2, 2]));

// switch (win) {
//   case ("rock", "scissors"):
//     console.log("Player 1 won!");
//     break;
//   case ("scissors", "paper"):
//     console.log("Player 1 won!");
//     break;
//   case ("paper", "rock"):
//     console.log("Player 1 won!!");
//     break;
//   case ("scissors", "rock"):
//     console.log("Player 2 won");
//     break;
//   case ("paper", "scissors"):
//     console.log("Player 2 won");
//     break;
//   case ("rock", "paper"):
//     console.log("Player 2 won");
//     break;
//   case ("rock", "rock"):
//     console.log("Draw!");
//     break;
//   case ("scissors", "scissors"):
//     console.log("Draw!");
//     break;
//   case ("paper", "paper"):
//     console.log("Draw!");
//     break;
//   default:
//     console.log("no color was found");
// }

const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!";
  }

  if (p1 == "scissors" && p2 == "paper") {
    return "Player 1 won!";
  } else if (p1 == "rock" && p2 == "scissors") {
    return "Player 1 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
