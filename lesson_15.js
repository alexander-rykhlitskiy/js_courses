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
