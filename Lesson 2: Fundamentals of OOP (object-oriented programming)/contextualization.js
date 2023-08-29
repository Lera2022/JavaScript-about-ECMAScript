// Объект Roomba - робот-пылесос. Код самого объекта смотри влистинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобыпродемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,хранящегося в свойстве объекта, а также от того как этот методбыл вызван(об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...

// Объект Roomba - робот-пылесос. Код самого объекта смотри влистинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(function () {
  Roomba.startCleaning();
}, 1000);
// Установим свойства объекта isUVLampOn в true, чтобыпродемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,хранящегося в свойстве объекта, а также от того как этот методбыл вызван(об этом поговорим чуть ниже).
setTimeout(function () {
  Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
  Roomba.goCharge();
}, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...

// Объект Roomba - робот-пылесос. Код самого объекта смотри влистинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
// Вызов метода объекта через call с явной передачей объектаробота - пылесоса в качестве контекста.
Roomba.startCleaning.call(Roomba); // I am cleaning... I havestarted: 1 times.
// Тут этот пример не очень показателен, т.к. Мы и так имелидоступ к объекту, а внутри setTimeout использовать call возможнотолько обернув все это в анонимную функцию, но тоже бессмысленно,потому что тогда мы снова имеем доступ к объекту, как видели впрошлом примере.Но мы можем передать в callдругой объект иувидеть что функция вызывается в контексте другого объекта:
// Создадим фиктивный объект робота, который содержит только односвойство, необходимое для работы функции и сразу же зададим емупервоначальное значение, отличное от того, которое задано уробота, для наглядности.
// const notARobot = {
  // counterOfStarts: 10,
// };
Roomba.startCleaning.call(notARobot); // I am cleaning... I havebeen started: 11 times.

// Объект Roomba - робот-пылесос. Код самого объекта смотри впервом листинге.
const notARobot = {
  counterOfStarts: 10,
};
// Пример использования метода apply, для вызова функции спередачей в качестве контекста объекта notARobot и передачей внеё аргументов arg1, arg2, arg3.
  Roomba.startCleaning.apply(notARobot, [arg1, arg2, arg3]); // Iam cleaning...I have been started: 11 times.

  // Объект Roomba - робот-пылесос. Код самого объекта смотри в  листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
// В setTimeout мы передаем не просто наш метод, а функцию,которая привязана к нашему объекту.Метод bind возвращает новуюфункцию, с уже привязанным контекстом, именно она вызывается поистечении времени.
  setTimeout(Roomba.startCleaning.bind(Roomba), 1000);
// Установим свойства объекта isUVLampOn в true, чтобыпродемонстрировать результат работы метода switchUVLamp.
  Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,хранящегося в свойстве объекта, а также от того как этот метод13был вызван(об этом поговорим чуть ниже).
  setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);
// I am cleaning... I have been started: 1 times.
// UV lamp is not working.
// I am going to charge...

const Roomba = {
  model: "Romba-1",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // После свойств объявляют его методы.
  startCleaning: () => {
    this.counterOfStarts++;
    console.log('I am cleaning... I have started: ',
      this.counterOfStarts, 'times.');
  },
  goCharge: () => {
    console.log('I am going to charge...');
  },
  switchUVLamp: () => {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
      'not working'}.`);
    14
  }
};

// Объект Roomba - робот-пылесос. Код самого объекта смотри влистинге 16, с использованием синтаксиса ES2015.
  // Вызов методов объекта.
  Roomba.startCleaning(); // I am cleaning... I have started: NaN
times.
  Roomba.startCleaning.call(Roomba); // I am cleaning... I havestarted: NaN times.
  Roomba.startCleaning.apply(Roomba); // I am cleaning... I havestarted: NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod(); // I am cleaning... I have been started: NaN
times.
  setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I amcleaning...I have started: NaN times.

const Stand = {
  model: "Stand-1",
  robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
  // Метод, с использованием стрелочной функции в качестве  функции обратного вызова.
    startTestingArrow: function() {
      console.log('Start testing...');
      this.robots.forEach((value) => {
        console.log('stand: ', this.model, 'is testing robot: ',
          value);
      })
    },
  // Метод, с использованием классической функции в качестве функции обратного вызова.
    startTestingClassic: function() {
      console.log('Start testing...');
      this.robots.forEach(function (value) {
        console.log('stand: ', this.model, 'is testing robot: ',
          value);
      })
    },
};
Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2

38