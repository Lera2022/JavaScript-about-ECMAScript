// Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать 
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика 
// на 1. Значение счетчика должно быть доступно только через методы объекта, 
// а не напрямую.

const createCounter = () => {
  const counter = 0;
  return {
    increment: () => counter + 1,
    decrement: () => counter - 1
  };
};

const myCounter = createCounter();
console.log(myCounter.increment());
console.log(myCounter.decrement());