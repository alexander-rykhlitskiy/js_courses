## Property
https://learn.javascript.ru/property-accessors
```js
let car = {
  get color() {
    return 'red';
  },
  set color(value) {
    this._color = value;
  }
}
```

ЗАДАНИЕ \
Создать объект с сеттером `fullName`, который разбивает имя пробелом, и первую часть присваивает свойству `name`, вторую - свойству `surname`. Геттер возвращает `surname + ' ' + name`.

```js
let user = {
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}
```

## Рекурсия
https://learn.javascript.ru/recursion

```js
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow(x, n) {
  if (n === 0) {
    return 1;
  } else {
    return x * pow(x, n - 1);
  }
}
```


ЗАДАНИЕ \
Реализовать подсчет числа фибоначчи под номером n (параметр функции). \
Если n - 0 или 1, то функция возвращает n. \
В других случаях функция возвращает сумму числа под номером n - 1 и числа под номером n - 2. \
0, 1, 1, 2, 3, 5, 8, 13

```js
function fib(x){
  if(x < 2) {
    return x;
  } else {
    return fib(x - 1) + fib(x - 2);
  }
}
```

## Server

```bash
mkdir todo_server
npm init
git init
git add .
git commit -m 'Run npm init'
npm install express body-parser cors --save
# Создайте server.js файл и занесите в него JS код ниже
git add .
git commit -m 'Implement simple server'
```

`server.js`:
```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const itemsFileName = 'items.json'

let items = [];
let uniqueId = 0;
fs.readFile(itemsFileName, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    items = JSON.parse(data);
    uniqueId = Math.max(...items.map((item) => item.id));
  }
});


function saveItems(res, successCallback) {
  fs.writeFile(itemsFileName, JSON.stringify(items), function (err) {
    if (err) {
      res.status(500).send(err)
    } else {
      successCallback();
    }
  });
}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// GET /api/items (all items) для получения всех
app.get('/api/items', function(req, res){
  console.log('app.get');
  res.status(200).send( items );
});

// GET /api/items/2 (one item by id) для получения одного
app.get('/api/items/:itemId', function (req, res) {
  const { itemId } = req.params;
  const founditem = items.find(item => item.id === Number(itemId));

  res.status(200).send(founditem);
});

// GET /api/items для создания новой
app.post('/api/items', function(req, res){
  console.log('app.post');
  const { title, category, done } = req.body;

  uniqueId++;
  const item = {
    id: uniqueId,
    title,
    category,
    done
  };

  items.push(item);

  saveItems(res, () => res.status(201).send(item))
});

// PUT /api/items/2 (one item by id) для обновления
app.put('/api/items/:itemId', function (req, res) {
  const { itemId } = req.params;
  const { title, category, done } = req.body;

  const updatedItem = {
    id: itemId,
    title,
    category,
    done
  };

  items = items.map(item => item.id !== itemId ? item : updatedItem);

  saveItems(res, () => res.status(200).send(updatedItem))
});

// DELETE /api/items/2 (one item by id) для удаления
app.delete('/api/items/:itemId', function (req, res) {
  const { itemId } = req.params;
  items = items.filter(item => item.id !== Number(itemId));

  saveItems(res, () => res.status(204).send())
});

app.listen(3010);
```
