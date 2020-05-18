// Оператор %
// Определить является ли заданное число x кратным заданному числу a. Обе переменные вводим с клавиатуры, ответ в консоль
let x = 10;
let a = 3;
if (x % a === 0) {
  console.log("yes");
} else {
  console.log("no");
}

// ЗАДАЧА:
// Задать число n. Запустить цикл от 1 до n с шагом 0.5. Вывести в консоль текущее число (i), целое ли оно. Пример: "1 целое"..."2.5 десятичное"...
let n = 3;
for (let i = 1; i < n; i += 0.5) {
  let result;
  if (i % 1 === 0) {
    result = i + " целое";
  } else {
    result = i + " десятичное";
  }
}

// Оператор switch
switch (1) {
  case 1:
    console.log(1);
    break;
  default:
    console.log(2);
    break;
}

// ЗАДАЧА: светофор
let color = 'green';

switch (color) {
  case 'green':
    console.log('Ехай');
    break;
  case 'yellow':
    console.log('Погодь');
    break;
  case 'red':
    console.log('Стой');
    break;
  default:
    console.log('Светофор сломался');
    break;
}
// > Ехай

// Тернарный оператор
let a = true ? 3 : 5;

// Вспомнить функции и массивы

// ЗАДАЧА:
// Напишите функцию clone(array), которая возвращает копию массива array

// ЧТО НОВОГО:
// функции, которые вызываются на массиве
// функция push
function clone(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
clone([1,2,3]);

// ЗАДАЧА:
// Задать массив чисел. Найти максимальное число в массиве и минимальное. Вывести их в консоль

// ЧТО НОВОГО:
// Ключевое слово of.
let numbers = [2, 4, 1, 3, 29, 7];

let minNumber = numbers[0], maxNumber = numbers[0];
for (number of numbers) {
  if (number < minNumber) {
    minNumber = number;
  }
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(minNumber);
console.log(maxNumber);

// ЗАДАЧА:
// Напишите функцию range(start, end, step), которая возвращает массив всех чисел от start до end включительно с шагом step.
// Пример:
// range(0, 3, 1) // возвращает [0, 1, 2, 3]
// range(2, 10, 3) // возвращает [2, 5, 8]

// Новый способ итерации по элементам массива
// ЧТО НОВОГО:
// forEach
// arrow function
[11,22,33].forEach(function(number, index) {
  console.log(number + ' - ' + index);
})

[11,22,33].forEach((number, index) => console.log(number + ' - ' + index));

// ЗАДАЧА:
// Напишите функции lastN(array, count), которая возвращает count последних элементов массива.
// Если count больше длины массива, возвращается копия всего массива.
// Если array - пустой массив или count равен 0, функция возвращает пустой массив.
// Примеры:
// lastN([1, 2, 3], 2) // возвращает [2, 3]
// lastN([1, 2, 3], 10) // возвращает [1, 2, 3]
// lastN([], 3) // возвращает []
// lastN([1, 2, 3], 0) // возвращает []

// ЗАДАЧА:
// Напишите функцию join(array, space), которая возвращает строку, в которой все элементы массива отделены друг от друга строкой, задана аргументом space.
// Примеры:
// join([1, 2, 3], ',') // возвращает "1,2,3"
// join([1, 2, 3], '') // возвращает "123"
// join([1, 2, 3], 'baz') // возвращает "1baz2baz3"

// ЗАДАЧА:
// Напишите функцию contains(array, element), которая возвращает true только в том случае, если массив содержит элемент element.
// Примеры:
// contains([1, 2, 3], 3) // возвращает true
// contains(['a', 'b', 'c'], 'd') // возвращает false

// ЗАДАЧА:
// Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
// Примеры:
// flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
// flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']

// ЗАДАЧА:
// Задан массив имен. Запустить цикл, перебирающий этот массив. Соединить имена в этом массиве следующим образом: если в массиве одно имя, то зафиксировать только его: "Erlich". Если имен 2, то связать через 'and', пример: "Erlich and Dinesh". Если имен больше 2, то первые слова связывать запятыми, а последнее через 'and', пример:
// Erlich, Dinesh and Richard

// ЧТО НОВОГО:
// names[names.length - 1]
// Функции на массивах slice, join
let names = ['Erlich', 'Dinesh', 'Richard'];
let result = '';
if (names.length <= 1) {
  result = names[0];
} else {
  result = names.slice(0, names.length - 1).join(', ');
  result += ' и ' + names[names.length - 1];
}

// Object
let person = {};
person['name'] = 'vova';
person['age'] = 18;
person['male'] = true;

console.log(person.age);

// Проитерироваться по полям объекта при помощи цикла for ... in
for (const property in person) {
  console.log(property + ' - ' + person[property]);
}

// Создание объекта со всеми свойствами.
// Создание функции у объекта.
// Ключевое слово this.
// Ключевое слово continue.
// Ключевое слово typeof.
let person = {
  name: 'vova',
  age: 18,
  male: true,
  getDescription: function() {
    let result = [];
    for (const property in this) {
      let value = this[property];
      if (typeof value === 'function') {
        continue;
      }
      result.push(property + ' - ' + value);
    }
    return result.join(', ');
  }
}

person.getDescription()

// Для инициализации объектов можно использовать функции-конструкторы
function Person(name, age, male) {
  this.name = name;
  this.age = age;
  this.male = male;

  this.getDescription = function() {
    let result = [];
    for (const property in this) {
      let value = this[property];
      if (typeof value === 'function') {
        continue;
      }
      result.push(property + ' - ' + value);
    }
    return result.join(', ');
  }
}

// ЗАДАЧА:
// Напишите функцию pluck(array, propertyName), которая принимает на вход массив объектов array и возвращает массив из свойств с именем, заданным переменной propertyName в каждом объекте.
// Пример:
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'bill'}];
// pluck(stooges, 'age')// возвращает [40, 50, 60, undefined]

// ЧТО НОВОГО:
// map
function pluck(array, key) {
  return array.map(o => o[key]);
}
