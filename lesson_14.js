// Задание-повторение
// Создать класс ToDoItem, который в конструкторе принимает один параметр id.
// В классе реализовать метод update, который принимает объект полей айтема.
// В теле метода отправляется PUT запрос на обновление.
// Метод возвращает JSON объект, возвращенный сервером.
// Результат вызова метода выводить в консоль по нажатию на кнопку
// <button>Кликни</button>
class ToDoItem {
  constructor(id) {
    this.id = id;
  }

  async update(params) {
    const response = await fetch('https://todoappexamplejs.herokuapp.com/items/' + this.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(params)
    })
    return response.json()
  }
}

document.querySelector('button').addEventListener('click', async function(event) {
  const item = new ToDoItem(114);
  console.log(await item.update({ title: 'alex' }));
})

// Использование других файлов
// <script src="ToDoItem.js"></script>


// Использование сторонних библиотек на примере Lodash https://lodash.com/
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
// ЗАДАНИЕ
// Используя функцию partition https://lodash.com/docs/4.17.15#partition
// разбить массив по урлу 'https://todoappexamplejs.herokuapp.com/items.json' на 2 части по значение поля done.
// Обе части вывести в консоль

document.querySelector('button').addEventListener('click', async function(event) {
  let response = await fetch('https://todoappexamplejs.herokuapp.com/items.json');
  let [done, notDone] = _.partition(await response.json(), item => item.done);
  console.log(done);
  console.log(notDone);
})

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

// ЗАДАНИЕ
// Используяю await/async fetch отправить запрос на несуществующий урл.
// Отловить и вывести в консоль ошибку при помощи try/catch
document.querySelector('button').addEventListener('click', async function(event) {
  try {
    let fetchPromise = await fetch('https://todoappexamplejs.herokuapp.com/error.json');
    console.log(await fetchPromise.json())
  } catch(e) {
    console.log('Произошла ошибка');
    console.log(e);
  }
})

// ЗАДАНИЕ
// Используяю fetch без await/async отправить запрос на несуществующий урл.
// Отловить и вывести в консоль ошибку при помощи .catch(err => {})
document.querySelector('button').addEventListener('click', async function(event) {
  fetch('https://todoappexamplejs.herokuapp.com/error.json')
    .then(response => {
      if (!response.ok) { throw response }
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
      err.text().then(errorMessage => console.log(errorMessage))
    })
})

// https://learn.javascript.ru/promise-api
// Promise.all
Promise.all(promises) // promises - массив промисов
  .then(responses => console.log(responses))

// ЗАДАНИЕ
// Дан массив урлов.
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/turboAlex3000'
];
// Нужно сформировать из этого массива, используя функцию map, массив промисов запросов fetch по этим урлам.
// Используя Promise.all, после завершения всех промисов, 3 раза (по разу для каждого ответа) вывести в консоль урл и статус всех ответов, которые доступны как response.url и response.status

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
  .then(responses => {
    console.log('Ready')
    responses.forEach(response => console.log(`${response.url}: ${response.status}`))
  })

// ЗАДАНИЕ
// Дан массив имен пользователей github
let names = ['iliakan', 'remy', 'jeresig'];
// Нужно сформировать из этого массива, используя функцию map, массив промисов запросов fetch по этим урлам.
// Используя Promise.all, после завершения всех промисов дважды, вывести в консоль имена пользователей.

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => console.log(user.name)));

// Promise.race
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


// Всплытие (bubbling)
// https://learn.javascript.ru/bubbling-and-capturing
document.querySelector('button').addEventListener('click', function(event) {
  console.log(this);
})
document.querySelector('body').addEventListener('click', function(event) {
  console.log(this);
})

// bubbling останавливается при помощи event.stopPropagation()

// REST API

// ЗАДАНИЕ
// Описать в html 3 вложенных div с разными классами.
// На каждый из них повесить обработчик кликов, в котором выводить в консоль тип события и номер div (1,2,3).
// На втором div прекратить bubling.
// Посмотреть вывод в консоли.

// Настройка на windows
// Настройка nodejs
// 1. Скачать https://nodejs.org/ru/#home-downloadhead - кликнуть "LTS Рекомендовано для большинства"
// 2. Установить. Нажимаем везде "Далее". На экране "Tools for Native Modules" нажимаем галочку "Automatically install the necessary tools..."
// 3. В пуск написать "node", кликаем на зеленый значок. В появившемся окне можно, как в консоли в браузере, запускать код JS
// 4. В пуск написать "node.js command prompt", кликаем
// (вы в консоли cmd)
// 4.1 В появившемся окне перейти на диск, на котором расположена ваша папка с проектами. Для этого нужно набрать D: (или C:)
// 4.2 Перейти в папку проекта. Написать "cd путь_к_проекту". Для вложенности использовать \, например "cd папка\другая_папка\моя_папка". Нажать enter
// 4.3 Набрать `npm init`. Нажать enter
// Подсказка: когда написали несколько первых символов имени папки, нажмите tab

// Установка git
// Если не получается, смотрим короткий https://www.youtube.com/watch?v=NkH_7Vrw8AU и длинный видосы https://www.youtube.com/watch?v=clCcy8_AFHM
// 1. Скачать https://git-scm.com/download/win "Click here to download manually"
// 2. Установить. Нажимает Next. На экране "Choosing the default editor used by Git" в селекте выберете ваш редактор или установите и выберете Visual Studio Code
// 3. В пуск написать "git bash"
// (вы в консоли bash)
// 3.1 Перейти в папку с проектами. Написать "cd /диск/папка/myfreedom" или "cd /d/папка/myfreedom"
// 3.2 Выполнить (написать и нажать enter): "ssh-keygen"
// 3.3 Найти путь после "Your public key has been saved in"
// 3.4 Выполнить: "cat тот_путь_из_команды_выше"
// 3.5 Скопировать вывод после команды cat
// 3.6 Зайти на https://github.com/settings/keys. Нажать "New SSH key". Вставить тот вывод в поле "Key". Нажать "Add SSH key"
// 3.7 Вернуться в окно git bash. Выполнить "ssh -T git@github.com". Написать yes, нажать enter. Должно показаться ваше имя пользователя на github
// 3.8 Запустить "ssh-agent"
// 3.9 Зайти на страницу вашего проекта на github. Нажать "Clone". Скопировать урл вида git@github.com:....
// 3.10 Запустить в git bash "git clone скопированный_урл"
// 3.11 Запустить ls. В выведенном списке должна быть папка вашего проекта с github

// Настройка на Mac OSX:
// nodejs
// https://htmlacademy.ru/blog/boost/backend/installing-nodejs

// git
// 1. https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git
// 2. те же пункты, что и для windows, но начиная с 3.1. Запускать приложение terminal. Вместо диска использовать /users/ВашеИмя/

// Настройка на линуксе:
// вы, видимо, разберетесь сами
