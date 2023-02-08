// Task 1

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter(); // 20

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter(); // 9




// Task 2

class Player {
  static totalRuns = 0;

  constructor(id, name, dob, shirtNumber) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.shirtNumber = shirtNumber;
    this.runs = 0;
  }

  displayInfo() {
    console.log(`Player ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Date of Birth: ${this.dob}`);
    console.log(`Shirt Number: ${this.shirtNumber}`);
  }

  getRuns() {
    return this.runs;
  }

  addRuns(runs) {
    this.runs += runs;
    Player.totalRuns += runs;
  }

  static displayTotalRuns() {
    console.log(`Total runs of all players: ${this.totalRuns}`);
  }

}




// Task 3

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  console.log(
    'Book ' + (i + 1) + ': ' + library[i].title + ' by ' + library[i].author
  );
  console.log(
    'Reading status: ' +
      (library[i].readingStatus ? 'Finished reading' : 'Not yet read')
  );
  console.log('');
}




// Task 4;

class BankAccount {
  constructor(accountId, accountTitle, balance, emailId) {
    this._accountId = accountId;
    this._accountTitle = accountTitle;
    this._balance = balance;
    this._emailId = emailId;
  }

  get accountId() {
    return this._accountId;
  }

  set accountId(value) {
    this._accountId = value;
  }

  get accountTitle() {
    return this._accountTitle;
  }

  set accountTitle(value) {
    this._accountTitle = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  get emailId() {
    return this._emailId;
  }

  set emailId(value) {
    this._emailId = value;
  }

  withdrawAmount(amount) {
    if (amount > this._balance) {
      console.log('Insufficient balance');
    } else {
      this._balance -= amount;
      console.log(
        `${amount} has been withdrawn. Remaining balance: ${this._balance}`
      );
    }
  }

  depositAmount(amount) {
    this._balance += amount;
    console.log(
      `${amount} has been deposited. Current balance: ${this._balance}`
    );
  }
}