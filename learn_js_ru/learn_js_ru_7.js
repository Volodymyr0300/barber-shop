"use strict";

/*
let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 1));
*/
/*
let user = {};

Object.defineProperty(user, "name", {
  value: "John",
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));
*/
/*
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.name);
console.log(user.surname);
console.log(user);

user.fullName = "Alice Cooper";

console.log(user.name);
console.log(user.surname);
console.log(user);
*/
/*
let user = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user.fullName);

for (let key in user) console.log(key);
*/
/*
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
		console.log("Имя слишком короткое, должно быть более 4 символов");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Имя слишком короткое...
*/
/*
function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

console.log(john.age); // 25
console.log(typeof User);
*/
/*
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // возраст рассчитывается из текущей даты и дня рождения
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday); // доступен как день рождения
console.log(john.age); // ...так и возраст
*/
/*
let n = 200;
function num(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(num(n));
*/
/*
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};
let longEar = {
  earLenght: 10,
  __proto__: rabbit,
};
longEar.walk();
console.log(longEar.jumps);
*/
/*
let animal = {
  eats: true,
  walk() {},
};
let rabbit = {
  __proto__: animal,
};
rabbit.walk = function () {
  console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk();
*/
/*
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper
*/
/*
// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)
*/
/*
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};
console.log(Object.keys);
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
*/
/*
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.pen);
console.log(bed.glasses);
*/
/*
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
*/
/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
*/
/*
function Rabbit(name) {
  this.name = name;
  console.log(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
*/
/*
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype);

console.log(arr.__proto__.__proto__.__proto__);
alert(arr);
*/
/*
String.prototype.show = function() {
	alert(this);
};

"BOOM!".show();
*/
/*
if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
}
alert("La".repeat(3));
*/
/*
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert(obj.join(", ")); // Hello,world!
*/
/*
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello");
}

f.defer(1000);
*/
/*
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

// check it
function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
*/
/*
let animal = {
  eats: true,
};

// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); 
// получаем прототип объекта rabbit

Object.setPrototypeOf(rabbit, {}); 
// заменяем прототип объекта rabbit на {}
*/
// -----
/*
let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
*/
/*
function getLargestExpressionResultOfThree(a, b) {
  // write code here
  if (a + b > a - b && a + b > a * b && a + b > a / b) {
    return a + b;
  }
  if (a - b > a + b && a - b > a * b && a - b > a / b) {
    return a - b;
  }
  if (a * b > a + b && a * b > a - b && a * b > a / b) {
    return a * b;
  }
  if (a / b > a + b && a / b >= a - b && a / b >= a * b) {
    return a / b;
  }
}
console.log(getLargestExpressionResultOfThree(-5, -1));
console.log(-5 + -1);
console.log(-5 - -1);
console.log(-5 * -1);
console.log(-5 / -1);
*/
