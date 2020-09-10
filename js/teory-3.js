//class declaration Объявление класса
class Guest {
  //...
}

// Под капотом класс это функция-конструктор с прототипом
console.log(typeof Guest); // "function"
console.log(Guest.prototype); // {constructor: ƒ}

const guest = new Guest();
console.log(guest); // Guest {}

// constructor
class Guest {
  // аналог функции-конструктора
  constructor(name, roomNumber) {
    this.name = name;
    this.roomNumber = roomNumber;
  }
}

const mango = new Guest("Mango", 26);

console.log(mango); // {name: Mango, roomNumber: 26}
console.log(mango instanceof Guest); // true
console.log(mango instanceof Object); // true

//getFullInfo
class Guest {
  // Аналог функции-конструктора
  constructor(name, roomNumber) {
    this.name = name;
    this.roomNumber = roomNumber;
  }

  // Аналог Guest.prototype.getFullInfo
  getFullInfo() {
    console.log(`
      Guest ${this.name}
      Room number ${this.roomNumber}
    `);
  }
}

const mango = new Guest("Mango", 26);

mango.getFullInfo();
// Guest Mango
// Room number 26

//Геттеры и сеттеры
class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    this._name = name;
    this._roomNumber = roomNumber;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const mango = new Guest("Mango", 26);

// обращение к get и set не требует вызова - т.е. без ()
console.log(mango.name); // Mango

mango.name = "Mango the Fluffy";
console.log(mango.name); // Mango the Fluffy

//Наследование super()

class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`I, ${this.name}, am moving!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Вызвать конструктор Animal с аргументом name
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("woof!");
  }

  moveAndMakeSound() {
    super.move();
    this.bark();
  }
}

const dog = new Dog("Mango", "shepherd");

dog.move(); // I, Mango, am moving!
dog.bark(); // woof!
dog.moveAndMakeSound(); // I, Mango, am moving! woof!
