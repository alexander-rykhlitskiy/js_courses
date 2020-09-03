// https://learn.javascript.ru/promisify

// ЗАДАНИЕ
// Добавить в каждый li кнопку "Удалить". При нажатии на эту кнопку отправляется DELETE запрос, который удалит задачу. Также этот li нужно удалить со страницы
// Для получения урла можно к урлу https://todoappexamplejs.herokuapp.com/items/ добавить id из JSON-а в теге div. Получится урл https://todoappexamplejs.herokuapp.com/items/123


// ЗАДАНИЕ
// Добавить в каждый li тег input и кнопку "Обновить". При нажатии на эту кнопку отправляется PUT запрос, который должен проставить в title содержимое инпута.

function sendRequestDeleteTask(task) {
  return fetch('https://todoappexamplejs.herokuapp.com/items/' + task.id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
    .then()
}

function sendRequestUpdateTask(task, title) {
  return fetch('https://todoappexamplejs.herokuapp.com/items/' + task.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ title: title })
  })
    .then(response => response.json())
}

fetch('https://todoappexamplejs.herokuapp.com/items.json')
  .then(response => response.json())
  .then(tasks => {
    let ul = document.querySelector('ul');
    for (let task of tasks) {
      let li = document.createElement('li');
      let div = document.createElement('div');
      div.textContent = JSON.stringify(task);
      li.appendChild(div);
      ul.appendChild(li);

      let button = document.createElement('button');
      button.textContent = 'Удалить';
      li.appendChild(button);

      let input = document.createElement('input');
      li.appendChild(input);

      let inputButton = document.createElement('button');
      inputButton.textContent = 'Обновить';
      li.appendChild(inputButton);

      button.addEventListener('click', function() {
        sendRequestDeleteTask(task)
          .then(() => li.remove())
      })

      inputButton.addEventListener('click', function() {
        sendRequestUpdateTask(task, input.value)
          .then(task => div.textContent = JSON.stringify(task));
      })
    }
  })


// ЗАДАНИЕ
// Реализовать функцию delay, которая позволяет вызвать коллбэк через 1 секунду. Использовать промис.
function delay() {
  let promise = new Promise(function(resolve) {
    setTimeout(function() { resolve(123) }, 1000)
  });
  return promise;
}
delay().then(number => console.log(number))

// ЗАДАНИЕ
// Реализовать функцию httpGet из предыдущего занятия, которая принимает урл и возвращает промис, на котором можно вызвать then и передать туда функцию, которая выполнится, когда запрос завершится. Т.о. должен работать следующий код
let promise = httpGet('https://todoappexamplejs.herokuapp.com/items.json');
promise.then(response => document.body.innerText = response)

// Реализация:
const url = 'https://todoappexamplejs.herokuapp.com/items.json';
httpGet(url).then(response => document.body.textContent = response);

function httpGet(url) {
  return new Promise(function(resolve) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      resolve(xhr.responseText);
    };

    xhr.send();
  });
}

let promise = httpGet('https://todoappexamplejs.herokuapp.com/items.json');
promise.then(response => document.body.innerText = response)

// https://learn.javascript.ru/promise-chaining
