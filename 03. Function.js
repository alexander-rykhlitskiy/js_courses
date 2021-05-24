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

// Функции.
// https://learn.javascript.ru/function-basics
// Мы уже знаем, что prompt и alert - это функции.
// При этом обе эти функции принимают один параметр - строку, которая должна отобразиться в появившемся диалоге.

// Доп. Как называть переменные и функции https://habr.com/ru/post/558874/

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
  // price = price + kilometers * 0.3;
  // price = price + minutes * 0.1;
  console.log('var price = ' + price)
  if (true) {
    let price = 5; // эта переменная не влияет на переменную var price, объявленную выше. В этом блоке используется только переменная let price.
    console.log('let price = ' + price)
  }
  console.log('var price = ' + price)
  return price;
}

// ЗАДАНИЕ
// Написать функцию, которая принимает массив чисел и возвращает максимальное число из массива.

function getMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

getMax([1,4,3,8,4])
