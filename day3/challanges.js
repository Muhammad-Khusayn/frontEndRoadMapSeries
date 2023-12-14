let numberVariable = 0;
numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

// =========== challange 2 ===========

const result = !(100 % 50 < 100 / 50 && 300 + 5 === 305);

console.log(result);

// ========== long version ==========

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// ========== challange 4 ==========

const myObj = {
  prop1: "first value",
  prop2: 20,
};

const myArray = [40, 50, 2];

const result4 = myObj.prop2 === myArray[0] / myArray[2];

console.log(result4);

// ========== challange 5 =========

const myObj5 = {
  nestedObject1: {
    price: 100,
    quantity: 5,
  },
  nestedObject2: {
    price: 150,
    quantity: 2,
  },
};

const myArray5 = [myObj5.nestedObject1, myObj5.nestedObject2];

const result5 =
  myArray5[0].price * myArray5[0].quantity >
  myArray5[1].price * myArray5[1].quantity;

console.log(result5);
