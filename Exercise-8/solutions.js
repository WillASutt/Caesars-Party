const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1:

function encryptLetter(letter, shiftV) {
    let lowerLetter = letter.toLowerCase();
    let letterIndex = alphabet.indexOf(lowerLetter);
    let shiftLetter = (letterIndex + shiftV) % alphabet.length;
    return alphabet[shiftLetter];
}

// Step 2:

function encryptMessage(word, shiftV) {
    let secretWord = "";
    for (i = 0; i < word.length; i++) {
        secretWord += encryptLetter(word[i], shiftV);
    }
    return secretWord;
}

// Step 3:

function decryptLetter(encryptedLetter, shiftV) {
    let encryptLetterIdx = alphabet.indexOf(encryptedLetter.toLowerCase());
    let newIndex = (encryptLetterIdx - shiftV + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

// Step 4:

function decryptMessage(word, shiftV) {
    let decryptWord = "";
    for (i = 0; i < word.length; i++) {
        decryptWord += decryptLetter(word[i], shiftV);
    }
    return decryptWord;
}

// Question 
// Yes, if Caesar encrypts the word "BRUTUS" with the encryptMessage function and then decrypts the word using the decryptMessage function he will get the word "brutus" back. The decryptMessage function is an exact inverse of the encryptMessage function.