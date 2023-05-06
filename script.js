// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      throw new Error(`Invalid operation: ${operation}`);
  }
}

console.log(basicOp('+', 4, 7)); // 11
console.log(basicOp('-', 15, 18)); // -3
console.log(basicOp('*', 5, 5)); // 25
console.log(basicOp('/', 49, 7)); // 7

//----------------------------------------------------------------------------------------------------------

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  const liters = time * 0.5;
  const roundedLiters = Math.floor(liters);
  return roundedLiters;
}

//----------------------------------------------------------------------------------------------------------

// Make a simple function called greet that returns the most-famous "hello world!".

function greet() {
  return 'hello world!';
}

const teamLead = [
  'Viktor Svertoka',
  'Yevhenii Lukashov',
  'Dmytro Samus',
  'Vitalii Bashchenko',
  'Volodymyr Zhyvun',
  'Mariia Ivanova',
  'Sergiy Yevchihen',
  'Nikita Slabushevskiy',
  'Ihor Kulinskyi',
  'Kirill Litovchenko',
];

teamLead.sort();

console.log(teamLead);

//---------------------------------------------------------------------------------------------------------------

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -4, -7, -12]));
