console.log(123)

// ЗАДАНИЕ-ПОВТОРЕНИЕ
// В цикле от 0 до 10 выводить в консоль слово "меньше", если счетчик меньше 5. Выводить слово "больше", если счетчик больше 5
for(let i = 0; i < 10; i = i + 1) {
  if (i < 5) {
    console.log("меньше")
  } else {
    console.log("больше")
  }
}

// Локальные и глобальные переменные
// https://learn.javascript.ru/variables

// a = 1;
if (true) {
  let a = 2;
  console.log(a);
}
console.log(a);

// На прошлом занятии мы писали код в консоли. Кроме этого, код можно писать:
// 1. Прямо в html
// <script>alert("hello")</script>
// 2. В отдельном js файле, который подключается в html
// <script src="script.js"></script>

// ЗАДАНИЕ
// 1. Поместить код задания про меньше-больше в тег script
// 2. Поместить код задания про меньше-больше в отдельный файл script.js, подключить файл в html

// Оператор %
10 % 3
4 % 2
5 % 2

// Функция prompt возвращает строку. Строки можно приводить к числам при помощи функции
Number("123")
// Код выполняется сверху-вниз справа-налево, поэтому можно выполнить такой код
let a = Number(prompt());
// В переменной a будет число, а не строка

// ЗАДАНИЕ
// Определить является ли заданное число x четным. Число вводим с клавиатуры через функцию prompt, ответ выводить в консоль
let x = Number(prompt());
if (x % 2 === 0) {
  console.log("четное");
} else {
  console.log("нечетное");
}

// Строки можно складывать
let a = "masha" + "misha";
a.length

// ЗАДАНИЕ
// 2 раза вызвать функцию prompt. Первый раз запросить имя, второй раз - фамилию.
// Используя функцию alert, вывести
// Привет, Имя Фамилия
// Используя функцию console.log, вывести длину строки

// 3 способа увеличить переменную на 1:
// 1) i = i + 1
// 2) i += 1
// 3) i++
// 4) ++i

// ЗАДАНИЕ
// Задать число n. Запустить цикл от 1 до n с шагом 0.5. Вывести в консоль текущее число (i), целое ли оно. Пример вывода:
// 1 целое
// 2.5 десятичное

let n = 3;
for (let i = 1; i < n; i += 0.5) {
  if (i % 1 === 0) {
    console.log(i + " целое");
  } else {
    console.log(i + " десятичное");
  }
}

// Массивы
// https://learn.javascript.ru/array
[1, 2, 3]
let names = ["masha", "misha", "kolya"]
// Длина массива
names.length
// Получение элемента массива
names[0]

// ЗАДАНИЕ
// В цикле вывести в консоль все элементы массива
for (let i = 0; i < names.length; i++) {
  console.log(i);
}

// Изменение элемента массива
names[0] = "stepa"
// Добавление нового элемента в конец массива
names[names.length] = "stepa"

// ЗАДАНИЕ
// В цикле от 0 до 10 добавить в массив квадраты счетчика.
// В итоге должен получиться массив
[0, 1, 4, 9, ...]


// ЗАДАНИЕ
// Посчитать и вывести в консоль сумму элементов в массиве чисел
let numbers = [1, 2, 3, 4];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);

// ЗАДАНИЕ
// Посчитать и вывести в консоль сумму четных элементов в массиве чисел
let numbers = [1, 2, 3, 4];
let sum = 0;
for (let number of numbers) {
  if (number % 2 === 0) {
    sum += number;
  }
}
console.log(sum);

// ОБЪЕКТЫ
// https://learn.javascript.ru/object-basics
// Представим, что мы разрабатываем сайт ВКонтакте.
// У нас есть страница профиля, на ней нужно отобразить данные о пользователе.
// Создадим переменные, в которых будут храниться эти данные.
let name = 'alex', age = 18, gender = 'male';
// Это может неплохо работать, но потом нам нужно создать страницу друзей,
// и на ней отобразить данные нескольких человек.
// Добавим больше переменных.
let name1 = 'sergei', age1 = 20, gender1 = 'male';
let name2 = 'masha', age2 = 24, gender2 = 'female';
// Но что, если у нас не 3 переменные для описания одного пользователя, а 20?
// Для описания того, что такое переменная, мы использовали метафору "ящик" или "бирка".
// В ситуации с пользователем создается впечатление, что нам не хватает большого ящика,
// в который можно будет положить 3 ящика name, age, gender.
// Для создания таких больших ящиков в JS используются объекты.
// https://learn.javascript.ru/object
// Описываются они фигурными скобками (так же, как и блоки кода в условиях, циклах и т.д.).
let user  = { name: 'alex', age: 18, gender: 'male' };
// Для доступа к полю и записи поля можно использовать [], как и в массивах:
user['name'] //=> 'alex'
user['name'] = 'tony stark'
user['name'] //=> 'tony stark'
// Также можно использовать "."
user.name //=> 'tony stark'
user.name = 'alex'
user['name'] //=> 'alex'

// Эти объекты удобно объединять в массивы.
let users = [{ name: 'alex', age: 18, gender: 'male' }, { name: 'sergei', age: 20, gender: 'male' }, { name: 'masha', age: 24, gender: 'female' }]
// И сейчас управление этими 9 значениями уже не кажется таким сложным.

// Object
let person = {};
person['name'] = 'vova';
person['age'] = 18;
person['male'] = true;

console.log(person.age);

// Проитерироваться по полям объекта при помощи цикла for ... in
for (let property in person) {
  console.log(property + ' - ' + person[property]);
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

// ЗАДАНИЕ: светофор
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

// ЗАДАНИЕ:
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

// ЗАДАНИЕ:
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

// ЗАДАНИЕ:
// Напишите функцию range(start, end, step), которая возвращает массив всех чисел от start до end включительно с шагом step.
// Пример:
// range(0, 3, 1) // возвращает [0, 1, 2, 3]
// range(2, 10, 3) // возвращает [2, 5, 8]
function range(start, end, step) {
  let result = [];

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

// Новый способ итерации по элементам массива
// ЧТО НОВОГО:
// forEach
// arrow function
[11,22,33].forEach(function(number, index) {
  console.log(number + ' - ' + index);
})

[11,22,33].forEach((number, index) => console.log(number + ' - ' + index));


// ЗАДАНИЕ:
// Напишите функцию contains(array, element), которая возвращает true только в том случае, если массив содержит элемент element.
// Примеры:
// contains([1, 2, 3], 3) // возвращает true
// contains(['a', 'b', 'c'], 'd') // возвращает false

// ЧТО НОВОГО
// break, continue
function contains(array, element) {
  result = false;
  for (arrayElement of array) {
    if (element !== arrayElement) {
      continue;
    }
    result = true;
    break;
  }
  return result;
}

contains([1,2,3], 2);
contains([1,2,3], 0);
contains([1,2,3], 4);


// ЗАДАНИЕ:
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

// ЗАДАНИЕ:
// Напишите функцию pluck(array, propertyName), которая принимает на вход массив объектов array и возвращает массив из свойств с именем, заданным переменной propertyName в каждом объекте.
// Пример:
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'bill'}];
// pluck(stooges, 'age')// возвращает [40, 50, 60, undefined]

// ЧТО НОВОГО:
// map
function pluck(array, key) {
  return array.map(o => o[key]);
}


// ЗАДАНИЕ:
// Напишите функции lastN(array, count), которая возвращает count последних элементов массива.
// Если count больше длины массива, возвращается копия всего массива.
// Если array - пустой массив или count равен 0, функция возвращает пустой массив.
// Примеры:
// lastN([1, 2, 3], 2) // возвращает [2, 3]
// lastN([1, 2, 3], 10) // возвращает [1, 2, 3]
// lastN([], 3) // возвращает []
// lastN([1, 2, 3], 0) // возвращает []

// ЗАДАНИЕ:
// Напишите функцию join(array, space), которая возвращает строку, в которой все элементы массива отделены друг от друга строкой, задана аргументом space.
// Примеры:
// join([1, 2, 3], ',') // возвращает "1,2,3"
// join([1, 2, 3], '') // возвращает "123"
// join([1, 2, 3], 'baz') // возвращает "1baz2baz3"


// ЗАДАНИЕ:
// Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
// Примеры:
// flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
// flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']

// ЧТО НОВОГО
// функция concat
