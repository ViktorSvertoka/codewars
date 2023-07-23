// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
  }
  return result;
};

console.log(countSheep(3));
// Output: "1 sheep...2 sheep...3 sheep..."

console.log(countSheep(5));
// Output: "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."

console.log(countSheep(0));
// Output: ""

//---------------------------------------------------------------------------------------------------------------

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  } else if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'scissors' && p2 === 'paper')
  ) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps('scissors', 'paper')); // Output: "Player 1 won!"
console.log(rps('scissors', 'rock')); // Output: "Player 2 won!"
console.log(rps('paper', 'paper')); // Output: "Draw!"

//---------------------------------------------------------------------------------------------------------------

// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
  return (a && !b) || (!a && b);
}

console.log(xor(false, false)); // Output: false
console.log(xor(true, false)); // Output: true
console.log(xor(false, true)); // Output: true
console.log(xor(true, true)); // Output: false

//---------------------------------------------------------------------------------------------------------------

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]
console.log(reverseSeq(10)); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reverseSeq(1)); // Output: [1]

//---------------------------------------------------------------------------------------------------------------

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === '') {
      // Blank answer, no points deducted
      score += 0;
    } else if (array1[i] === array2[i]) {
      // Correct answer, 4 points awarded
      score += 4;
    } else {
      // Incorrect answer, 1 point deducted
      score -= 1;
    }
  }

  // If the score is negative, return 0
  if (score < 0) {
    return 0;
  }

  return score;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])); // Output: 6
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])); // Output: 7
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])); // Output: 16
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])); // Output: 0

//---------------------------------------------------------------------------------------------------------------

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true)); // Output: "true"
console.log(booleanToString(false)); // Output: "false"

//---------------------------------------------------------------------------------------------------------------

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  return base % factor === 0;
}

console.log(checkForFactor(6, 2)); // Output: true
console.log(checkForFactor(6, 3)); // Output: true
console.log(checkForFactor(7, 2)); // Output: false

//---------------------------------------------------------------------------------------------------------------

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker;

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (currentAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      currentAttacker = fighter2.name;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      currentAttacker = fighter1.name;
    }
  }

  if (fighter1.health <= 0) {
    return fighter2.name;
  } else {
    return fighter1.name;
  }
}

const fighter1 = new Fighter('Lew', 10, 2);
const fighter2 = new Fighter('Harry', 5, 4);
const firstAttacker = 'Lew';

const winner = declareWinner(fighter1, fighter2, firstAttacker);
console.log(winner); // Output: "Lew"

//---------------------------------------------------------------------------------------------------------------

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  let newHealth = health - damage;
  if (newHealth < 0) {
    newHealth = 0;
  }
  return newHealth;
}

let playerHealth = 100;
let damageReceived = 30;
let newPlayerHealth = combat(playerHealth, damageReceived);
console.log(newPlayerHealth); // Output: 70

//---------------------------------------------------------------------------------------------------------------

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

let list1 = [1, 2, 3, 4];
let reversedList1 = reverseList(list1);
console.log(reversedList1); // Output: [4, 3, 2, 1]

let list2 = [9, 2, 0, 7];
let reversedList2 = reverseList(list2);
console.log(reversedList2); // Output: [7, 0, 2, 9]

//---------------------------------------------------------------------------------------------------------------

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function multiplyDigits(num) {
  // Перетворюємо число на рядок і розбиваємо його на масив символів
  const digits = String(num).split('');

  // Перемножуємо всі цифри
  return digits.reduce((acc, digit) => acc * Number(digit), 1);
}

function persistence(num) {
  // Кількість кроків, яку ми зробили для отримання однозначного числа
  let steps = 0;

  // Повторюємо, поки число не стане однозначним
  while (num >= 10) {
    num = multiplyDigits(num);
    steps++;
  }

  return steps;
}

// Приклади
console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0

//---------------------------------------------------------------------------------------------------------------

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  const count = names.length;

  if (count === 0) {
    return 'no one likes this';
  } else if (count === 1) {
    return `${names[0]} likes this`;
  } else if (count === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (count === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
  }
}

console.log(likes([])); // "no one likes this"
console.log(likes(['Peter'])); // "Peter likes this"
console.log(likes(['Jacob', 'Alex'])); // "Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])); // "Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // "Alex, Jacob and 2 others like this"
console.log(likes(['Alice', 'Bob', 'Charlie', 'David', 'Eve'])); // "Alice, Bob and 3 others like this"

//---------------------------------------------------------------------------------------------------------------

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

let isAnagram = function (test, original) {
  const normalizeString = str => str.toLowerCase().split('').sort().join('');

  return normalizeString(test) === normalizeString(original);
};

console.log(isAnagram('foefet', 'toffee')); // true
console.log(isAnagram('Buckethead', 'DeathCubeK')); // true
console.log(isAnagram('Hello', 'World')); // false
console.log(isAnagram('Listen', 'Silent')); // true

//---------------------------------------------------------------------------------------------------------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(getCount('hello')); // 2 (e and o are vowels)
console.log(getCount('world')); // 1 (o is a vowel)
console.log(getCount('programming')); // 3 (o, a, and i are vowels)
console.log(getCount('')); // 0 (empty string)
console.log(getCount('This is a test')); // 4 (i, i, a, and e are vowels)

//---------------------------------------------------------------------------------------------------------------

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // Convert the number to a string to easily manipulate it
  let numStr = n.toString();

  // Check if the number is zero or if it doesn't have any trailing zeros
  if (n === 0 || !numStr.endsWith('0')) {
    return n;
  }

  // Loop through the string from the end and remove trailing zeros
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr.charAt(i) === '0') {
      numStr = numStr.slice(0, -1); // Remove the last character (trailing zero)
    } else {
      break; // Stop when a non-zero digit is found
    }
  }

  // Convert the modified string back to a number and return
  return parseInt(numStr, 10);
}

console.log(noBoringZeros(1450)); // Output: 145
console.log(noBoringZeros(960000)); // Output: 96
console.log(noBoringZeros(1050)); // Output: 105
console.log(noBoringZeros(-1050)); // Output: -105
console.log(noBoringZeros(0)); // Output: 0

//---------------------------------------------------------------------------------------------------------------

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove(string) {
  // Check if the last character of the string is an exclamation mark
  if (string.charAt(string.length - 1) === '!') {
    // If it is, remove it using slice() method
    return string.slice(0, -1);
  } else {
    // If the last character is not an exclamation mark, return the original string
    return string;
  }
}

console.log(remove('Hi!')); // Output: "Hi"
console.log(remove('Hi!!!')); // Output: "Hi!!"
console.log(remove('!Hi')); // Output: "!Hi"
console.log(remove('!Hi!')); // Output: "!Hi"
console.log(remove('Hi! Hi!')); // Output: "Hi! Hi"
console.log(remove('Hi')); // Output: "Hi"

//---------------------------------------------------------------------------------------------------------------

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operation) {
  return operation ? operation(0) : 0;
}
function one(operation) {
  return operation ? operation(1) : 1;
}
function two(operation) {
  return operation ? operation(2) : 2;
}
function three(operation) {
  return operation ? operation(3) : 3;
}
function four(operation) {
  return operation ? operation(4) : 4;
}
function five(operation) {
  return operation ? operation(5) : 5;
}
function six(operation) {
  return operation ? operation(6) : 6;
}
function seven(operation) {
  return operation ? operation(7) : 7;
}
function eight(operation) {
  return operation ? operation(8) : 8;
}
function nine(operation) {
  return operation ? operation(9) : 9;
}

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}
function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}
function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}
function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}

console.log(seven(times(five()))); // Output: 35
console.log(four(plus(nine()))); // Output: 13
console.log(eight(minus(three()))); // Output: 5
console.log(six(dividedBy(two()))); // Output: 3
console.log(eight(dividedBy(three()))); // Output: 2

//---------------------------------------------------------------------------------------------------------------

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  // Find the middle number among the three elements
  const middleNumber = triplet.sort((a, b) => a - b)[1];

  // Return the index of the middle number in the original array
  return triplet.indexOf(middleNumber);
}

console.log(gimme([2, 3, 1])); // Output: 0
console.log(gimme([5, 10, 14])); // Output: 1

//---------------------------------------------------------------------------------------------------------------

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello, World!')); // Output: "Hello, World"
console.log(removeExclamationMarks('No more exclamation marks!!')); // Output: "No more exclamation marks"
console.log(removeExclamationMarks('Wow!!!')); // Output: "Wow"

//---------------------------------------------------------------------------------------------------------------

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string) {
  // Trim leading and trailing spaces
  string = string.trim();

  // Split the string into an array of words using spaces as a delimiter
  const wordsArray = string.split(/\s+/);

  // Reverse the array of words
  const reversedArray = wordsArray.reverse();

  // Join the reversed array back into a string using spaces as a separator
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Test cases
console.log(reverse('Hello World')); // Output: "World Hello"
console.log(reverse('Hi There.')); // Output: "There. Hi"

//---------------------------------------------------------------------------------------------------------------

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  if (typeof x === 'string') {
    return 'Error';
  } else {
    return x * 50 + 6;
  }
}

//---------------------------------------------------------------------------------------------------------------

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(age) {
  if (age < 14) {
    return 'drink toddy';
  } else if (age < 18) {
    return 'drink coke';
  } else if (age < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}

// Test cases
console.log(peopleWithAgeDrink(13)); // Output: "drink toddy"
console.log(peopleWithAgeDrink(17)); // Output: "drink coke"
console.log(peopleWithAgeDrink(18)); // Output: "drink beer"
console.log(peopleWithAgeDrink(20)); // Output: "drink beer"
console.log(peopleWithAgeDrink(30)); // Output: "drink whisky"

//---------------------------------------------------------------------------------------------------------------
