function persistence(num) {
  if (num < 10) {
    return 0;
  }

  const str = num.toString();
  const arr = str.split("");
  const product = arr.reduce((acc, num) => (acc *= num));

  if (product >= 10) {
    return 1 + persistence(product);
  } else {
    return 1;
  }
}
