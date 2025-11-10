// FizzBuzz:

// n should be less than 100 and greater than 0. If not print "Error" and stop exectution.
// for each number up to n:
//     if divisible by 3: Print Fizz
//     if divisible by 5: Print Buzz
//     if divisible by 3 and 5: Print FizzBuzz
//     if not divisible by 3 or 5: Print Number
// n = 0 :Error
// n = 100 :Error
// n = 15 : 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

function FizzBuzz(n) {
    if (n < 1 || n >= 100 || !Number.isInteger(n)) {
        console.log("Error");
        return;
    }
    for (let i = 1; i <= n; i++) {
        const divisible3 = i % 3;
        const divisible5 = i % 5;
        if (divisible3 === 0 && divisible5 === 0) {
            console.log("FizzBuzz");
        }
        else if (divisible3 === 0) {
            console.log("Fizz");
        }
        else if (divisible5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}



// Letter Count:

// word should be a string and word should only contain alphabetical characters. If not print "Error"
// create object called letterCounter to store letter counts
// for each letter in the word:
//     return lower case letter
//     return number of times it occurs in the word

// word = "aahgk8" Error
// word = asdlgh Error
// word = "AabB" return {a : 2, b : 2}

function letterOccurrence(word) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (typeof word !== "string") {
        console.log("Error");
        return;
    }
    for (let letter of word) {
        if (!alphabet.includes(letter.toLowerCase())) {
            console.log("Error");
            return;
        }
    }
    let letterCounter = {};
    for (let letter of word) {
        let lowerLetter = letter.toLowerCase();
        if (letterCounter[lowerLetter] !== undefined) {
            letterCounter[lowerLetter]++;
        }
        else {
            letterCounter[lowerLetter] = 1;
        }
    }
    return letterCounter;
}
