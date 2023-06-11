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
