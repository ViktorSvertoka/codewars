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

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

const number = function (busStops) {
  let totalPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    const [getOn, getOff] = busStops[i];
    totalPeople += getOn - getOff;
  }

  return totalPeople;
};

console.log(
  number([
    [3, 0],
    [4, 1],
    [10, 2],
    [2, 3],
  ]),
); // Output: 11
console.log(
  number([
    [5, 0],
    [3, 2],
    [2, 1],
  ]),
); // Output: 7
console.log(
  number([
    [0, 0],
    [0, 0],
    [0, 0],
  ]),
); // Output: 0

//-------------------------------------------------------------------------------------------------------------------

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3, 4, 5], 3)); // Output: true
console.log(check(['apple', 'banana', 'orange'], 'pear')); // Output: false
console.log(check([true, false, true], false)); // Output: true

//-------------------------------------------------------------------------------------------------------------------

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}

console.log(fakeBin('0123456789')); // Output: '0000011111'
console.log(fakeBin('123456789')); // Output: '0000011111'
console.log(fakeBin('9876543210')); // Output: '1111100000'

//-------------------------------------------------------------------------------------------------------------------

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('This is an example!')); // Output: "sihT si na !elpmaxe"
console.log(reverseWords('double  spaces')); // Output: "elbuod  secaps"
console.log(reverseWords('Hello World')); // Output: "olleH dlroW"

//-------------------------------------------------------------------------------------------------------------------

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
}

console.log(descendingOrder(42145)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321

//--------------------------------------------------------------------------------------------------------------------

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

// Example usage
const arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const sheepCount = countSheeps(arrayOfSheep);
console.log(sheepCount); // Output: 17

//---------------------------------------------------------------------------------------------------------------

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Testing the function
console.log(makeNegative(1)); // Output: -1
console.log(makeNegative(-5)); // Output: -5
console.log(makeNegative(0)); // Output: 0
console.log(makeNegative(0.12)); // Output: -0.12

//---------------------------------------------------------------------------------------------------------------

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// Testing the function
console.log(simpleMultiplication(2)); // Output: 16 (even number, multiplied by 8)
console.log(simpleMultiplication(3)); // Output: 27 (odd number, multiplied by 9)
console.log(simpleMultiplication(0)); // Output: 0 (even number, multiplied by 8)
console.log(simpleMultiplication(-4)); // Output: -32 (even number, multiplied by 8)
console.log(simpleMultiplication(-7)); // Output: -63 (odd number, multiplied by 9)

//---------------------------------------------------------------------------------------------------------------

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split('').reverse().join('');
}

// Testing the function
console.log(solution('world')); // Output: 'dlrow'
console.log(solution('word')); // Output: 'drow'

//---------------------------------------------------------------------------------------------------------------

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

//---------------------------------------------------------------------------------------------------------------

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

//---------------------------------------------------------------------------------------------------------------

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(' ');
}

console.log(stringToArray('Robin Singh')); // Output: ["Robin", "Singh"]
console.log(stringToArray('I love arrays they are my favorite')); // Output: ["I", "love", "arrays", "they", "are", "my", "favorite"]

//---------------------------------------------------------------------------------------------------------------

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
  'use strict';
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

//---------------------------------------------------------------------------------------------------------------

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Calculate the sum of all class points, including your own points
  const totalPoints =
    classPoints.reduce((sum, points) => sum + points, 0) + yourPoints;

  // Calculate the average by dividing the total points by the number of students (including yourself)
  const average = totalPoints / (classPoints.length + 1);

  // Compare your score with the average and return the result
  return yourPoints > average;
}

const classPoints = [80, 90, 70, 85];
const yourPoints = 95;

console.log(betterThanAverage(classPoints, yourPoints)); // Output: true

//---------------------------------------------------------------------------------------------------------------

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;

  // Loop until the population reaches or exceeds the target population
  while (population < p) {
    population += population * (percent / 100) + aug;
    years++;
  }

  return years;
}

console.log(nbYear(1000, 2, 50, 1200)); // Output: 3
console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10

//---------------------------------------------------------------------------------------------------------------

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons) {
  var totalBulletsNeeded = dragons * 2;
  if (bullets >= totalBulletsNeeded) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5)); // Output: true (hero will survive)
console.log(hero(6, 4)); // Output: false (hero will not survive)

//---------------------------------------------------------------------------------------------------------------

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    // It's a square
    return l * l; // Return the area
  } else {
    // It's a rectangle
    return 2 * (l + w); // Return the perimeter
  }
};

//---------------------------------------------------------------------------------------------------------------

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(5, 10, 2)); // Output: 17

//---------------------------------------------------------------------------------------------------------------

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  // Create an array to store the parts of the resulting string
  const result = [];

  // Loop through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // Repeat the current character i+1 times and convert it to lowercase
    const part = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);

    // Add the part to the result array
    result.push(part);
  }

  // Join the parts with "-" as the separator and return the resulting string
  return result.join('-');
}

console.log(accum('abcd')); // Output: "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // Output: "C-Ww-Aaa-Tttt"

//---------------------------------------------------------------------------------------------------------------

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

//---------------------------------------------------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let count = {};

  // Count the occurrences of each number in the array
  for (let i = 0; i < A.length; i++) {
    if (count[A[i]] === undefined) {
      count[A[i]] = 1;
    } else {
      count[A[i]]++;
    }
  }

  // Find the number with an odd count
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return parseInt(num);
    }
  }

  return 0; // Default return if no number is found (should not happen based on the problem description)
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4

//---------------------------------------------------------------------------------------------------------------

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//---------------------------------------------------------------------------------------------------------------

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const normalizedText = text.toLowerCase();
  let result = '';

  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      // Add 1 to convert from 0-based index to 1-based position
      result += index + 1 + ' ';
    }
  }

  // Remove trailing whitespace and return the result
  return result.trim();
}

//---------------------------------------------------------------------------------------------------------------

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  // Check if the walk duration is exactly ten minutes
  if (walk.length !== 10) {
    return false;
  }

  // Count the number of steps in each direction
  let count = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let direction of walk) {
    count[direction]++;
  }

  // Check if the north and south steps cancel each other out
  if (count['n'] !== count['s']) {
    return false;
  }

  // Check if the east and west steps cancel each other out
  if (count['e'] !== count['w']) {
    return false;
  }

  // If all conditions are met, the walk is valid
  return true;
}

console.log(isValidWalk(['n', 's', 'w', 'e'])); // false
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'e', 'w'])); // true
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])); // true
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 'w'])); // false

//---------------------------------------------------------------------------------------------------------------

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter(name => name.length === 4);
}

// Example usage:
const names = ['Ryan', 'Kieran', 'Jason', 'Yous'];
const filteredNames = friend(names);
console.log(filteredNames);

//---------------------------------------------------------------------------------------------------------------

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  const reversedArr = arr.reverse();
  let result = 0;

  for (let i = 0; i < reversedArr.length; i++) {
    result += reversedArr[i] * Math.pow(2, i);
  }

  return result;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Output: 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // Output: 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // Output: 9
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Output: 2
console.log(binaryArrayToNumber([0, 1, 1, 0])); // Output: 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // Output: 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // Output: 11

//---------------------------------------------------------------------------------------------------------------

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let charCount = {};
  let count = 0;

  // Convert the input text to lowercase for case-insensitive comparison
  let lowercaseText = text.toLowerCase();

  // Iterate over each character in the lowercase text
  for (let i = 0; i < lowercaseText.length; i++) {
    let char = lowercaseText[i];

    // If the character is a letter or digit
    if (/[a-z0-9]/.test(char)) {
      // If the character is not in the charCount object, initialize its count to 0
      if (!charCount[char]) {
        charCount[char] = 0;
      }

      // Increment the count of the character and check if it's the second occurrence
      if (charCount[char] === 1) {
        count++;
      }

      // Increment the count of the character
      charCount[char]++;
    }
  }

  return count;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
console.log(duplicateCount('aA11')); // 2
console.log(duplicateCount('ABBA')); // 2

//---------------------------------------------------------------------------------------------------------------

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  // Convert km/h to cm/s by multiplying by 100,000 and dividing by 3600
  const speedCmPerSec = Math.floor((s * 100000) / 3600);
  return speedCmPerSec;
}

console.log(cockroachSpeed(1.08)); // Output: 30

//---------------------------------------------------------------------------------------------------------------

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let total = d * 40; // Base cost for renting the car

  if (d >= 7) {
    total -= 50; // $50 discount for renting 7 or more days
  } else if (d >= 3) {
    total -= 20; // $20 discount for renting 3 or more days
  }

  return total;
}

console.log(rentalCarCost(2)); // Output: 80 (no discount)
console.log(rentalCarCost(4)); // Output: 160 ($20 discount)
console.log(rentalCarCost(8)); // Output: 310 ($50 discount)

//---------------------------------------------------------------------------------------------------------------

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  let tower = [];
  let width = 2 * nFloors - 1;

  for (let i = 0; i < nFloors; i++) {
    let spaces = ' '.repeat(nFloors - i - 1);
    let blocks = '*'.repeat(2 * i + 1);
    let floor = spaces + blocks + spaces;
    tower.push(floor);
  }

  return tower;
}

let tower3Floors = towerBuilder(3);
console.log(tower3Floors);

let tower6Floors = towerBuilder(6);
console.log(tower6Floors);

//---------------------------------------------------------------------------------------------------------------

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter(function (_, index) {
    return index % 2 === 0;
  });
}

let array = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove'];
let result = removeEveryOther(array);
console.log(result);

['Keep', 'Keep', 'Keep'];

//---------------------------------------------------------------------------------------------------------------

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let oddArray = array.filter(function (num) {
    return num % 2 !== 0;
  });

  oddArray.sort(function (a, b) {
    return a - b;
  });

  let sortedArray = [];
  let oddIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sortedArray.push(oddArray[oddIndex]);
      oddIndex++;
    } else {
      sortedArray.push(array[i]);
    }
  }

  return sortedArray;
}

let array1 = [7, 1];
let result1 = sortArray(array1);
console.log(result1);

let array2 = [5, 8, 6, 3, 4];
let result2 = sortArray(array2);
console.log(result2);

let array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let result3 = sortArray(array3);
console.log(result3);

[1, 7][(3, 8, 6, 5, 4)][(1, 8, 3, 6, 5, 4, 7, 2, 9, 0)];

//---------------------------------------------------------------------------------------------------------------

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    const result = games[i].split(':');
    const x = parseInt(result[0]);
    const y = parseInt(result[1]);

    if (x > y) {
      totalPoints += 3; // Win
    } else if (x === y) {
      totalPoints += 1; // Tie
    }
    // No points are awarded for a loss (x < y)
  }

  return totalPoints;
}

const games = [
  '3:1',
  '2:2',
  '0:1',
  '4:0',
  '1:2',
  '2:1',
  '1:0',
  '0:0',
  '3:2',
  '2:0',
];
console.log(points(games)); // Output: 16

//---------------------------------------------------------------------------------------------------------------

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  const count = new Map();
  const result = [];

  for (const num of arr) {
    if (!count.has(num)) {
      count.set(num, 1);
      result.push(num);
    } else if (count.get(num) < n) {
      count.set(num, count.get(num) + 1);
      result.push(num);
    }
  }

  return result;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
// Output: [1, 2, 3, 1, 2]

console.log(deleteNth([20, 37, 20, 21], 1));
// Output: [20, 37, 21]

//---------------------------------------------------------------------------------------------------------------

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
  const index = haystack.indexOf('needle');
  return 'found the needle at position ' + index;
}

const haystack = [
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk',
];
console.log(findNeedle(haystack));

//---------------------------------------------------------------------------------------------------------------

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  const counts = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  for (const [num, count] of counts) {
    if (count === 1) {
      return num;
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Output: 0.55

//---------------------------------------------------------------------------------------------------------------

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}

console.log(strCount('Hello', 'o')); // Output: 1
console.log(strCount('Hello', 'l')); // Output: 2
console.log(strCount('', 'z')); // Output: 0

//---------------------------------------------------------------------------------------------------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));

//---------------------------------------------------------------------------------------------------------------

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += 2; // Increment count for both divisors i and n/i
    }
  }

  // If n is a perfect square, decrement count by 1 to avoid double-counting the square root
  if (Math.sqrt(n) % 1 === 0) {
    count--;
  }

  return count;
}

console.log(getDivisorsCnt(4)); // Output: 3
console.log(getDivisorsCnt(5)); // Output: 2
console.log(getDivisorsCnt(12)); // Output: 6
console.log(getDivisorsCnt(30)); // Output: 8

//---------------------------------------------------------------------------------------------------------------

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr.indexOf(lowerCaseStr[i]) !== i) {
      return false;
    }
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics')); // Output: true
console.log(isIsogram('moose')); // Output: false
console.log(isIsogram('aba')); // Output: false

//---------------------------------------------------------------------------------------------------------------

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  let digits = Array.from(String(n), Number); // Convert n to an array of digits
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i); // Calculate the sum of digits raised to the successive powers of p
  }

  if (sum % n === 0) {
    return sum / n; // If sum is divisible by n, return the quotient as k
  } else {
    return -1; // Otherwise, return -1
  }
}

console.log(digPow(89, 1)); // Output: 1
console.log(digPow(695, 2)); // Output: 2
console.log(digPow(46288, 3)); // Output: 51

//---------------------------------------------------------------------------------------------------------------

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  return parseInt(inputString); // Parse the input string to an integer and return it
}

console.log(getAge('1 year old')); // Output: 1
console.log(getAge('5 years old')); // Output: 5

//---------------------------------------------------------------------------------------------------------------

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = 0;
  let countO = 0;

  for (let char of str) {
    if (char.toLowerCase() === 'x') {
      countX++;
    } else if (char.toLowerCase() === 'o') {
      countO++;
    }
  }

  return countX === countO; // Return true if the counts of 'x' and 'o' are equal, otherwise return false
}

console.log(XO('ooxx')); // Output: true
console.log(XO('xooxx')); // Output: false
console.log(XO('ooxXm')); // Output: true
console.log(XO('zpzpzpp')); // Output: true
console.log(XO('zzoo')); // Output: false

//---------------------------------------------------------------------------------------------------------------

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet('John'));

//---------------------------------------------------------------------------------------------------------------

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  const total = s.length;
  let errorCount = 0;

  for (let i = 0; i < total; i++) {
    const currentChar = s.charAt(i);
    if (currentChar < 'a' || currentChar > 'm') {
      errorCount++;
    }
  }

  return `${errorCount}/${total}`;
}

console.log(printerError('aaabbbbhaijjjm')); // Output: 0/14
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')); // Output: 8/22

//---------------------------------------------------------------------------------------------------------------

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];
    if (isValidSmiley(face)) {
      count++;
    }
  }

  return count;
}

function isValidSmiley(face) {
  const validEyes = [':', ';'];
  const validNoses = ['-', '~'];
  const validMouths = [')', 'D'];

  if (face.length === 2) {
    const eyes = face[0];
    const mouth = face[1];
    return validEyes.includes(eyes) && validMouths.includes(mouth);
  } else if (face.length === 3) {
    const eyes = face[0];
    const nose = face[1];
    const mouth = face[2];
    return (
      validEyes.includes(eyes) &&
      validNoses.includes(nose) &&
      validMouths.includes(mouth)
    );
  }

  return false;
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])); // Output: 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // Output: 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // Output: 1

//---------------------------------------------------------------------------------------------------------------

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
  return parseInt(str);
};

//---------------------------------------------------------------------------------------------------------------

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

function century(year) {
  // Calculate the century by dividing the year by 100 and rounding up
  const century = Math.ceil(year / 100);

  return century;
}

//---------------------------------------------------------------------------------------------------------------

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}

//---------------------------------------------------------------------------------------------------------------

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
};

console.log('hello world'.toAlternatingCase()); // Output: "HELLO WORLD"
console.log('HELLO WORLD'.toAlternatingCase()); // Output: "hello world"
console.log('hello WORLD'.toAlternatingCase()); // Output: "HELLO world"
console.log('HeLLo WoRLD'.toAlternatingCase()); // Output: "hEllO wOrld"
console.log('12345'.toAlternatingCase()); // Output: "12345"
console.log('1a2b3c4d5e'.toAlternatingCase()); // Output: "1A2B3C4D5E"
console.log('String.prototype.toAlternatingCase'.toAlternatingCase()); // Output: "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//---------------------------------------------------------------------------------------------------------------

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

console.log(finalGrade(100, 12)); // Output: 100
console.log(finalGrade(99, 0)); // Output: 100
console.log(finalGrade(10, 15)); // Output: 100
console.log(finalGrade(85, 5)); // Output: 90
console.log(finalGrade(55, 3)); // Output: 75
console.log(finalGrade(55, 0)); // Output: 0
console.log(finalGrade(20, 2)); // Output: 0

//---------------------------------------------------------------------------------------------------------------

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element));
}

console.log(arrayDiff([1, 2], [1])); // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]
console.log(arrayDiff([1, 2, 3, 4, 5], [6, 7, 8])); // Output: [1, 2, 3, 4, 5]
console.log(arrayDiff([], [1, 2, 3])); // Output: []
console.log(arrayDiff([1, 2, 3], [])); // Output: [1, 2, 3]

//---------------------------------------------------------------------------------------------------------------

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let multiples = [];

  for (let i = 1; i <= n; i++) {
    multiples.push(x * i);
  }

  return multiples;
}

//---------------------------------------------------------------------------------------------------------------

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

//---------------------------------------------------------------------------------------------------------------

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Invalid number';
  }
}

//---------------------------------------------------------------------------------------------------------------

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (currentChar === currentChar.toUpperCase()) {
      result += ' ';
    }

    result += currentChar;
  }

  return result;
}

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

//---------------------------------------------------------------------------------------------------------------

// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

function isPalindrome(x) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedString = x.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare characters from beginning and end of the string
  for (let i = 0; i < sanitizedString.length / 2; i++) {
    if (
      sanitizedString[i] !== sanitizedString[sanitizedString.length - 1 - i]
    ) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

//---------------------------------------------------------------------------------------------------------------

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const maxDistance = mpg * fuelLeft;
  return maxDistance >= distanceToPump;
};

//---------------------------------------------------------------------------------------------------------------

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
  return 'Hello, ' + name;
}

console.log(sayHello('Mr. Spock'));

//---------------------------------------------------------------------------------------------------------------

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move(position, roll) {
  return position + roll * 2;
}

//---------------------------------------------------------------------------------------------------------------

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let result = 1;

  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }

  return result;
}

const arraySum = [1, 2, 3, 4];
const product = grow(arraySum);
console.log(product); // Output: 24

//---------------------------------------------------------------------------------------------------------------

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

let quote = "How can mirrors be real if our eyes aren't real";
let jadenCasedQuote = quote.toJadenCase();
console.log(jadenCasedQuote);

//---------------------------------------------------------------------------------------------------------------

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

console.log(areYouPlayingBanjo('Robert')); // Output: Robert plays banjo
console.log(areYouPlayingBanjo('Alice')); // Output: Alice does not play banjo

//---------------------------------------------------------------------------------------------------------------

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true; // They are in love
  } else {
    return false; // They are not in love
  }
}

console.log(lovefunc(3, 4)); // Output: true
console.log(lovefunc(2, 2)); // Output: false

//---------------------------------------------------------------------------------------------------------------

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter(function (bird) {
    return !geese.includes(bird);
  });
}

let birds = [
  'Mallard',
  'Hook Bill',
  'African',
  'Crested',
  'Pilgrim',
  'Toulouse',
  'Blue Swedish',
];
console.log(gooseFilter(birds));

//---------------------------------------------------------------------------------------------------------------

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Initialize an empty array to store the expanded form
  const expanded = [];

  // Iterate through each digit in the number
  for (let i = 0; i < numStr.length; i++) {
    // Get the current digit
    const digit = parseInt(numStr[i]);

    // If the digit is not zero, add it to the expanded form
    if (digit !== 0) {
      // Calculate the place value by multiplying the digit with the appropriate power of 10
      const placeValue = digit * Math.pow(10, numStr.length - i - 1);

      // Add the place value to the expanded form
      expanded.push(placeValue);
    }
  }

  // Return the expanded form as a string by joining the elements with ' + '
  return expanded.join(' + ');
}

console.log(expandedForm(12)); // Output: '10 + 2'
console.log(expandedForm(42)); // Output: '40 + 2'
console.log(expandedForm(70304)); // Output: '70000 + 300 + 4'

//---------------------------------------------------------------------------------------------------------------

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  // Create a new array to store the inverted values
  const invertedArray = [];

  // Iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // Invert the sign of the number by multiplying it with -1
    const invertedNumber = array[i] * -1;

    // Add the inverted number to the new array
    invertedArray.push(invertedNumber);
  }

  // Return the inverted array
  return invertedArray;
}

console.log(invert([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]
console.log(invert([])); // Output: []

//---------------------------------------------------------------------------------------------------------------

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  // Remove the protocol if present (e.g., "http://", "https://", "www.")
  url = url.replace(/(https?:\/\/)?(www\.)?/, '');

  // Extract the domain name using a regular expression
  const domain = url.match(/^([^\.\s]+)/)[0];

  // Return the extracted domain name
  return domain;
}

console.log(domainName('http://github.com/carbonfive/raygun')); // Output: "github"
console.log(domainName('http://www.zombie-bites.com')); // Output: "zombie-bites"
console.log(domainName('https://www.cnet.com')); // Output: "cnet"

//---------------------------------------------------------------------------------------------------------------

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

//---------------------------------------------------------------------------------------------------------------

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  return string.replace(/[aeiou]/g, '');
}

console.log(shortcut('hello')); // Output: "hll"
console.log(shortcut('codewars')); // Output: "cdwrs"
console.log(shortcut('goodbye')); // Output: "gdby"
console.log(shortcut('HELLO')); // Output: "HELLO"

//---------------------------------------------------------------------------------------------------------------

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

//---------------------------------------------------------------------------------------------------------------

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

let maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0; // Empty list, return 0
  }

  let maxSum = arr[0]; // Initialize maxSum with the first element
  let currentSum = arr[0]; // Initialize currentSum with the first element

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return Math.max(maxSum, 0); // Return the maximum sum or 0 if all elements are negative
};

//---------------------------------------------------------------------------------------------------------------

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([34, 15, 88, 2])); // Output: 2
console.log(finder.findSmallestInt([34, -345, -1, 100])); // Output: -345

//---------------------------------------------------------------------------------------------------------------

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) {
    return 0; // Return 0 for an empty array
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // Accumulate the sum of all numbers in the array
  }

  return sum / array.length; // Divide the sum by the count to get the average
}

//---------------------------------------------------------------------------------------------------------------

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0; // Return 0 if begin is greater than end
  }

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i; // Accumulate the sum of the numbers in the sequence
  }

  return sum;
};

//---------------------------------------------------------------------------------------------------------------

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
  if (!nums || nums.length === 0) {
    return []; // Return an empty array for null, nil, or empty array
  }

  return nums.sort((a, b) => a - b); // Sort the array in ascending order
}

//---------------------------------------------------------------------------------------------------------------

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  const frequencyMap = {};
  const lowercaseWord = word.toLowerCase();

  for (let i = 0; i < lowercaseWord.length; i++) {
    const char = lowercaseWord[i];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  let result = '';
  for (let i = 0; i < lowercaseWord.length; i++) {
    const char = lowercaseWord[i];
    result += frequencyMap[char] > 1 ? ')' : '(';
  }

  return result;
}

console.log(duplicateEncode('din')); // Output: "((("
console.log(duplicateEncode('recede')); // Output: "()()()"
console.log(duplicateEncode('Success')); // Output: ")())())"
console.log(duplicateEncode('(( @')); // Output: "))(("

//---------------------------------------------------------------------------------------------------------------

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return 'Senior';
    } else {
      return 'Open';
    }
  });
}

const input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
const output = openOrSenior(input);
console.log(output); // Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//---------------------------------------------------------------------------------------------------------------

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  // Adjusting the number of petals to be zero-based for array indexing
  const adjustedPetals = nbPetals - 1;

  // Using modulo operator to cycle through the phrases
  const index = adjustedPetals % phrases.length;

  return phrases[index];
}

console.log(howMuchILoveYou(1)); // Output: "I love you"
console.log(howMuchILoveYou(3)); // Output: "a lot"
console.log(howMuchILoveYou(7)); // Output: "I love you"
console.log(howMuchILoveYou(8)); // Output: "a little"
console.log(howMuchILoveYou(12)); // Output: "passionately"

//---------------------------------------------------------------------------------------------------------------
