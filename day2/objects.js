// Basic object

const myObject = { prop1: 10, prop2: 20 };

// this is how you retrive value from an object

console.log(myObject.prop1);

// OR there is another way

console.log(myObject["prop1"]);

// Nested object

const nestedObject = {
  layer1: {
    layer2: {
      layer3: {
        target: "Messi",
      },
    },
  },
};

// this is how you retrive value from nested array

console.log(nestedObject.layer1.layer2.layer3.target);
