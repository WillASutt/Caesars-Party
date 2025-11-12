const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 1. ENCRYPTION ALGORITHM:
// I created two separate functions to improve code readability.

function encryptLetter(letter, shift) {
    if (!alphabet.includes(letter.toLowerCase())) {
        return letter;
        // this passes characters that are not in the alphabet into the string (such as punctuation).
    }
    else if (letter === letter.toUpperCase()) {
        const lowLetter = letter.toLowerCase();
        const letterIdx = alphabet.indexOf(lowLetter);
        const shiftLetter = (letterIdx + shift) % alphabet.length;
        return alphabet[shiftLetter].toUpperCase();
        // I included this to allow originally uppercase letters to be shifted to an uppercase letter.
    }
    else {
        const lowLetter = letter.toLowerCase();
        const letterIdx = alphabet.indexOf(lowLetter);
        const shiftLetter = (letterIdx + shift) % alphabet.length;
        return alphabet[shiftLetter];
        // finally this shifts a character that isn't uppercase or punctuation.
    }
}

function addRandomLetter(message) {
    let randomMessage = "";
    for (let i = 0; i < message.length; i += 2) {
        let messageBreak = message.slice(i , i + 2);
        randomMessage += messageBreak;
        // splices each pair of characters within the message and adds to new message.

        if (i + 2 < message.length) {
            let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            randomMessage += randomLetter;
        }
        // generates a random letter in the alphabet to insert.
        // inserts the random letter into the new message making sure not to add a random letter to the end of the message.
    }
    return randomMessage;
}

function encrypt(message, shift) {
    let encryptedMessage = "";
    for (i = 0; i < message.length; i++) {
        encryptedMessage += encryptLetter(message[i], shift);
        // called the encryptLetter function to encrypt each letter of the message.
    }
    return addRandomLetter(encryptedMessage);
    // called the addRandomLetter function.
}

encrypt("Hello Brutus, meet me at the high gardens.", 42)

// 2. DECRYPTION ALGORITHM:
// I created two separate functions to improve code readability.

function decryptLetter(letter, shift) {
    let newShift = shift % alphabet.length;
    // created a new shift variable to account for the negative shift value. If the shift value of 42 is subtracted from the letter index it will result in a negative integer which will return undefined.

    if (!alphabet.includes(letter.toLowerCase())) {
        return letter;
    }
    else if (letter === letter.toUpperCase()) {
        const lowLetter = letter.toLowerCase();
        const letterIdx = alphabet.indexOf(lowLetter);
        const shiftLetter = (letterIdx - newShift + alphabet.length) % alphabet.length;
        return alphabet[shiftLetter].toUpperCase();
    }
    else {
        const lowLetter = letter.toLowerCase();
        const letterIdx = alphabet.indexOf(lowLetter);
        const shiftLetter = (letterIdx - newShift + alphabet.length) % alphabet.length;
        return alphabet[shiftLetter];
    }
}
// this is an exact inverse of the encryptLetter function.

function removeRandomLetter(message) {
    let removeLetterMessage = "";
    for (let i = 0; i < message.length; i += 3) {
        removeLetterMessage += message.slice(i, i + 2);
        // slices each pair of characters in the message from the previously added random letters, and concatenates into the new message.
    }
    return removeLetterMessage;
}

function decrypt(message, shift) {
    let decryptedMessage = "";
    let newMessage = removeRandomLetter(message);
    // calls the removeRandomLetter function
    // removes the random letters from the message before decrypting the original message.
    for (let i = 0; i < newMessage.length; i++) {
        decryptedMessage += decryptLetter(newMessage[i], shift);
        // calls the decryptLetter function for each index of the message.
    }
    return decryptedMessage;
}

// 3. DECRYPTING THE SECRET MESSAGE:

decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42)

//returns "Seek the midnight shadow of Romulus and Remus. There, whisper the word 'Aurelius' to the winds. The first to unveil it in our Slack channel earns the key to the next quest."

// 5. I used ChatGPT to help with the addRandomLetter and removeRandomLetter functions. I also referred to ChatGPT to get an understanding of how to handle the negative shift value when decrypting letters.
