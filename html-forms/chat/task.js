'use strict'
//HTML-разметка кнопки вызова чата
const messengerButton = document.querySelector('.chat-widget__side');
//HTML-разметка чата
const chatWidget = document.querySelector('.chat-widget');
//Поле ввода чата
const chatWidgetInput = document.getElementById('chat-widget__input');
//Вывод сообщений чата
const messages = document.querySelector('.chat-widget__messages');

//Массив случайных ответов робота
const robotMessages = [
  'Вы ничего не купили, чтобы с нами так разговаривать!',
  'Добрый день! До свидания!',
  'К сожалению все операторы сейчас заняты, не пишите нам больше',
  'Кто тут?',
  'Я робот, я не понимаю человеческую речь!'
];

//Шаблон ответа клиента
const messageClient = (time, text) => {
  return `
  <div class="message message_client">
  <div class="message__time">${time}</div>
  <div class="message__text">${text}</div>
  </div>
  `;
};

//Шаблон ответа робота
const messageRobot = (time, text) => {
  return `
  <div class="message">
  <div class="message__time">${time}</div>
  <div class="message__text">${text}</div>
  </div>
  `;
};

//Вычисление случайного номера в индексном массиве случайных ответов
const randMessNumb = function (min, max) {
    let randNumb = Math.round(Math.random() * (max - min + 1)) + min;
    return (randNumb >= max) ? randNumb - max : randNumb;
}

//Добавление ведущего нуля в отметке времени ответа, если оно меньше 10
const addZero = (time) => {
  return time < 10 ? time = "0" + time : time;
}

//Шаблон вывода времени ответа
const dataMessage = (time) => {
  return `${addZero(time.getHours())}:${addZero(time.getMinutes())}`;
}

//Запуск таймера простоя при активном окне чата
const noMessages = setTimeout(() => {
  if (chatWidget.classList.contains('chat-widget_active')) {
    const rawDateMessage = new Date();
    messages.innerHTML += messageRobot(dataMessage(rawDateMessage), 'Чего надо?');
    messages.scrollIntoView(false);
  }
}, 30 * 1000);

//Прослушка клика кнопки вызова окна чата для перевода его в активное состояние
messengerButton.addEventListener('click', event => {
  chatWidget.classList.add('chat-widget_active');
});

//Прослушка изменения содержимого в виджете ввода сообщения
chatWidgetInput.addEventListener('change', event => {
  event.preventDefault();
  //Остановка таймера простоя
  clearTimeout(noMessages);
  const rawDateMessage = new Date();
  messages.innerHTML += messageClient(dataMessage(rawDateMessage), event.target.value);
  messages.scrollIntoView(false);
  chatWidgetInput.value = '';
});

//Случайные сообщения робота
chatWidgetInput.addEventListener('change', event => {
  event.preventDefault();
  const rawDateMessage = new Date();
  messages.innerHTML += messageRobot(dataMessage(rawDateMessage), robotMessages[randMessNumb(0, robotMessages.length)]);
  messages.scrollIntoView(false);
});