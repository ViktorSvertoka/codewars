// let newDiv = document.createElement('h1');

// newDiv.innerHTML = 'Hi!';

// document.body.appendChild(newDiv);

// console.log(newDiv.innerHTML);
// console.error(newDiv.innerHTML);
// console.warn(newDiv.innerHTML);

//---------------------------------------------------------------------------------------------------------------

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Den`,
//     language: `html`,
//   },
//   {
//     name: `Petro`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Max`,
//     language: `html`,
//   },
//   {
//     name: `Olga`,
//     language: `css`,
//   },
//   {
//     name: `Kate`,
//     language: `js`,
//   },
//   {
//     name: `Ivan`,
//     language: `html`,
//   },
// ];

// Створюємо функцію
// Відфільтрувати масив Filter
// Перебрати масив Map

// const getUsersByLanguage = (users, language) => {
//   //   const filteredUsers = users.filter(user => user.language === language);
//   // const names = filteredUsers.map(user => user.name);

//   return users
//     .filter(user => user.language === language)
//     .map(user => user.name);
// };

// console.log(getUsersByLanguage(students, 'js'));

//---------------------------------------------------------------------------------------------------------------

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)
// const products = [
//   {
//     id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
// ];
// let counter = 0;
// // for (let i = 0; i < products.length; i += 1) {
// //   for (let j = products.length - 1; i < j; j -= 1) {
// //     if (products[i].id === products[j].id) {
// //       products[i].qty += products[j].qty;
// //       products.splice(j, 1);
// //     }
// //     counter += 1;
// //   }
// // }
// console.time('start');
// for (let i = 0; i < products.length; i += 1) {
//   for (let j = i + 1; j < products.length; j += 1) {
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);
//       j -= 1;
//     }
//     counter += 1;
//   }
// }
// console.timeEnd('start');
// // console.log("products-->", products);
// // start: 0.31494140625 ms
// console.log('counter-->', counter);

//---------------------------------------------------------------------------------------------------------------

// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'John'],
//   },
//   {
//     name: 'Ivan',
//     know: ['John', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'John'],
//   },
//   {
//     name: 'John',
//     know: ['Alex'],
//   },
// ]; //Not found

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'John'],
//   },
//   {
//     name: 'John',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['John', 'Alex'],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'John'],
//   },
//   {
//     name: 'John',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'John'],
//   },
//   {
//     name: 'Ivan',
//     know: ['John', 'Alex'],
//   },
// ]; // John

// function getNarcissus(arr) {
//   const filteredItems = arr.filter(({ know }) => !know.length); // know.length === 0
//   if (filteredItems.length !== 1) {
//     return 'Not found';
//   }
//   const narcissus = filteredItems[0]['name'];
//   const isNarcissus = arr.every(
//     people => people.know.includes(narcissus) || people.name === narcissus,
//   );
//   return isNarcissus ? narcissus : 'Not found';
// }

// console.log(getNarcissus(people3));

//---------------------------------------------------------------------------------------------------------------

// Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги

// const cars = [
//   {
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//   },
//   {
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//   },
//   {
//     car: 'BMW',
//     type: '5 sires',
//     price: 9000,
//   },
//   {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//   },
//   {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//   },
// ];
// const findCars = (cars, min, max) => {
//   const filteredCars = cars.filter(({ price }) => price >= min && price <= max);
//   return filteredCars.reduce(
//     (acc, { car, type }, idx) => {
//       return acc + `${idx + 1}. ${car} ${type}\n`;
//     },
//     filteredCars.length
//       ? `Кількість знайдених автомобілів ${filteredCars.length}: \n`
//       : 'Вибачте але за вашим пошуком жодного авто не було знайдено.',
//   );
// };

// console.log(findCars(cars, 7000, 9000));

//---------------------------------------------------------------------------------------------------------------

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику
// швидше зрозуміти що робить, приймає та повертає функція.

// Для створення JSDoc - comment на рядку перед створеною функцією натіскаємо /**

// Далі описуємо нашу функцію

/**
 * Функція для покупки продукту.
 *
 * @param {String} productName - Назва продукту.
 * @param {Number} productQty - Кількість продуктів, які ви бажаєте купити.
 * @param {Number} price - Ціна одного продукту.
 * @description Отже, функція buyProduct призначена для імітації операції покупки і виведення інформації про цю покупку.
 */

function buyProduct(productName, productQty, price) {
  console.log(
    `Ви купуєте ${productQty} ${productName}, вартість одиниці товару ${price}, загальна вартість ${
      productQty * price
    }`,
  );
}

// Приклад використання функції:
// buyProduct('яблука', 10, 35);

//---------------------------------------------------------------------------------------------------------------

// Callback функція у вигляді посилання на функції

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }

// logResult(4, 5, add);
// logResult(4, 5, sum);

// function add(a, b) {
//   return a + b;
// }

// function sum(a, b) {
//   return a * b;
// }

//---------------------------------------------------------------------------------------------------------------

// Інлайнова Callback функція

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }

// logResult(4, 5, function (a, b) {
//   return a + b;
// });

// logResult(4, 5, function (a, b) {
//   return a * b;
// });

// logResult(4, 5, (a, b) => a + b);
// logResult(4, 5, (a, b) => a * b);

//---------------------------------------------------------------------------------------------------------------

// ForEach

// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermelon'];

// Цикл for

// for (let i = 0; i < products.length; i += 1) {
//   const product = products[i];

//   console.log(`${i + 1} - ${product}`);
// }

// forEach

// products.forEach((item, idx, arr) => {
//   console.log(`${idx + 1} - ${item}`);
//   console.log(arr);
// });

// products.forEach((_, __, ___) => {
//   console.log(`${__ + 1} - ${_}`);
//   console.log(___);
// });

//---------------------------------------------------------------------------------------------------------------

// function customForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i, arr);
//   }
// }

// customForEach(products, (product, idx, arr) => {
//   console.log('product', product);
//   console.log('idx', (idx += 1));
//   console.log('arr', arr);
// });

//---------------------------------------------------------------------------------------------------------------

// Immediately Invoked Function Expression (IIFE)

// const runOneTime = function () {
//   console.log('You will never see this function call again.');
// };
// runOneTime();
// runOneTime();

// (function () {
//   console.log('You will never see this function call again.');
// })();

// (() => console.log('You will never see this ARROW function call again.'))();

// {
//   // const x = 1;
//   var y = 2;
// }

// console.log(z);

//---------------------------------------------------------------------------------------------------------------

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// let counter1 = counter();
// console.log(counter1());

// let counter2 = counter();
// console.log(counter2());

//---------------------------------------------------------------------------------------------------------------

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
let letters2 = ['z', 'x', 'y'];

// slice() ---> не змінює масив, а створює копію

// console.log(letters.slice(1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-3));
// console.log(letters.slice(2, -1));
// console.log(letters.slice());
// console.log([...letters]);

// splice() ---> змінює масив

// console.log(letters.splice(1));
// console.log(letters.splice(-1));
// console.log(letters.splice(1, 3));

// reverse() ---> розставляє елементи у зворотному порядку, змінює масив

// console.log(letters.reverse());

// concat()

// console.log(letters.concat(letters2));
// console.log([...letters, ...letters2]);

// join()

// console.log(letters.join(', '));
// console.log(letters.join(' : '));

//---------------------------------------------------------------------------------------------------------------

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for of

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposit`);
//   } else {
//     console.log(`${transaction} was withdrew`); // з мінусом
//     console.log(`${Math.abs(transaction)} was withdrew`); // без мінуса
//   }
// }

// forEach

transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`Transaction № ${index + 1} : ${transaction} was deposit`);
  } else {
    console.log(`Transaction № ${index + 1} : ${transaction} was withdrew`);
  }
});
