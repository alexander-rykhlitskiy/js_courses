## React
Как начать новое приложение на реакт https://ru.reactjs.org/docs/create-a-new-react-app.html#create-react-app

Философия реакт (очень важный туториал) https://ru.reactjs.org/docs/thinking-in-react.html

Да и вообще все туториалы отсюда очень хорошие https://ru.reactjs.org/docs/getting-started.html

Посмотрите простой пример реализации todo app на реакт https://github.com/alexander-rykhlitskiy/react-todo-app

## Firebase

В вашем проекте вы, скорее всего, захотите сохранять какие-то данные. Для этого можно создать свой сервер, если у вас есть опыт серверной разработки, или можно просто использовать firebase cloud firestore. Очень рекомендую последний вариант.

У меня наконец дошли руки сделать минимальный рабочий пример с этой базой https://gist.github.com/alexander-rykhlitskiy/b236dad49b7cb07ea71ad41bb23ee96e

Возможно, у тех, кто пробовал использовать firebase, возникали трудности с созданием проекта (там, действительно, много шагов), поэтому пока можете использовать мой конфиг.

Запустить можно здесь https://stupefied-bhaskara-e079dc.netlify.app/firebase_index.html (да, опять todo app :) )

Как видите, использовать ее очень просто, и, в отличие от localStorage, данные доступны на любом устройстве в любой точке земного шара)

Как настроить ваш личный firebase с регистрацией без смс:
1) открыть и следовать инструкции https://firebase.google.com/docs/firestore/quickstart
2) игнорировать все, что связано с hosting
3) взять конфиг, как показано здесь https://support.google.com/firebase/answer/7015592#web

Если будет нужно для вашего приложения, можно сделать и авторизацию пользователей по логину/паролю.
