## Замыкания
https://learn.javascript.ru/closure

```js
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();
```

```js
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();
```

## Bind
https://learn.javascript.ru/bind

ЗАДАНИЕ \
Исправить пример
```js
let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000);
```

```js
setTimeout(user.sayHi.bind(user), 1000);
```

## Декораторы
https://learn.javascript.ru/call-apply-decorators

## Генераторы
https://learn.javascript.ru/generators

```js
function* generateSequence() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  yield 3;
}

let generator = generateSequence();
let one = generator.next();

for(let value of generator) {}
let sequence = [0, ...generateSequence()];
```

ЗАДАНИЕ \
Сделать светофор, состояние которого создается генератором. При кликах на светофор загораются красный -> красный+желтый -> зеленый.
