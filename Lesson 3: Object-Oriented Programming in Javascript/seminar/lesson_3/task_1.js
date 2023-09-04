'use strict';
/**
 * Напишите функцию getPrototypeChain(obj), которая будет
 *  возвращать цепочку прототипов для заданного объекта
 *  obj. Функция должна вернуть массив прототипов, начиная
 *  от самого объекта и заканчивая глобальным объектом
 *  Object.prototype.
 * @param {object} obj
 */
const getPrototypeChain = (obj) => {
  let current = obj;
  const outArr = [];
  while (current) {
    outArr.push(current);
    current = current.prototype;
  }
  console.log(current);
  console.log(outArr);
};

const obj1 = {
  a: 1,
  b: 2,
};
obj1.prototype = globalThis;
const obj2 = {
  c: 3,
};
obj2.prototype = obj1;
const obj3 = {
  d: 4,
};
obj3.prototype = obj2;
getPrototypeChain(obj3);
