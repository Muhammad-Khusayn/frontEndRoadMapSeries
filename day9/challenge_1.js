const filterList = [1, 2, "a", "b"];

const filtered = filterList.filter((value) => typeof value === "number");
console.log(filtered);
