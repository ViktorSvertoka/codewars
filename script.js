// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  string = string.toLowerCase();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letterFound = Array(26).fill(false);

  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    if (/[a-z]/.test(char)) {
      const index = alphabet.indexOf(char);
      letterFound[index] = true;
    }
  }

  return letterFound.every(found => found);
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello, World!'));

//---------------------------------------------------------------------------------------------------------------

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let result = '';

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (/[A-Za-z]/.test(char)) {
      let isUpperCase = char === char.toUpperCase();

      let charCode = char.charCodeAt(0);

      if (isUpperCase) {
        charCode = ((charCode - 65 + 13) % 26) + 65;
      } else {
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }

      char = String.fromCharCode(charCode);
    }

    result += char;
  }

  return result;
}

const encryptedMessage = rot13('Hello, World!');

console.log(encryptedMessage);

//---------------------------------------------------------------------------------------------------------------
