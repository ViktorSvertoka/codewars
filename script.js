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
