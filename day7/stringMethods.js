// ================ Methods =============
// replaceAll. toUpperCase, substring, trim, match

const myString = "My Dog jumped on the bed. My dog is a bad Dog";

const newString = myString.replaceAll("Dog", "Cat");
console.log(newString);

// Since the replaceAll method is case sensetive it only changed Dog with capital letter

// to target letters or words you need to change you can use regExpressions

const correctString = myString.replaceAll(/[Dd]{1}og/g, "cat");
// [Dd] - targets given letters, {1} - makes sure the method matches on of the given letters not both of them {1}og - the rest of the word /g -global flag
console.log(correctString);

// ============= toUpper ===========

const lowerString = "Normal string";
const upperString = lowerString.toLocaleUpperCase();
console.log(upperString);

// ============= substring() =========
// substring() method can cut words in given indexes
const subS = "Some string";
const newSubS = subS[0].toUpperCase() + subS.substring(1, subS.length);
console.log(newSubS);

// ============ trim() ==========

const externalData = [
  {
    title: "     The Goat       ",
    author: "    Bordo Qutaqov     ",
  },
  {
    title: "     Who is Messi       ",
    author: "    Lor Qulagov     ",
  },
  {
    title: "     He did it again       ",
    author: "    Parpar Zalupa     ",
  },
];

for (let i = 0; i < externalData.length; i++) {
  const currentTitle = externalData[i].title;
  const currentAuthor = externalData[i].author;

  externalData[i].title = currentTitle.trim();
  externalData[i].author = currentAuthor.trim();
}

console.log(externalData);
