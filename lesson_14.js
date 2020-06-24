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
