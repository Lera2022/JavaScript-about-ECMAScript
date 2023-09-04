/**
 * Напишите конструктор объекта Person, который принимает два аргумента:
 * name (строка) и age (число). Конструктор должен создавать объект с
 * указанными свойствами name и age и методом introduce(), который
 * выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name}. I'm ${this.age} y.o.`);
  }
}

const person1 = new Person('John', 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
