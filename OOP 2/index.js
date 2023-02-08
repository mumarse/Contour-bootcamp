// Task 1

// Task 1 Part 1
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  findRadius() {
    return this.radius;
  }
}

const circle = new Circle("red", 5);
console.log(`Color: ${circle.color}`);
console.log(`Radius: ${circle.findRadius()}`);



// Task 1 Part 2
// class Animal {
//   constructor() {}

//   speak() {
//     console.log("Animal is speaking");
//   }
// }

// class ChildClass extends Animal {
//   constructor() {
//     super();
//   }

//   speak() {
//     console.log("Child class is speaking");
//   }

//   eat() {
//     console.log("Child class is eating");
//   }
// }

// const animal = new Animal();
// animal.speak(); // Animal is speaking

// const child = new ChildClass();
// child.speak(); // Child class is speaking
// child.eat(); // Child class is eating


// Task 1 Part 3
class Animal {
  speak() {
    console.log("Animal Speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }

  eat() {
    console.log("Dog eats");
  }
}

const dog = new Dog();
dog.speak(); // outputs "Dog barks"
dog.eat(); // outputs "Dog eats"
Dog.prototype.__proto__.speak.call(dog); // outputs "Animal speaks"


// Task 1 Part 5
// let parent = {
//   speak: function() {
//     console.log("Parent speaks");
//   }
// };

// let child = {};
// child.__proto__ = parent;
// child.speak(); // outputs "Parent speaks"



// Task 2:
class Human {
  constructor(name, food, shoes) {
    this.name = name;
    this.food = food;
    this.shoes = shoes;
  }

  eat() {
    console.log(`My name is ${this.name}. I eat ${this.food}.`);
    return this;
  }

  sleep() {
    console.log(`My name is ${this.name}. I sleep.`);
    return this;
  }

  walk() {
    console.log(`My name is ${this.name}. I walk using ${this.shoes}.`);
    return this;
  }
}

const human = new Human("John", "apple", "sneakers");
human.eat().sleep().walk();



// Task 3
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = num1 + num2;
  }

  add() {
    console.log(`Result of addition: ${this.result}`);
    return this;
  }

  minus(num3) {
    this.result -= num3;
    return this;
  }

  multi(num4) {
    this.result *= num4;
    return this;
  }

  divide(num5) {
    this.result /= num5;
    return this;
  }
}
const calculator = new Calculator(2, 3);
calculator.add().minus(1).multi(2).divide(4);
console.log(`Final result: ${calculator.result}`);



// Task 4
const AbstractClass = (function () {
  const AbstractClass = function () {
    if (new.target === AbstractClass) {
      throw new Error("You cannot create object of abstract class");
    }
  };

  AbstractClass.prototype.parentMethod = function () {};

  return AbstractClass;
})();

class ChildClass extends AbstractClass {
  constructor() {
    super();
  }

  parentMethod() {
    console.log("Implemented in child class");
  }
}
const child = new ChildClass();
child.parentMethod();
const parent = new AbstractClass(); // Throws an error "You cannot create object of abstract class"