// Task 1

// class Student {
//   constructor(name, roll_no) {
//     this.name = name;
//     this.roll_no = roll_no;
//   }
// }
// let student = new Student("John", 2);



// Task 2

class Student {
  constructor(name, rollNumber, phoneNumber, address) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

const student1 = new Student("Sam", 1, "+92 123 1234567", "42 Guberg Lahore");
const student2 = new Student("John", 2, "+92 123 1234567", "42 Guberg Lahore");

console.log("Sam's information:", student1);
console.log("John's information:", student2);





// Task 3

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    let semiPerimeter = (this.side1 + this.side2 + this.side3) / 2;
    let area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.side1) *
        (semiPerimeter - this.side2) *
        (semiPerimeter - this.side3)
    );
    return area;
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}
const triangle = new Triangle(5, 8, 4);
const area = triangle.calculateArea();
const perimeter = triangle.calculatePerimeter();

console.log("Area of triangle:", area);
console.log("Perimeter of triangle:", perimeter);





// Task 4

class Employee {
  constructor(name, yearOfJoining, salary, address) {
    this.name = name;
    this.yearOfJoining = yearOfJoining;
    this.salary = salary;
    this.address = address;
  }
}

const Robert = new Employee("Robert", 1994, "undisclosed", "64C- WallsStreat");
const Sam = new Employee("Sam", 2000, "undisclosed", "68D- WallsStreat");
const John = new Employee("John", 1999, "undisclosed", "26B- WallsStreat");

console.log("Name\t    Year of joining\t         Address");
console.log( Robert.name + "\t\t" + Robert.yearOfJoining + "\t\t\t\t" + Robert.address );
console.log(Sam.name + "\t\t\t" + Sam.yearOfJoining + "\t\t\t\t" + Sam.address);
console.log(John.name + "\t\t" + John.yearOfJoining + "\t\t\t\t " + John.address);






// Task 5

class Bank {
  constructor(balance, personName) {
    this._balance = balance;
    this.personName = personName;
  }

  setPersonName(personName) {
    this.personName = personName;
  }

  get balance() {
    return this._balance;
  }

  showBalance(name) {
    if (this.personName === name){
      return `Your balance is ${this.balance}`;
    } else {
      return `You are not authorized.`;
    }
  }
}

const bank = new Bank(1000, "Ali");
console.log(bank.showBalance("Ali"));
console.log(bank.showBalance("John"));