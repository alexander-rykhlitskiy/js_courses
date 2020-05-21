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

// ОБЪЕКТЫ
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
// Для описания того, что такое переменная, мы использовали метафору "ящик".
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
