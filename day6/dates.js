const now = new Date();

console.log(now);

// EXAMPLE #1
// Inputs as arguments
// Date(year, month, day, hour, minute, second, millisecond)
// NOTE the month is 0-indexed
new Date(2020, 11, 2, 7, 10);
// EXAMPLE #2
// Inputs as varius strings
// this works with pretty much anything you can think of
new Date("Jan 20 2020");
new Date("January 20 2020");
new Date("Jan-20-2020");
new Date("Jan 20 2020 02:10:20");
// EXAMPLE #3
// input of milliseconds
new Date(102039209);
// EXAMPLE #4
// Inputs as ISO 8601
new Date("2020 - 01-20T0000Z");
// Example #5
// Inputs with timezone specifications
new Date("Jan 2020 20 02:20:10 -10:00");
new Date("Jan 2020 20 02:20:10 -1000");
new Date("Jan 2020 20 02:20:10 (EDT)");
//EXAMPLE #6
// The current moment, specified in the user`s local timezone
new Date(Date.now());
