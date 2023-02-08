// Task 11
class Payment {
  constructor(amount) {
    this.amount = amount;
  }

  paymentDetails() {
    return `The payment amount is $${this.amount}.`;
  }
}

class CashPayment extends Payment {
  constructor(amount) {
    super(amount);
  }

  paymentDetails() {
    return `${super.paymentDetails()} (in cash)`;
  }
}

class CreditCards {
  constructor(name, expDate, cardNumber) {
    this.name = name;
    this.expDate = expDate;
    this.cardNumber = cardNumber;
  }
}

class CardPayment extends Payment {
  constructor(amount, creditCard) {
    super(amount);
    this.creditCard = creditCard;
  }

  paymentDetails() {
    return `${super.paymentDetails()} (with card)\n
              Name on Card: ${this.creditCard.name}\n
              Expiration Date: ${this.creditCard.expDate}\n
              Card Number: ${this.creditCard.cardNumber}`;
  }
}

function main() {
  const payments = [
    new CashPayment(100),
    new CashPayment(200),
    new CardPayment(
      300,
      new CreditCards("John Doe", "01/2025", "1234 5678 1234 5678")
    ),
    new CardPayment(
      400,
      new CreditCards("Jane Doe", "06/2022", "4321 8765 4321 8765")
    ),
  ];

  payments.forEach((payment) => {
    console.log(payment.paymentDetails(), "\n");
  });
}
main();





// Task 2
class Employee {
  constructor(salary, hours) {
    this._salary = salary;
    this._hours = hours;
    }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }

  get hours() {
    return this._hours;
  }

  set hours(value) {
    this._hours = value;
  }

  getInfo() {
    console.log(`Salary: ${this._salary}`);
    console.log(`Hours of work per day: ${this._hours}`);
  }

  addSal() {
    if (this._salary < 500) {
      this._salary += 10;
    }
  }

  addWork() {
    if (this._hours > 6) {
      this._salary += 5;
    }
  }
}

let emp1 = new Employee(450, 8);
let emp2 = new Employee(400, 4);

emp1.addSal();
emp1.addWork();

emp2.addSal();
emp2.addWork();

console.log("Employee 1:");
emp1.getInfo();

console.log("Employee 2:");
emp2.getInfo();





// Task 3

class Game {
  info() {
    return "I love games and sports";
  }
}

class Cricket extends Game {
  info() {
    return "I love cricket";
  }
}

class Football extends Game {
  info() {
    return "I love football";
  }
}

const game = new Game();
const cricket = new Cricket();
const football = new Football();

console.log(game.info());
console.log(cricket.info());
console.log(football.info());




// Task 4

class Car {
  constructor() {
    this.name = null;
    this.make = null;
    this.color = null;
    this.speed = null;
  }

  setName(name) {
    this.name = name;
  }

  setMake(make) {
    this.make = make;
  }

  setColor(color) {
    this.color = color;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Make: ${this.make}`);
    console.log(`Color: ${this.color}`);
    console.log(`Speed: ${this.speed}`);
  }
}

const car = new Car();
car.setName("Tesla");
car.setMake("Tesla");
car.setColor("Red");
car.setSpeed(200);
car.print();