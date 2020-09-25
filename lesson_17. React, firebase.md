## React
Как начать новое приложение на реакт https://ru.reactjs.org/docs/create-a-new-react-app.html#create-react-app \
Философия реакт (очень важный туториал) https://ru.reactjs.org/docs/thinking-in-react.html \
Да и вообще все туториалы отсюда очень хорошие https://ru.reactjs.org/docs/getting-started.html. Рекомендую прочитать всё в "Основные понятия".

Простой пример реализации todo app на реакт https://github.com/alexander-rykhlitskiy/react-todo-app \
Даже по этому простому примеру видно, что за счет компонентов, объединяющих логику (js) и представление (html), реакт дает очень удобные:
1) шаблоны для html
2) управление событиями
3) связывание состояния объекта js (компонента) и html (шаблона)

В этом примере были использованы следующие понятия реакта:
1) компоненты https://ru.reactjs.org/docs/components-and-props.html
2) jsx https://ru.reactjs.org/docs/introducing-jsx.html
3) props и state https://ru.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props
4) refs. Их использование противоречит философии реакт, но позволяет вставить "элегантный костыль" https://ru.reactjs.org/docs/refs-and-the-dom.html. Согласно философии реакт, несмотря на большее кол-во кода, в этом примере лучше использовать состояния, как здесь https://ru.reactjs.org/docs/forms.html
