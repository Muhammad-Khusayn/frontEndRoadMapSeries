const arr1 = [1, 2];
const arr2 = [1];

function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }

  if (b.length === 0) {
    return a;
  }

  let newA = a;
  let newB = b;
  a.forEach((arrItem, Index) => {
    const copyA = newA.slice();
    const copyB = newB.slice();

    if (b.includes(arrItem)) {
      newA = copyA.filter((v) => v !== arrItem);
      newB = copyB.filter((v) => v !== arrItem);
    }
  });

  return newA;
}

console.log(arrayDiff(arr1, arr2));
