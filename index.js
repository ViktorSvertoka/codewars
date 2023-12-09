// User
// Завдання: Порахувати кількість кутів в N трикутниках і К ромбах.
// N і K передаються параметрами функції і 0 < N, K < 10000. Функція повертає сумарну кількість кутів.

// function resolve(triangleN, rhombK) {
//   if (triangleN > 0 && rhombK < 10000) {
//     // Кількість кутів у трикутниках
//     const triangleAngles = 3 * triangleN;

//     // Кількість кутів у ромбах
//     const rhombAngles = 4 * rhombK;

//     // Сумарна кількість кутів
//     const totalAngles = triangleAngles + rhombAngles;

//     return totalAngles;
//   }
// }

// // Приклад використання:
// const N = 1; // Задана кількість трикутників
// const K = 11000; // Задана кількість ромбів

// const result = resolve(N, K);
// console.log(result); // Виведе сумарну кількість кутів у трикутниках та ромбах

//----------------------------------------------------------------------------------------------------------

// Завдання: На вхід функції передається три цілих числа, до того ж два з них однакові. Треба повернути те,
// яке відрізняється від інших або ж повернути - 1 якщо всі три рівні між собою.
// Приклад:
// Вхід: 1, 1, 3
// Вихід: 3

// function resolve(first, second, third) {
//   if (first > second || first > third) {
//     return first;
//   } else if (first < second || second > third) {
//     return second;
//   } else if (first < third || second < third) {
//     return third;
//   } else {
//     return 1;
//   }
// }

// resolve(1, 1, 3);

// console.log(resolve(3, 3, 10));

//----------------------------------------------------------------------------------------------------------

// User
// Завдання: На вхід функції передається три числа.Треба віднімати від першого числа друге до тих пір,
// поки отриманий результат не стане меншим за третє число, і після цього потрібно повернути цей результат.
// Приклад:
// Вхід: 20, 3, 10
// Вихід: 8

// function resolve(first, second, third) {
//   while (first >= third) {
//     first -= second;
//   }

//   return first;
// }

// console.log(resolve(20, 3, 10));

//--------------------------------------------------------------------------------------------------------------

// Завдання: На вхід функції приходить масив цілих чисел, а другим параметром - його розмір.
// Знайдіть в масиві перше число, яке оточене нулями.Якщо таке число не знайдено, поверніть - 1,
// інакше поверніть індекс такого елемента.
// Приклад:
// Вхід: [0, 4, 0, 8], 4
// Вихід: 1

// // JavaScript
// function resolve(array, arraySize) {
//   for (let i = 1; i < arraySize; i++) {
//     if (array[i - 1] === 0 && array[i + 1] === 0) {
//       return i; // Знайдено число, яке оточене нулями
//     }
//   }
//   return -1; // Не знайдено відповідного числа
// }

// // Приклад використання
// var inputArray = [1, 1, 1, 11, 0, 1, 0];
// var size = 7;
// var result = resolve(inputArray, size);
// console.log(result); // Виведе 1

//--------------------------------------------------------------------------------------------------------------

// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// ******************** POST - CREATE ******************** \\

// const post = {
//   title: 'Hello world',
//   body: 'I love JS',
//   userId: 11,
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ******************** GET - READ ******************** \\

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************** PATCH - UPDATE ******************** \\

// const oldPost = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
//   id:1
// };

// const newPost = {
//     title: "Hello from GOIT",
//   };

// const result = {
//     title: "Hello from GOIT",
//     body: "I love JS",
//     userId: 11,
//     id:1
// }

// const newPost = {
//   title: "Hello from GOIT",
//   body: 'Test 20:16',
//   authorName: 'TEST USER'
// };

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify(newPost),
//     headers: {
//         "Content-type": "application/json"
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
// .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************** PUT - UPDATE ******************** \\

// const oldPost = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
//   id: 1,
// };

// const newPost = {
//   title: "Hello from GOIT",
// };

// const result = {
//   title: "Hello from GOIT",
//   id: 1,
// };

// 1-101

// 101

// const result = {
//     title: "Hello from GOIT",
//     id: 101,
//   };

// const newPost = {
//     title: "Hello from GOIT",
//   };

//   const options = {
//       method: 'PUT',
//       body: JSON.stringify(newPost),
//       headers: {
//           "Content-type": "application/json"
//       }
//   }

//   fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ******************** DELETE ******************** \\

// const options = {
//     method: "DELETE",
//     body: {
//         id: 1
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)

//--------------------------------------------------------------------------------------------------------------

// function between(a, b) {
//   let result = [];

//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }

//   return result;
// }

// let a = 1;
// let b = 9;

// console.log(between(a, b));

//--------------------------------------------------------------------------------------------------------------

// map()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const usdToEuro = 0.86;

// const transactionsEuro = transactions.map(trans => trans * usdToEuro);

// console.log(transactions);

// console.log(transactionsEuro);

// const transactionsEuro1 = [];

// for (const trans of transactions) {
//   transactionsEuro1.push(trans * usdToEuro);
// }

// console.log(transactionsEuro1);

// const transactionDescriptions = transactions.map(
//   (transaction, index) =>
//     `Transaction № ${index + 1} : ${Math.abs(transaction)} was ${
//       transaction > 0 ? 'deposited' : 'withdrew'
//     }`,
// );

// console.log(transactionDescriptions);

//--------------------------------------------------------------------------------------------------------------

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 -- > -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   let sqer = [];
//   for (let i = 1; i < sq; i += 2) {
//     sqer.push(i);
//     const sumOfNumbers = sqer.reduce((acc, number) => acc + number, 0);
//     if (sumOfNumbers === sq) {
//       const newArr = sqer[sqer.length - 1] + 2;

//       return [...sqer, newArr].reduce((acc, number) => acc + number, 0);
//     }
//   }
//   return -1;
// }

// console.log(findNextSquare(49));

//--------------------------------------------------------------------------------------------------------------

// function findNextSquare1(sq) {
//   const sqrt = Math.sqrt(sq);

//   if (Number.isInteger(sqrt)) {
//     return Math.pow(sqrt + 1, 2);
//   } else {
//     return -1;
//   }
// }

// console.log(findNextSquare1(49));

//--------------------------------------------------------------------------------------------------------------

// function findNextSquare2(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// console.log(findNextSquare2(49));

//--------------------------------------------------------------------------------------------------------------

// function correct(string) {
//   return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
// }

// console.log(correct('L0ND0N'));
// console.log(correct('DUBL1N'));
// console.log(correct('51NGAP0RE'));
// console.log(correct('BUDAPE5T'));
// console.log(correct('PAR15'));

//--------------------------------------------------------------------------------------------------------------

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const totalWithdrawalsEuro = transactions
//   .filter(trans => trans < 0)
//   // .map((trans, index, array) => {
//   //   return trans * 0.86;
//   // })
//   .map(trans => trans * 0.86)
//   .reduce((acc, trans) => acc + trans, 0);

// console.log(totalWithdrawalsEuro);

//--------------------------------------------------------------------------------------------------------------

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const firstDeposit = transactions.find(trans => trans > 0);

// const firstWithdrawal = transactions.find(trans => trans < 0);

// console.log(firstDeposit); // 300
// console.log(firstWithdrawal); // -500

//--------------------------------------------------------------------------------------------------------------

// function plural(n) {
//   if (n !== 1 && n >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function plural(n) {
//   return n !== 1;
// }

//--------------------------------------------------------------------------------------------------------------

// var uniqueInOrder = function (iterable) {
//   let arr = [];
//   for (let i = 0; i <= iterable.length - 1; i++) {
//     if (arr[arr.length - 1] !== iterable[i]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// };

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// var uniqueInOrder = function (iterable) {
//   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
// };

//--------------------------------------------------------------------------------------------------------------

// function sumMix(x) {
//   let acc = 0;

//   for (let i = 0; i <= x.length - 1; i++) {
//     acc += Number(x[i]);
//   }

//   return acc;
// }

// console.log(sumMix([9, 3, '7', '3']));

// function sumMix(x) {
//   return x.map(a => +a).reduce((a, b) => a + b);
// }

// console.log(sumMix([9, 3, '7', '3']));

//--------------------------------------------------------------------------------------------------------------

console.log(10 === 10.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(Number('11'));
console.log('11');
console.log(+'11');
console.log(Number.parseInt('20%', 10));
console.log(Number.parseInt('1011%', 2));
console.log(Number.parseFloat('9.7kg', 2));
