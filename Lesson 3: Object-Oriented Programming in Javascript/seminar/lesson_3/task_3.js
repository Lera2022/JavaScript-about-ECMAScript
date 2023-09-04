/**
 * Напишите конструктор объекта BankAccount, который будет
 * представлять банковский счет. Конструктор должен принимать два
 * аргумента: accountNumber (строка) и balance (число). Конструктор
 * должен создавать объект с указанными свойствами accountNumber и
 * balance и следующими методами:
 * 1. deposit(amount): принимает аргумент amount (число) и увеличивает
 * баланс на указанную сумму.
 * 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
 * баланс на указанную сумму, если на счету есть достаточно средств.
 * Если средств недостаточно, выводится сообщение "Недостаточно
 * средств на счете.".
 * 3. getBalance(): возвращает текущий баланс счета.
 */

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Not enough money');
      return;
    }
    this.balance -= amount;
  }
  getBalance() {
    return `Balance: ${this.balance}`;
  }
}

const account1 = new BankAccount('1234567890', 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."
