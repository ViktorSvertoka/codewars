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
