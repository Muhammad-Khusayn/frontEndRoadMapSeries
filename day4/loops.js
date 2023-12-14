// ========= Basic for loop ========

for (let i = 0; i < 100; i++) {
  // console.log(i);
}

// ======== Example =========
const blogPosts = [
  {
    title: "What is JavaScript?",
    author: "Zach Gollwitzer",
    publishDate: "December 14, 2023",
    content: "some post content here",
  },
  {
    title: "How do arrays work?",
    author: "Leo Messi",
    publishDate: "December 15, 2023",
    content: "some post content here",
  },

  {
    title: "How Long Does It Take to Learn Coding?",
    author: "Cristiano Ronaldo",
    publishDate: "December 16, 2023",
    content: "some content here",
  },
];

for (let i = 0; i < blogPosts.length; i++) {
  const postTitles = blogPosts[i].title;
  const postAuthors = blogPosts[i].author;
  const postDates = blogPosts[i].publishDate;
  const postContent = blogPosts[i].content;

  console.log(postTitles);
  console.log(postAuthors);
  console.log(postDates);
  console.log(postContent);
}

const arr = [
  "messi",
  "ronaldo",
  "lewandowski",
  "suarez",
  "neymar",
  "xavi",
  "pedri",
  "gavi",
  "de jong",
];

for (let i = 0; i < arr.length; i++) {
  const arrNames = arr[i];
  console.log(arrNames);
}

// ======= for-loop with conditionals ===========

const array = [
  "majsndkjas",
  "sakndland",
  "dksjfdgn",
  "asdjajbdja",
  20,
  30,
  40,
  50,
];

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    console.log(array[i]);
  }
}
