/*Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?

 */
let divElement = document.body.children[0]
let ulElement = document.body.children[1]
let liElement = document.body.children[1].children[1];
