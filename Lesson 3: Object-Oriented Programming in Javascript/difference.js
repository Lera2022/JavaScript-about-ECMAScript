// Объект робот-пылесос.
const Djaiv = {
  // Обновляем свойства под конкретную модель.
  model: "Djaiv-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
  // Переопределим метод startCleaning.
  startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей методмы вызвали.
    console.log('I am the method of Djaiv');
    console.log('I am Djaiv, and I am cleaning... I havebeen started: ', this.counterOfStarts, 'times.');
  },
  // Делаем ссылку на прототип от родителя.
  __proto__: DancingSeries,
};

// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started: 1 times.