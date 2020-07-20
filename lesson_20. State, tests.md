## State
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div class="parent">
    <div class="c1"></div>
    <div class="c2"></div>
  </div>

  <script>
    function bind(state, selectors, node) {
      const setValue = (field, value) => {
        state[`bind_${field}`] = value
        node.querySelector(selectors[field]).textContent = value
      };

      for (let field in state) {
        setValue(field, state[field])
        Object.defineProperty(state, field, {
          get() { return state[`bind_${field}`] },
          set(newValue) {
            setValue(field, newValue)
          }
        })
      }
      node.state = state;
    }

    let state = { name: 'alex', age: 18 }
    bind(state, { name: '.c1', age: '.c2' }, document.querySelector('.parent'))
  </script>
</body>

</html>
```

## Tests
https://learn.javascript.ru/testing-mocha

`index.html`:
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

`test.js`:
```js
describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});
```

ЗАДАНИЕ \
Найти, что не так в нижеприведённом тесте функции `pow`, исправить. P.S. Тест не содержит синтаксических ошибок и успешно проходит.

```js
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
```

Генерация тестов
```js
describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
```

ЗАДАНИЕ \
Реализовать функцию `map(array, funct)`, протестировать ее:
1. При помощи заданных целиком массивов. Например, `assert.equal(...[1,2,3]..., [1,4,9]);`
2. Сгенерированными массивами. Например,
```js
const array = [1,2,3];
const expectedArray = array.map(item => item ** 2)
assert.equal(....array..., expectedArray);`
```
3. Сгенерированными примерами `it`

Проверять, что функция работает корректно, можно только тестами. Вне тестов функцию запускать нельзя.
