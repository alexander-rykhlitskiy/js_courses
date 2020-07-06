## Регулярные выражения
https://learn.javascript.ru/regexp-introduction
https://learn.javascript.ru/regular-expressions

#### match

ЗАДАНИЕ

Определить, есть ли в строке цифры.

```js
let str = 'qqq 22 www'
str.match(/22/)
str.match(/\d/)
```

Квантифаеры https://learn.javascript.ru/regexp-quantifiers
```js
let str = 'qqq 22 www'
str.match(/\d{2}/)
```
ЗАДАНИЕ: найти любую последовательность букв w в строке

Флаги g, i
```js
let str = 'Год кот год Кот'
str.match(/год/i)
```
ЗАДАНИЕ: найти ваше имя в строке, написанное в любом регистре (маленькими или большими буквами)

ЗАДАНИЕ: найти массив из всех повторений вашего имени, написанных в любом регистре (маленькими или большими буквами)

ЗАДАНИЕ

Найти все годы в строке. Год - это 4 цифры
```js
let str = 'Я родился в 1993, пошел в школу в 1999'
str.match(/\d\d\d\d/g)
str.match(/\d{4}/g)
```

ЗАДАНИЕ

Найти все годы в строке. Год - это 4 цифры, за которыми идет слово "год"

```js
let str = 'Я родился в 1993 году, а когда пошел в школу, на дворе был 1999 год. 3000 чертей'
str.match(/\d{4} год/g)
```

Скобочные группы https://learn.javascript.ru/regexp-groups

ЗАДАНИЕ

Найти первый год в строке. Год - это 4 цифры. Вернуть только число года без слова "год"

```js
let str = 'Я родился в 1993 году'
str.match(/(\d{4}) год/)[1]
```

```js
// Квантифаер ?
'11192229'.match(/\d+9/)
'11192229'.match(/\d+?9/)
```

ЗАДАНИЕ

Найти имя тега в строке.

```js
let str = '<h1>Hello, world!</h1>';
let tag = str.match(/<(.*?)>/);
```

#### matchAll
Специальный символ \w, квантифаер []

ЗАДАНИЕ

Найти все имена тегов в строке.

```js
let str = '<h1><div>Hello,</div> <span>world!</span></h1>';
[...str.matchAll(/<([\w\d]*?)>/g)];
```


#### replace
```js
'2 a 333 bbbbb'.replace(/\d/g, 'x')
'2 a 333 bbbbb'.replace(/\d+/g, 'x')
```

ЗАДАНИЕ

Заменить номер телефона на строку "телефон". Номер телефона - это всегда набор цифр (минимум 7), которые могут начинаться  на + и могут включать в себя -

```js
'293335588'
'29333'
'+293335588'
'+2933'
'+29-333-55-88'
'qq +29-333-55-88999 zz'
str.replace(/\+[\d-]{7,}/, 'телефон')
```

## Nodejs
https://monsterlessons.com/project/lessons/webpack-2-ustanovka-i-nastrojka
```bash
npm init
npm install webpack --save-dev
# заполнить содержимое файла webpack.config.js
# создать src/app.js с простым кодом
# добавить `"build": "webpack"` в scripts в файл package.json
npm run build # возможно, 2 раза
# создать файл index.html
# Запустим и посмотрим
npm install lodash --save
# добавить в app.json import _ from 'lodash'
# использовать _.isEqual(1,2)

# Также можно установить babel
npm install babel-loader babel-core babel-preset-es2015 --save-dev
npm install @babel/core --save-dev
```
