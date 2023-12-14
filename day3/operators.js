// Strings 2 ways of declaring strings:

const myString1 = "Hello World";

const myString2 = "Hello World";

// Numbers

const myNumber = 20;

// Boolean

const myBoolean = true;

// Arrays

const myArray = ["messi", "is", "the", "best"];

// Objects

const myObject = {
  property1: "Messi",
  property2: "Suarez",
  property3: "Neymar",
};
// Access the object properties:

myObject.property1;

myObject["property1"];

/* Operator types

1. Arithmetic:

+ - * / % ** ++ --

% is a modulus sign which find remainder after devision

++, -- increment and decrement signs

Remember you cannot use incrementation and decrementation with cons vaiable instead us let.

2. Assigment operators

= += -= *= /=
You dont really need other assignment operators then = even if can use them tray not to. Write longer form of the code

EX:

let messi = 10

messi += 5

15

3. Comparison operators

== === != !== < > <= >=

=== value and type comparison

!= is a not equal sign

4. Logical operators

&& || !

&& means and both sides need to be true 

|| at least one side should be true

! means not (you may reverse any expression which is true)
*/

// case of use

const isLoggedIn = true;

const hasPermission = false;

const canPerformAction = isLoggedIn && hasPermission;

// This way you may have an abilty to either authorise the user or not
