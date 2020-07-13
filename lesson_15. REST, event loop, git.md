## REST API
https://ru.wikipedia.org/wiki/REST

Postman https://habr.com/ru/company/kolesa/blog/351250/

**POST** (создать, неидемпотентный) vs **PUT** (изменить, идемпотентный) vs **PATCH** (изменить, неидемпотентный) https://rapidapi.com/blog/put-vs-patch/

**OPTIONS** (инфо об АПИ, CORS для защиты от CSRF) vs **HEAD** (инфо о ресурсе) https://stackoverflow.com/a/47602072/4862360
```js
// Во вкладке network можно увидеть 2 запроса
fetch('http://todoappexamplejs.herokuapp.com/items/153.json', { method: 'PUT'})
  .then(response => response.text())
  .then(data => console.log(`ответ ${data}`))
```

## Всплытие (bubbling)
https://learn.javascript.ru/bubbling-and-capturing
```js
document.querySelector('button').addEventListener('click', function(event) {
  console.log(this);
})
document.querySelector('body').addEventListener('click', function(event) {
  console.log(this);
  // bubbling останавливается при помощи
  event.stopPropagation()
  event.target // целевой элемент
  event.currentTarget // или `this` - элемент, на котором висит конкретный обработчик
})
```
ЗАДАНИЕ

Описать в html 3 вложенных div, каждый со своим уникальными атрибутом class, напр. c1, c2, c3.
Все div должны иметь `padding: 20px` и уникальный цвет фона.
На каждый из div повесить обработчик кликов (3 раза вызвать `addEventListener`), в котором выводить в консоль class данного div.
Посмотреть вывод в консоли.
На втором div прекратить bubling.
Посмотреть вывод в консоли.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script defer src="script.js"></script>
    <style>
      div {
        padding: 20px;
      }
      .c1 {
        background-color: red;
      }
      .c2 {
        background-color: blue;
      }
      .c3 {
        background-color: green;
      }
    </style>
</head>
<body>
  <div class='c1'>
    <div class='c2'>
      <div class='c3'>
        Текст
      </div>
    </div>
  </div>
</body>
</html>
```

```js
['c1', 'c2', 'c3'].forEach((className, index) => {
  document.querySelector(`.${className}`).addEventListener('click', function(event) {
    console.log(event.currentTarget.className)
    console.log(index + 1)
  })
})
```

## Event loop
https://learn.javascript.ru/event-loop \
https://habr.com/ru/company/ruvds/blog/340508/

ЗАДАНИЕ

В html написать текст. По клику на текст (body) вызывать обработчик, который в цикле 10000000 раз возводит счетчик цикла в степень счетчика.
До цикла в консоль выводить строку вида `${число} начало`.
После цикла в консоль выводить строку вида `${число} конец`.

Такой обработчик нужно повесить 2 раза. В первый раз выводить число 1. Во второй раз - число 2.

```js
document.body.addEventListener('click', () => {
  let number = 1;
  console.log(`${number} начало`)
  for (let i = 0; i < 50000000; i++) { i ** i }
  console.log(`${number} конец`)
})

document.body.addEventListener('click', () => {
  let number = 2;
  console.log(`${number} начало`)
  for (let i = 0; i < 50000000; i++) { i ** i }
  console.log(`${number} конец`)
})
```

ЗАДАНИЕ

В html написать текст. По клику на текст (body) вызывать обработчик, который вызовет `fetch('http://todoappexamplejs.herokuapp.com/items/timeout')`.
До fetch в консоль выводить строку вида `${число} начало`.
После fetch в консоль выводить строку вида `${число} конец`.
Использовать `then` для обработки ответа. Во втором then в консоль выводить строку вида `${число} ответ ${data}`.

Такой обработчик нужно повесить 2 раза. В первый раз выводить число 1. Во второй раз - число 2.

```js
document.body.addEventListener('click', () => {
  let number = 1;
  console.log(`${number} начало`)
  fetch('http://todoappexamplejs.herokuapp.com/items/timeout')
    .then(response => response.text())
    .then(data => console.log(`${number} ответ ${data}`))
  console.log(`${number} конец`)
})

document.body.addEventListener('click', () => {
  let number = 2;
  console.log(`${number} начало`)
  fetch('http://todoappexamplejs.herokuapp.com/items/timeout')
    .then(response => response.text())
    .then(data => console.log(`${number} ответ ${data}`))
  console.log(`${number} конец`)
})
```

ЗАДАНИЕ

В html написать текст. По клику на текст (body) вызывать обработчик, который вызовет `fetch('http://todoappexamplejs.herokuapp.com/items/timeout')`.
До fetch в консоль выводить строку вида `${число} начало`.
Использовать `await` для обработки ответа.
После двух `await` в консоль выводить строку вида `${число} ответ ${data}`.

Такой обработчик нужно повесить 2 раза. В первый раз выводить число 1. Во второй раз - число 2.

```js
document.body.addEventListener('click', async () => {
  let number = 1;
  console.log(`${number} начало`)
  let response = await fetch('http://todoappexamplejs.herokuapp.com/items/timeout')
  let data = await response.text()
  console.log(`${number} ответ ${data}`)
})

document.body.addEventListener('click', async () => {
  let number = 2;
  console.log(`${number} начало`)
  let response = await fetch('http://todoappexamplejs.herokuapp.com/items/timeout')
  let data = await response.text()
  console.log(`${number} ответ ${data}`)
})
```

## Git
Создание первого репозитория
```bash
# Создать папку learn_git
cd путь/learn_git # change directory - перейти в папку
git init # инициализировать новый git репозиторий
# Создать файл с содержимым
git add . # добавить изменения в индекс
git commit -m 'Add first file' # создать коммит (слепок) изменений (сохранить изменения)
# Зайти на github, создать новый репозиторий, нажав + в верхнем правом углу
git remote add origin git@github.com:alexander-rykhlitskiy/123.git # добавить remote (удаленный репозиторий) к локальному репозиторию. Дать ему имя origin
git push -u origin master # отправить (запушить) изменения, указав впредь для этого использовать ветку master
git push # отправить (запушить) изменения
git log # посмотреть лог (журнал изменений)
# На странице вашего репозитория на github создать файл с содержимым
git pull # стянуть (спуллить) изменения
git log
```

Скачивание и модификация существующего репозитория
```bash
# Открыть страницу вашего репозитория. Например, https://github.com/alexander-rykhlitskiy/js_courses
# Нажать "Clone" и скопировать урл, который начинается с git@
git clone url # url - путь вида git@github.com:alexander-rykhlitskiy/js_courses.git, к которому у вас есть доступ
# Добавить файл с содержимым
git add .
git commit -m 'Add new file'
git push
# Посмотреть изменение на url
```
