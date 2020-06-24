// ЗАДАНИЕ-ПОВТОРЕНИЕ
// Создать функцию request, которая вызывает fetch с урлом
// https://todoappexamplejs.herokuapp.com/items/118.json
// Функция возвращает результат вызова fetch, т.е. promise
// Работает так:
// request().then(response => response.json()).then(data => console.log(data))

function request() {
  return fetch('https://todoappexamplejs.herokuapp.com/items/118.json')
}
request().then(response => response.json()).then(data => console.log(data))

// ЗАДАНИЕ-ПОВТОРЕНИЕ
// https://todoappexamplejs.herokuapp.com/items
// В ООП стиле описать получение (запрос GET) и обновление (запрос PUT) задачи из списка TODO по заданному id.
// 1. Должен быть реализован базовый класс BaseRequest, в котором должен быть реализован метод perform, который отправляет запрос и возвращает промис
// 2. От него должны наследоваться 2 класса, GetRequest, PutRequest, в которых определяются методы, которые возвращают специифические для этого вида запроса данные. Например, метод requestType, который вернет "GET" или "POST" в зависимости от класса
// 3. Весь общий код и общие строки (например, домен сайта) нужно разместить в базовом классе. Для этого можно определять методы в BaseRequest, которые будут вызываться в его наследниках
// 4. Конструктор класса должен принимать как минимум один параметр, id задачи
// 5. Конструктор класс PutRequest может также принимать параметр body
// 6. Проверить результат выполнения можно таким образом
// let request = new GetRequest(118);
// request.perform().then(data => console.log(data))

class BaseRequest {
  BASE_URI = 'https://todoappexamplejs.herokuapp.com/items/'

  constructor(id) {
    this.id = id;
  }

  perform() {
    let promise = fetch(this.BASE_URI + this.id, this._requestOptions());
    promise = promise.then(response => response.json());
    return promise;
  }

  _requestOptions() {
    const result = {
      method: this.requestType(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    return result;
  }
}

class GetRequest extends BaseRequest {
  requestType() {
    return 'GET';
  }
}

class PutRequest extends BaseRequest {
  constructor(id, body) {
    this.body = body;
  }

  requestType() {
    return 'PUT';
  }

  _requestOptions() {
    return {...super._requestOptions, ...{ body: body }};
  }
}

let request = new GetRequest(118);
request.perform().then(data => console.log(data))

// ЗАДАНИЕ-ПОВТОРЕНИЕ
// Реализовать функцию mul, которая принимает 1 параметр, number.
// Также она создает и возвращает промис.
// Через 2 секунды (используя setTimeout) промис должен резолвиться в number * 2
// Работает так:
// mul(10).then(number => console.log(number)) // в консоль выведено число 20

function mul(number) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(number * 2), 2000)
  });
  return promise;
}
mul(10).then(number => console.log(number))

// Asynс-await
// https://learn.javascript.ru/async-await
// ЗАДАНИЕ-ПОВТОРЕНИЕ
// Вызвать функцию request (из начала занятия) на клик кнопки
// <button>Кликни</button>

document.querySelector('button').addEventListener('click', function(event) {
  function request() {
    return fetch('https://todoappexamplejs.herokuapp.com/items/118.json')
  }
  request().then(response => response.json()).then(data => console.log(data))
})

// Или используя async-await

async function request() {
  return fetch('https://todoappexamplejs.herokuapp.com/items/118.json');
}
document.querySelector('button').addEventListener('click', async function(event) {
  let fetchPromise = await request();
  console.log(await fetchPromise.json())
})

// ЗАДАНИЕ
// Переписать задачу с BaseRequest используя async-await
class BaseRequest {
  BASE_URI = 'https://todoappexamplejs.herokuapp.com/items/'

  constructor(id) {
    this.id = id;
  }

  async perform() {
    const fetchPromise = await fetch(this.BASE_URI + this.id, this._requestOptions());
    return await fetchPromise.json();
  }

  _requestOptions() {
    const result = {
      method: this.requestType(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    return result;
  }
}

document.querySelector('button').addEventListener('click', async function(event) {
  let request = new GetRequest(118);
  let data = await request.perform();
  console.log(data);
})

// https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
// Shallow copy массива
let a = [1,2,3];
let b = a.slice(0);

// Deep copy массива
JSON.parse(JSON.stringify(nodesArray));

// try-catch
// https://learn.javascript.ru/try-catch
try {
  console.log(1);
  noFunction();
  console.log(2);
} catch(e) {
  console.log('Ошибка')
} finally {
  console.log('Конец');
}

try {
  let error = new Error('Что-то странное');
  throw error
} catch(e) {
  console.log(e);
}

if (e instanceof ReferenceError) {
  // ReferenceError action here
}

document.querySelector('button').addEventListener('click', async function(event) {
  try {
    let fetchPromise = await fetch('no_such_url');
    console.log(await fetchPromise.json())
  } catch(e) {
    console.log('Произошла ошибка');
    console.log(e);
  }
})

// Всплытие
// https://learn.javascript.ru/bubbling-and-capturing
document.querySelector('button').addEventListener('click', function(event) {
  console.log(this);
})
document.querySelector('body').addEventListener('click', function(event) {
  console.log(this);
})
