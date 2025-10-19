//Step 1:
let randomDecimal = Math.random(0,1);

//Step 2:
const range = (33 - 3) + 1;

//Question 1:
// We add 1 to include both endpoints of the range. Otherwise the range would be between 3 and 32 instead of 33.

// Step 3:
let randomRange = randomDecimal * range;

//Question 2:
// Multiplying randomeDecimal by range gives a desired range by, essentially, using the Math.random method on the new variable and scaling the decimal to fall within 0 to 31.

// Step 4:
let randomInt = Math.floor(randomRange);

//Question 3:
// Math.floor ensures that we round down instead of up. Rounding up could exceed the desired range.

// Step 5:
let shiftValue = randomInt + 3;

//Question 4:
// Adding 3 to randomInt ensures that the final shiftValue is not less than 3, or more than 33, because the randomInt is being calculated between the range of 0 and 31.



