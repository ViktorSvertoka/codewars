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

//----------------------------------------------------------------------------------------------------------------

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }

  return [countPositives, sumNegatives];
}

//----------------------------------------------------------------------------------------------------------------

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  let milliseconds = 0;

  milliseconds += h * 60 * 60 * 1000;
  milliseconds += m * 60 * 1000;
  milliseconds += s * 1000;
  return milliseconds;
}

console.log(past(0, 1, 1));

//----------------------------------------------------------------------------------------------------------------

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));

//----------------------------------------------------------------------------------------------------------------

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

function min(list) {
  let minValue = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }

  return minValue;
}

function max(list) {
  let maxValue = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }

  return maxValue;
}

// Примеры использования функций:
console.log(min([4, 6, 2, 1, 9, 63, -134, 566])); // -134
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
console.log(max([-52, 56, 30, 29, -54, 0, -110])); // 56
console.log(min([42, 54, 65, 87, 0])); // 0
console.log(max([42, 54, 65, 87, 0])); // 87
console.log(min([5])); // 5
console.log(max([5])); // 5

//----------------------------------------------------------------------------------------------------------------

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(Kata.getVolumeOfCuboid(2, 3, 4)); // 24
console.log(Kata.getVolumeOfCuboid(1, 1, 1)); // 1
console.log(Kata.getVolumeOfCuboid(5, 5, 5)); // 125

//----------------------------------------------------------------------------------------------------------------

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}

// Примеры использования
console.log(numberToString(123)); // Output: "123"
console.log(numberToString(999)); // Output: "999"
console.log(numberToString(-100)); // Output: "-100"

//-----------------------------------------------------------------------------------------------------------------

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  if (a === b) {
    return a; // Если числа a и b равны, возвращаем любое из них
  }

  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

// Примеры использования
console.log(getSum(1, 0)); // Output: 1
console.log(getSum(1, 2)); // Output: 3
console.log(getSum(0, 1)); // Output: 1
console.log(getSum(1, 1)); // Output: 1
console.log(getSum(-1, 0)); // Output: -1
console.log(getSum(-1, 2)); // Output: 2

//-----------------------------------------------------------------------------------------------------------------

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}

// Примеры использования
console.log(getMiddle('test')); // Output: "es"
console.log(getMiddle('testing')); // Output: "t"
console.log(getMiddle('middle')); // Output: "dd"
console.log(getMiddle('A')); // Output: "A"

//---------------------------------------------------------------------------------------------------------------

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
}

console.log(repeatStr(6, 'I')); // Вывод: "IIIIII"
console.log(repeatStr(5, 'Hello')); // Вывод: "HelloHelloHelloHelloHello"

//-------------------------------------------------------------------------------------------------------------------

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(1, 1)); // Output: "10"
console.log(addBinary(5, 9)); // Output: "1110"

//-------------------------------------------------------------------------------------------------------------------
