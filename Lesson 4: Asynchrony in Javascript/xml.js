// XHR GET запрос
// Для создания запроса сначала нужно создать объектXMLHttpRequest, конструктор вызывается без аргументов.
const xhr = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...),второй адрес, куда нужно отправить запрос. У данного метода естьеще аргументы, которые мы рассмотрим позже.
xhr.open('GET', 'https://api.github.com/users/octocat');
// Отправляем запрос на сервер. Метод send() может приниматьодин аргумент - это тело запроса, если оно есть. Для методовPOST мы бы передавали тут тело запроса, наш запрос GET не имееттела запроса.
xhr.send();
// После отправки запроса нам нужно использовать методыслушатели, которые будут асинхронно выполнены при наступлениисоответствующего события. Это методы onload, onerror иonprogress - мы сами определяем их функции.
// onload - будет вызван, когда сервер вернет ответ. Это можетбыть положительный ответ сервера с кодом 200 (все хорошо), так иошибка, например страница не найдена, тогда код будет 404. Мыдолжны обрабатывать такие ситуации сами.
xhr.onload = function () {
  if (xhr.status != 200) { // если статус не 200, то произошла ошибка
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`user: ${xhr.response}`); // response - это ответ сервера
  }
};
// onprogress - функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
  console.log(`Get from server: ${event.loaded} bytes`);
  14
};
// onerror - функция будет вызываться если в запросе пошло что-то не так. НАпример нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
  console.log("Request error");
};
// Вывод из функции onprogress.
// Get from server: 1319 bytes
// Вывод из функции onload, приведен не полностью.
user: {
  `
"login": "octocat",
"id": 583231,
"node_id": "MDQ6VXNlcjU4MzIzMQ==",
"avatar_url":
"https://avatars.githubusercontent.com/u/583231?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/octocat",
"html_url": "https://github.com/octocat",
"followers_url":
"https://api.github.com/users/octocat/followers",
"following_url":
"https://api.github.com/users/octocat/following{/other_user}",
...`
}

// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен, прервем его.
xhr.abort();