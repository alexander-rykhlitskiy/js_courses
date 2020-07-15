## Modules
Преимущества и недостатки использования ООП и просто функций.

https://learn.javascript.ru/modules-intro \
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

```bash
npx serve
# или
npm install -g serve
serve
```

Можно ставить и другие полезные глобальные пакеты
```bash
npm install tldr
```

`index.html`:
```html
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
```

`say.js`:
```js
export function sayHi(user) {
  return `Hello, ${user}!`;
}
```


ЗАДАНИЕ \
Создать модуль `user.js`. Он экспортирует объект с методом `getName` (возвращает любую строку) и проставленным полем `age` (возвращает любое число). Результат вызова метода записать в `body.innerHTML`. \
Импортировать модуль `user.js` в html файле.

`user.js`:
```js
export let user = {
  age: 18,
  getName: function() {
    return 'Nikolay'
  }
}
```
`index.html`:
```js
import {user} from './user.js'

document.body.innerHTML = user.getName()
```

Код модуля выполняется только один раз.

ЗАДАНИЕ \
Создать второй модуль `signIn.js`, который импортирует объект модуля `user.js` и экспортирует любую переменную. После первого и второго импорта модуля `user.js`:
1. выводить в консоль `import.meta`
2. выводить значение поля `age`, потом менять его при первом импорте на 1, при втором импорте - на 2

Импортировать модуль `signIn.js` в html файле.

`signIn.js`:
```js
import {user} from './user.js'

console.log(import.meta)
console.log(user.age);
user.age = 2;
export let variable = 1;
```

`index.html`:
```js
import {variable} from './signIn.js'
import {user} from './user.js'

console.log(import.meta)
console.log(user.age);
user.age = 1;

document.body.innerHTML = user.getName()
```

Экспорт/импорт по умолчанию
```js
let variable = 1;
export default variable

import defaultExport from './signIn.js'
```
ЗАДАНИЕ \
Реализовать автомастерскую используя импорты модулей.

## Tests

```html
<!DOCTYPE html>
<html>
<head>
  <!-- добавим стили mocha для отображения результатов -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- добавляем сам фреймворк mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    // включаем режим тестирования в стиле BDD
    mocha.setup('bdd');
  </script>
  <!-- добавим chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai предоставляет большое количество функций. Объявим assert глобально
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      /* Здесь будет реализация функции, пока пусто */
    }
  </script>

  <!-- скрипт со спецификацией (describe, it...) -->
  <script src="test.js"></script>

  <!-- элемент с id="mocha" будет содержать результаты тестов -->
  <div id="mocha"></div>

  <!-- запускаем тесты! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
```
