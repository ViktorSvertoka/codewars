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

const students = [
  {
    name: `Den`,
    language: `html`,
  },
  {
    name: `Petro`,
    language: `css`,
  },
  {
    name: `Egor`,
    language: `js`,
  },
  {
    name: `Max`,
    language: `html`,
  },
  {
    name: `Olga`,
    language: `css`,
  },
  {
    name: `Kate`,
    language: `js`,
  },
  {
    name: `Ivan`,
    language: `html`,
  },
];

// Створюємо функцію
// Відфільтрувати масив Filter
// Перебрати масив Map

const getUsersByLanguage = (users, language) => {
  //   const filteredUsers = users.filter(user => user.language === language);
  // const names = filteredUsers.map(user => user.name);

  return users
    .filter(user => user.language === language)
    .map(user => user.name);
};

console.log(getUsersByLanguage(students, 'js'));

//---------------------------------------------------------------------------------------------------------------

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)
const products = [
  {
    id: 'sku1',
    qty: 1,
  },
  {
    id: 'sku2',
    qty: 2,
  },
  {
    id: 'sku3',
    qty: 3,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 8,
  },
  {
    id: 'sku2',
    qty: 19,
  },
];
let counter = 0;
// for (let i = 0; i < products.length; i += 1) {
//   for (let j = products.length - 1; i < j; j -= 1) {
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);
//     }
//     counter += 1;
//   }
// }
console.time('start');
for (let i = 0; i < products.length; i += 1) {
  for (let j = i + 1; j < products.length; j += 1) {
    if (products[i].id === products[j].id) {
      products[i].qty += products[j].qty;
      products.splice(j, 1);
      j -= 1;
    }
    counter += 1;
  }
}
console.timeEnd('start');
// console.log("products-->", products);
// start: 0.31494140625 ms
console.log('counter-->', counter);

//---------------------------------------------------------------------------------------------------------------

// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Alex'],
  },
]; //Not found

const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Not found

const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Jhon

function getNarcissus(arr) {
  const filteredItems = arr.filter(({ know }) => !know.length); // know.length === 0
  if (filteredItems.length !== 1) {
    return 'Not found';
  }
  const narcissus = filteredItems[0]['name'];
  const isNarcissus = arr.every(
    people => people.know.includes(narcissus) || people.name === narcissus,
  );
  return isNarcissus ? narcissus : 'Not found';
}

console.log(getNarcissus(people3));

//---------------------------------------------------------------------------------------------------------------

// Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги
const cars = [
  {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
  },
  {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
  },
  {
    car: 'BMW',
    type: '5 siries',
    price: 9000,
  },
  {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
  },
  {
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
  },
];
const findCars = (cars, min, max) => {
  const filteredCars = cars.filter(({ price }) => price >= min && price <= max);
  return filteredCars.reduce(
    (acc, { car, type }, idx) => {
      return acc + `${idx + 1}. ${car} ${type}\n`;
    },
    filteredCars.length
      ? `Кількість знайдених автомобілів ${filteredCars.length}: \n`
      : 'Вибачте але за вашим пошуком жодного авто не було знайдено.',
  );
};
console.log(findCars(cars, 7000, 9000));
