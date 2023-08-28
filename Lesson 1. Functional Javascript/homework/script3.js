// Напишем функцию, которая будет находить факториал числа с использованием
// рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  return factorial(number - 1) * number;
}

console.log(factorial(5));
console.log(factorial(0));