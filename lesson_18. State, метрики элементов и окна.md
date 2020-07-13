## State
https://github.com/alexander-rykhlitskiy/todoapp/blob/master/simulacra_index.html

## Метрики
https://learn.javascript.ru/size-and-scroll \
https://learn.javascript.ru/size-and-scroll-window \
https://learn.javascript.ru/coordinates

```html
  <div id="example">
    ...Текст...
  </div>
  <style>
    #example {
      width: 300px;
      height: 200px;
      border: 25px solid #E8C48F;
      padding: 20px;
      overflow: auto;
      position: absolute;
      transition: 0.4s ease;
    }
  </style>

  <script type="text/javascript">
    example.style.top = '0px'
    example.style.left = '0px'
    setTimeout(() => {
      example.style.top = '200px'
      example.style.left = '200px'
    }, 3000)
  </script>
```

```js
document.documentElement.clientWidth
document.documentElement.clientHeight
Math.random()
```

ЗАДАНИЕ \
Создать квадратный div на html. При наведении мышки на div (событие mousemove), он должен перемещаться в случайное место на экране

## Yandex карты
https://github.com/alexander-rykhlitskiy/yandex_map_example

Для того, чтобы на страницу одного ресурса передать id, можно использовать query `&myParam=123`. А на самой странице вызывать такой JS:

```js
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');
```
