// ЗАДАНИЕ-ПОВТОРЕНИЕ
// Задать массив чисел.
// Найти максимальное число в массиве
// Найти минимальное число в массиве.
// Вывести их в консоль

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

// Тернарный оператор
// https://learn.javascript.ru/ifelse
let male = true;
let gender = male ? 'man' : 'woman';

// Тернарный оператор выше делает то же самое, что и следующий if,
// но запись получается более короткой и наглядной
let male = true;
let gender;
if (male) {
    gender = 'man';
} else{
    gender = 'woman'
}

// ЗАДАНИЕ
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
[true, false]
// должно получиться
[{ gender: 'man' }, { gender: 'woman' }]

let males = [true, false, false, true];
let result = [];
for (let male of males) {
  result[result.length] = { gender: male ? 'man' : 'woman' };
}
console.log(result);

// Что если нам нужно создать не 1 массив, а 10?

// Описание простых функций.
// ЧТО НУЖНО ЗНАТЬ
// Мы уже знаем, что prompt и alert - это функции.
// При этом обе эти функции принимают один параметр - строку, которая должна отобразиться в появившемся диалоге.

// Мы можем объявить свою функцию.
// Функции в  JavaScript объявляются при помощи ключевого слова function.

// Данная функция принимает один параметр, который называется name.
function showGreeting(name) {
  console.log("привет, " + name);
}
showGreeting("Misha");

// ЗАДАНИЕ
// Написать и вызвать функцию, которая принимает число и выводит в консоль его квадрат.
function sqr(number) {
  console.log(number * number);
}

// Данная функция возвращает число Пи
function getPi() {
  return 22 / 7;
}

// ЗАДАНИЕ
// Написать и вызвать функцию, которая возвращает слово "Привет"
function getGreeting() {
  return "Привет";
}

// ЗАДАНИЕ
// Написать и вызвать функцию, которая принимает один параметр, который называется name.
// Далее она прибавляет name к "Привет, " и возвращает результат
function myFunction(name) {
  return "Привет, " + name;
}
myFunction("Миша"); // = "Привет, Миша"

// Область видимости переменных.
name = "banana"; // объявление глобальной переменной
let name = "banana"; // объявление локальной переменной с блочной видимостью (видна только в блоке кода (if, for, while))
var name = "banana"; // объявление локальной переменной с функциональной видимостью (видна только в данной функции)

// У переменной price в каждой функции и в блоке `if (true) {` свое значение,
// которое не пересекается с другими переменными price
function calcPrice(kilometers, minutes) {
  var price = 2;
  price = price + kilometers * 0.3;
  price = price + minutes * 0.1;
  if (true) {
    let price = 5;
  }
  return price;
}

// ЗАДАНИЕ
// Написать функцию, которая принимает массив чисел и возвращает максимальное число из массива.

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
// Напишите функцию flatten(array), которая принимает на вход массив из массивов и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
// Примеры:
// flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
// flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']

// ЧТО НОВОГО
// функция concat


function calcDebit() {
  var price = 9;
  price = price * 2;
}

var price = 0;
alert(calcPrice(2, 3));

// ПРИМЕР 6
// ЧТО НУЖНО ЗНАТЬ
// Увеличить значение числа на 1 можно при помощи операторов ++ и +=
let i = 0;
i++; // сейчас значение i равно 1
i += 10; // сейчас значение i равно 11
// Иногда строки нужно приводить к числам и наоборот
Number("123"); // = 123
String(123); // = "123"

// Задача: подсчет суммы чисел от 0 до заданного числа при помощи функции
function calcSum(num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += i;
  }
  return result;
}

let num = Number(prompt("Введите число"));
let sum = calcSum(num);
alert(sum);

// ПРИМЕР 5
// ЧТО НУЖНО ЗНАТЬ
// Оператор ** используется для возведения в степень.
2 ** 3; // = 8

// Задача: вывод кубов чисел от 0 до заданного числа с шагом 3
function showCub(num) {
  let result = "";
  for (let i = 1; i < num; i += 3) {
    result += String(i ** 3) + ", ";
  }
  console.log(result);
}
showCub(100);

// ЗАДАЧА
// Описать функцию multiply, которая перемножает 3 числа и возвращает результат
function multiply(number1, number2, number3) {
    let result = 0;
    result = number1 * number2 * number3;
    return result;
}
// Предыдущий вариант верный, но его можно немного упростить:
function multiply(number1, number2, number3) {
    return number1 * number2 * number3;
}
multiply(2, 3, 4); //=> 24

// ЗАДАЧА
// Описать функцию, которая принимает массив и число.
// Функция возвращает true, если массив содержит в себе это число. И false, если не содержит
function contains(array, x) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return true;
        }
    }
    return false;
}
contains([1,2,3], 2)
contains([1,2,3], 5)





// ПОДРОБНЕЕ ПРО ФУНКЦИИ
// https://learn.javascript.ru/function-expressions
function myFunction() { return 1 }
myFunction //=> ƒ myFunction() { console.log(1) } (записали без скобок)
myFunction() //=> 1 (записали со скобками)

// В JS у всего есть тип. Для его определения используется typeof
// https://learn.javascript.ru/types-intro#type-typeof
typeof 1 //=> "number"
typeof "alex" //=> "string"
typeof user //=> "object"
// У функции тоже есть тип. Этот тип - function
typeof alert //=> "function"
// Функции можно создавать как и другие переменные. Сравните:
let myNumber = 1;
let myFunction = function() { return 2 }
// и потом вызывать их
myFunction() //=> 2

// Полям объекта тоже можно присваивать значения функций.
// Таким образом создаются "методы" https://learn.javascript.ru/object-methods
let user  = { name: 'alex' };
user.description = function() { return 'человек' }
user.description() //=> "человек"
// Ключевое слово this
this //=> Window
// Внутри метода объекта this - это сам объект
user.objectItself = function() { return this }
user.objectItself() //=> {name: "alex", objectItself: ƒ}

// Пример
let person = { male: true }
person.description = function() { return this.male ? 'man' : 'woman' }

// Объекты можно создавать через функции-конструкторы
// https://learn.javascript.ru/constructor-new
function Person(male) {
    this.male = male;
    this.description = male ? 'man' : 'woman';
}
let person = new Person(true)
// Обратите внимание, что здесь description - не функция, а поле объекта.
// Значит его значение нужно получать без скобок ()
person.description //=> "man"

function Auto(year) {
    this.year = year;
    this.state = year > 2000 ? 'new' : 'old';
}
let auto = new Auto(2010)

let obj = { myFunction: function() { alert(123) } }
obj.myFunction() // выводится диалоговое окно

// ЗАДАЧА
// Вывести все поля объекта
let country = { name: 'belarus', population: 10000000 }
for (let field in country) {
    console.log(field + ' - ' + country[field])
}

countries = [{name: 'belarus'}, {name: 'russia'}]

// ЗАДАЧА
// Описать функцию, которая принимает массив стран и поле объекта страны.
// Функция возвращает массив из всех полей этих стран.
function pluck(countries, fieldName) {
    let result = [];
    for (let country of countries) {
        result.push(country[fieldName]);
    }
    return result;
}

// ЗАДАЧА
// Добавить всем странам поле oon, которое равно true
// 1-й способ
for (let country of countries) {
    country['oon'] = true;
}
// 2-й способ
for (let country of countries) {
    country.oon = true;
}

// ПРОДВИНУТОЕ ИСПОЛЬЗОВАНИЕ ФУНКЦИЙ
// Создадим функцию, которая принимает другую функцию и вызывает ее
let myFunction = function(anotherFunction) { anotherFunction() }
myFunction(alert) //=> появилось диалоговое окно

// Еще один способ обхода массива
// https://learn.javascript.ru/array-iteration#foreach
[1, 2, 3].forEach(function(element) { console.log(element) })

// СЛОЖНЫЙ ПРИМЕР
// https://learn.javascript.ru/function-expressions#funktsii-kolbeki
// Функции можно передавать в другие функции.
// ЗАДАЧА
// Реализовать функцию map, которая принимает массив и функцию.
// Возвращает массив из результатов выполнения передаваемой функции
// на элементах исходного массива
map = function(array, func) {
    let result = [];
    for (let element of array) {
        result[result.length] = func(element);
    }
    return result;
}
func = function square(x) { return x ** 2 }
map([2,3,4], func) //=> [4, 9, 16]
// КОНЕЦ ЗАДАЧИ

// Пример
// Создать функцию, которая принимает массив и возвращает массив из положительных
// элементов исходного массива.
function filter(array) {
    let result = [];
    for (let element of array) {
        if ((element > 0) == true) {
            result.push(element)
        }
    }
    return result;
}

// Теперь попробуем описать функцию, которая будет работать как предыдущая, но
// фильтровать исходный массив будет не используя (element > 0),
// а вызывая функцию, которую передали как второй параметр.
function filter(array, func) {
    let result = [];
    for (let element of array) {
        if (func(element) == true) {
            result.push(element)
        }
    }
    return result;
}

let myFunction = function(x) { return x > 0 };
filter([-2, 4, -3, 5], myFunction)
