const arr = [2, 2, 2, 2, 2];

function getSum(sm) {
  let sum = 0;
  for (let i = 0; i <= sm.length; i++) {
    sum += sm[i];
  }
  const avarage = sum / sm.length;
  return sum;
}

// console.log(getSum([2, 2, 2, 2])