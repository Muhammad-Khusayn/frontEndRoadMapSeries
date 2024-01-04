// try catch block
try {
  var num = 20;
  num.toUpperCase();
} catch (err) {
  console.log(err instanceof TypeError);
  console.log(err.message);
}
