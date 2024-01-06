function list(names) {
  if (names.length > 1) {
    let str = names.map((obj) => obj.name);
    let last = str.pop();
    let readyArr = str + " &" + " " + last;
    let spl = readyArr.split(",");
    return spl.join(", ");
  } else {
    let spl1 = names.map((obj) => obj.name);
    return spl1.join("");
  }
}
