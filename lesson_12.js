// ООП
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// 1. Модульность. Когда спустило колесо, нужно искать проблему в колесе. Так легче предотвращать карго-культы.
// 2. Объект
// 2.1 Поле
// 2.2 Метод
let car = { color: 'red' };
car.go = function() { console.log(`${this.color} car goes`); }
car.go();
// 2.3 Конструктор
// https://learn.javascript.ru/constructor-new
function Car(color) {
  // this = {};  (неявно)
  this.color = color;
  this.go = function() { console.log(`${this.color} car goes`); }
  // return this;  (неявно)
}

let car = new Car('red');

// ЗАДАНИЕ
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

// ЗАДАНИЕ
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Наследование
// Можно почитать, но не обязательно https://learn.javascript.ru/prototype-inheritance
let car = { color: 'red' };
let truck = { height: 3 };
truck.__proto__ = car;

// ЗАДАНИЕ
// 1. Добавить метод в car
// 2. Добавить другой метод в truck
// 3. Вызвать оба этих метода и на car, и на truck

truck.color = 'green';

car.addSticker = function(text) {
  this.sticker = text;
}
// this - это всегда тот объект, на котором вызывается метод.
truck.addSticker('TRUCK');
// Какой будет результат выполнения?
car.sticker;
truck.sticker;

// ЗАДАНИЕ
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};
let speedy = {
  __proto__: hamster
};
let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

// РЕШЕНИЕ
let speedy = {
  __proto__: hamster,
  stomach: []
};

// ЗАДАНИЕ
// У нас есть объекты:
let pockets = {
  money: 2000
};
let table = {
  pen: 3
};
let head = {
  glasses: 1
};
let bed = {
  sheet: 1,
  pillow: 2
};
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
let head = {
  glasses: 1
};
let table = {
  pen: 3,
  __proto__: head
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};
let pockets = {
  money: 2000,
  __proto__: bed
};

// Классы
// https://learn.javascript.ru/class
class Car {
  constructor(color) {
    this.color = color;
  }

  go() {
    console.log(`${this.color} car goes`);
  }

  stop() {
    console.log(`${this.color} car stopped`);
  }
}

new Car('red');

// Синтаксис такой же, как в методах объекта
let car = {
  go() {
    console.log(`${this.color} car goes`);
  },
  stop() {
    console.log(`${this.color} car stopped`);
  }
}
// ЗАДАНИЕ
// Создайте класс Calculator, который создаёт объекты с
// конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// Наследование классов
// https://learn.javascript.ru/class-inheritance
class Truck extends Car {
  go() {
    super.go();
    console.log(`${this.color} truck goes`);
  }
}

let truck = new Truck('green');
truck.go();

// ЗАДАНИЕ
// Описать класс Animal, который в конструктор принимает 3 параметра и сохраняет их в свойства.
// Также у класса описать: метод toHTML, который возвращает HTML со свойствами.
// Описать 2 класса конкретных животных, которые добавляют в конструктор по 1 полю, а также переопределяют метод toHTML.

// Инкапсуляция
// https://learn.javascript.ru/private-protected-properties-methods

// ЗАДАНИЕ
// При загрузке страницы загружать из урла все задачи по урлу 'https://todoappexamplejs.herokuapp.com/items
// Каждую задачу отображать отдельным элементом li. Содержимое li - div с JSON-ом задачи
// Тег li с содержимым должен возвращаться методом toHTML класса XXX (придумать, что за класс)
