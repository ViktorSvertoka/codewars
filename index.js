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

// JavaScript
function resolve(array, arraySize) {
  for (let i = 1; i < arraySize - 1; i++) {
    if (array[i] !== 0) continue; // Пропустити елементи, які не є нулями
    if (array[i - 1] === 0 && array[i + 1] === 0) {
      return i; // Знайдено число, яке оточене нулями
    }
  }
  return -1; // Не знайдено відповідного числа
}

// Приклад використання
var inputArray = [0, 4, 0, 8];
var size = 4;
var result = resolve(inputArray, size);
console.log(result); // Виведе 1
