const friend = "BRUTUS";
const shiftValue = 3;

// Step 1:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2:
let secretName = "";

for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const alphabetIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const shiftedIndex = (alphabetIndex + shiftValue) % alphabet.length;
    secretName += alphabet[shiftedIndex].toUpperCase();
}

// Question 1:
// Using a loop provides cleaner code with less repetition to read through.

// Question 2:
// (% alphabet.length) gets the remainder of the equation if the shiftedIndex goes beyond the letter "z" in alphabet. This allows the to code to wrap back around to "a".

