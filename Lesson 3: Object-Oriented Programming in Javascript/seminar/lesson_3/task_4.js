/**
 * Создайте класс Animal, который будет представлять животное. У
 * класса Animal должны быть следующие свойства и методы:
 * ● Свойство name (строка) - имя животного.
 * ● Метод speak() - выводит в консоль звук, издаваемый животным.
 * Создайте подкласс Dog, который наследует класс Animal. Для
 * подкласса Dog добавьте дополнительное свойство и метод:
 * ● Свойство breed (строка) - порода собаки.
 * ● Метод fetch() - выводит в консоль сообщение "Собака [name]
 * принесла мяч.".
 */

class Animal {
  name = 'Animal';
  speak() {
    console.log('Boo');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super();
    this.name = name;
    this.breed = breed;
  }
  fetch() {
    console.log(`Dog ${this.name} brought the ball`);
  }
}

const dog = new Dog('sharik', 'boo');
dog.fetch();
delete dog.name;
dog.fetch();
