const friend = "BRUTUS";
const shiftValue = 3;

// Step 1:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2:
const friendFirstLetter = friend[0];
const index = alphabet.indexOf(friendFirstLetter.toLowerCase());

//Question 1:
// The result is 1 instead of 2 because the first index of a string is 0.

// Step 3:
let indexTwo = index + shiftValue;
let encryptFirstLetter = alphabet[indexTwo];

//Question 2:
// The modulus operator, %, would help wrap around the alphabet. The modulus operator finds the remainder if the equation is looking for an index beyond the index of the variable.

// Step 4:
const alphabetLength = alphabet.length;

// Step 5:
let newIndex = (index + shiftValue) % alphabetLength;
let newFirstLetter = alphabet[newIndex];

// Step 6:
let encryptMessage = "EUXWXV";
let teaser = encryptMessage.slice(0,3);


