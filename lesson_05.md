```js
// Проитерироваться по полям объекта при помощи цикла for ... in
let user = { name: 'tom', age: 20 };
for (let property in user) {
  console.log(property);
  console.log(user[property]);
}
```
ЗАДАНИЕ \
Из объекта пользователя user (3 произвольных поля) сформировать массив строк вида "имя_поля - значение_поля". \
Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in

```js
let user = { name: 'tom', age: 20, legs: 4 };
function getProperties(object) {
  let result = [];
  for (let property in user) {
    result[result.length] = property + ' - ' + user[property];
  }
}
```

```js
// ПОДРОБНЕЕ ПРО ФУНКЦИИ
// https://learn.javascript.ru/function-expressions
function myFunction() { return 1 }
myFunction //=> ƒ myFunction() { console.log(1) } (записали без скобок)
myFunction() //=> 1 (записали со скобками)

// В JS у всего есть тип. Для его определения используется typeof
// https://learn.javascript.ru/types-intro#type-typeof
typeof 1 //=> "number"
typeof "alex" //=> "string"
typeof undefined //=> "undefined"

let user  = { name: 'alex' };
typeof user //=> "object"
typeof null //=> "object"
// У функции тоже есть тип. Этот тип - function
typeof alert //=> "function"
// Функции можно создавать как и другие переменные. Сравните:
let myNumber = 1;
let myFunction = function() { return 2 }
// и потом вызывать их
myFunction() //=> 2
```


### Продвинутый синтаксис JavaScript

```js
  // https://learn.javascript.ru/string#kavychki
  let name = 'Alex';
  let age = 19;
  let description = `${name} - ${age}`;

  // ЗАДАНИЕ
  // Создать 2 числовые переменные a и b. Вывести в консоль выражение
  // значение_a + значение_b = сумма_a_и_b

  // https://learn.javascript.ru/arrow-functions-basics
  let sum = (number1, number2) => number1 + number2;


  // Если функция занимает несколько строк, нужно добавлять {} и слово return
  let sum = (number1, number2) => {
    let result = number1 + number2;
    return result;
  }
  // ЗАДАНИЕ
  // Описать функцию, которая принимает число и возвращает квадрат этого числа

  // Методы
  let user = { name: 'Tom' };
  user.sayHi = () => console.log('Hi');

  let array = [1, 2, 3];
  array.push(5);

  // https://learn.javascript.ru/array-iteration#foreach
  [10, 20, 30].forEach((element, index) => console.log(`${index} - ${element}`));
  // ЗАДАНИЕ
  // Создать функцию, которая принимает массив чисел и возвращает массив строк
  // число - число_в_степени_индекс_числа_в_массиве
  // Например,
  myFunc([2, 2, 2, 2]) //=>
  // ["2 - 1", "20 - 2"]
  // Возведение в степень - `**`, добавление элемента в массив - `push`, обход массива - `forEach`

  // https://learn.javascript.ru/array-methods#map
  [1, 2, 3].map((element) => element ** 2);
  // ЗАДАНИЕ
  // Описать функцию, которая принимает массив имен и возвращает массив объектов { name: имя }
  // Принимает ['alex', 'julia']
  // Возвращает [{ name: 'alex' }, { name: 'julia' }]

  // Про другие методы читайте здесь https://learn.javascript.ru/array-methods
  // Функция setTimeout
  // https://learn.javascript.ru/settimeout-setinterval
  let showAlert = () => alert('hello');
  setTimeout(showAlert, 3000);
  // или так:
  setTimeout(() => alert('hello'), 3000);
  // ЗАДАНИЕ
  // Есть разметка <div></div>
  // Через 3 секунды после загрузки страницы создать элемент p с текстом

  // https://learn.javascript.ru/object-methods#sokraschyonnaya-zapis-metoda
  let a = {
    hey() {
      alert('hey');
    }
  }
```

События \
https://learn.javascript.ru/introduction-browser-events \
Событие – это сигнал от браузера о том, что что-то произошло. \
События мыши: click, mousemove и т.д. \
События на элементах управления: submit, focus \
Клавиатурные события: keydown и keyup \
События документа: DOMContentLoaded

```js
monitorEvents($0, 'click') // только google chrome
```

Обработчики событий:
1) Использование атрибута HTML
```html
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```
ЗАДАНИЕ
Создать в html текстовый input. Вывести сообщение "Привет" в консоль, когда на этом инпуте появляется focus.
Событие так и называется, focus
```html
<input onfocus="console.log('Привет')">
```

2) Использование свойства DOM-объекта
```html
<input id="elem" type="button" value="Нажми меня!">
```
```js
function sayThanks() { alert('Спасибо'); };
$0.onclick = sayThanks; // без скобок
```
ЗАДАНИЕ \
Реализовать предыдущее задание, но уже методом 2. \
Для того, чтобы получить элемент, используйте функцию querySelector
`<input>`
```js
let input = document.querySelector('input');
function logConsole() {
  console.log('Привет');
}
input.onfocus = logConsole;
```

ЗАДАНИЕ \
Описать две функции, logConsole (выводит текст в консоль) и logAlert (показывает текст в диалоговом окне) \
(дополнительные функции описывать нельзя) \
Вызывать эти функции способом 2 по событию click

3) `element.addEventListener(event, handler)`
`<input>`
```js
  let input = document.querySelector('input');
  function logConsole() {
    console.log('Привет');
  }
  function logAlert() {
    alert('Привет');
  }
  input.addEventListener('click', logConsole);
  input.addEventListener('click', logAlert);
```

DOMContentLoaded \
ЗАДАНИЕ \
Перенести JS из последнего задания в отдельный файл. \
Добавить этот тег в теге head
```html
<script type="text/javascript" src="./script.js"></script>
```

Для выполнения js после загрузки страницы можно использовать обработчик DOMContentLoaded
```js
  document.addEventListener('DOMContentLoaded', function() {
    ... // код из предыдущего задания
  });
```

<!-- Объект события -->
<!-- ЗАДАНИЕ -->
<!-- При вводе текста в input выводить в консоль введенный символ -->
```js
  function logConsole(event) {
    console.log(event.key);
  }
  input.addEventListener('keyup', logAlert);
```

<!-- Атрибуты и свойства -->
<!-- https://learn.javascript.ru/dom-attributes-and-properties -->
```html
<input name="age" myattribute="hey">
```
```js
  // стандартный атрибут
  document.querySelector('input').name;
  document.querySelector('input').name = 'qwe'

  // нестандартный/стандартный атрибут
  document.querySelector('input').myattribute; // не работает
  document.querySelector('input').getAttribute('myattribute');
  document.querySelector('input').setAttribute('myattribute');
```

ЗАДАНИЕ \
При вводе текста в input выводить в консоль весь введенный текст
```js
  document.querySelector('input').value;
  event.target.value;
```

`eval` \
`event.preventDefault()` \
`Новое событие submit`

ЗАДАНИЕ \
Создать простой калькулятор. Описать в html форму с инпутом. В инпут вводится выражение для подсчета. \
После отправки формы высчитывается результат и отображается тектом под формой.


```html
<body>
  <form>
    <input class="expression">
    <input type="submit">
  </form>
  <div class="result"></div>
</body>
```

```js
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      const input = event.target.querySelector('.expression');
      const result = eval(input.value);
      document.querySelector('.result').textContent = result;
    })
  });
```

<!-- Событие mousemove -->
<!-- ЗАДАНИЕ -->
<!-- Задать в html прямоугольный div. Также задать массив цветов. По наведению мышки div, его цвет должен меняться на следующий из массива -->
