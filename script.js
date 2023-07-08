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
