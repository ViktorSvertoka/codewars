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
