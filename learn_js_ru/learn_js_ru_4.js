'usestrict';

// console.log('');

// let user1 = new Object(); // синтаксис "конструктор объекта"
// let user2 = {};  // синтаксис "литерал объекта"

// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   };
// console.log( user.name );
// console.log( user.age );

// user.isAdmin = true;
// delete user.age;

// console.log( user.name );
// console.log( user.age );

// let key = prompt('What?', 'name');
// console.log(user[key]);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//   };


//   let user = {};

//   // присваивание значения свойству
//   user["likes birds"] = true;
  
//   // получение значения свойства
//   alert(user["likes birds"]); // true

//   // удаление свойства
//   delete user["likes birds"];

// let key = "likes birds";
// // то же самое, что и user["likes birds"] = true;
// user[key] = true;

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log( bag.apple ); // 5, если fruit="apple"

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};

// // имя свойства будет взято из переменной fruit
// bag[fruit] = 5;

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//       // ...другие свойства
//     };
//   }
  
//   let user = makeUser("John", 30);
//   console.log(user.name, user.age); // John, 30
//                      OR
// function makeUser(name, age) {
//     return {
//       name, // то же самое, что и name: name
//       age   // то же самое, что и age: age
//       // ...
//     };
//   }
//   let user = makeUser("John", 30);
//   console.log(user.name, user.age); // John, 30

// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true
// }
// for (let key in user) {
//     console.log(key);
//     console.log(user[key])
//     }

// let codes = {
//     "49" : "Germany",
//     "41" : "Sheveicaria",
//     "44" : "England",
//     "89" : "Ukraine",
//     "1" : "USA" 
// }
// for (let countries in codes) {
//     console.log(countries);
//     console.log(codes[countries]);
// }

// let countries = {
//     "+49" : "Germany",
//     "+41" : "Sheveicaria",
//     "+44" : "England",
//     "+89" : "Ukraine",
//     "+1" : "USA" 
// }
// for (let codes in countries) {
//     console.log(codes);
//     console.log(countries[codes]);
// }

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);
// console.log(user.surname);

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// // user.name = 'Pete';
// // delete user.name;
// console.log(user);
// console.log(user.surname);
// console.log(user.log);

// let obj2 = {
//     Ivan : 'Ivanov',
//     Petr : 'Petrov',
//     Sidr : 'Sidorov'
// };
// console.log(obj2)
// function isEmpty(obj2) {
//     let result = obj2 ? true : false;
//     console.log(result);
// }
// isEmpty();
// console.log( isEmpty(schedule) ); // true

// let real1 = 245;
// let real2 = real1 ? true : false;
// console.log(real1);
// console.log(real2);

// function isEmpty(schedule) {
//     for (let key in schedule) {
//         return false;
//     }
// }
// let schedule = {}
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key];
//     }
// console.log(sum);
    // console.log(key);
    // console.log(salaries);
    // console.log(key[salaries]);
    // console.log(salaries[key]);
    // let sum = 0;
    // sum += salaries[key];
    // console.log(sum)

// multiplyNumeric(obj)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric() {
//     for (let key in menu) {
//         menu[key] = Number(menu[key]);
//         if (menu[key] == Number) {
//             let sum = 0;
//             sum += menu[key];
//         } else {
//             continue;
//         }
//         console.log(sum);
//     }    
// }
// multiplyNumeric(menu);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric();
// console.log(menu)

// let message = 'Hello';
// console.log(message);
// let phrase = message;
// console.log(phrase);
// message = 'Hi';
// console.log(message);
// console.log(phrase);

// let obj3 = { name : 'Peter'};
// let obj4 = obj3;
// obj4.name = 'not Peter';
// console.log(obj4);
// console.log(obj3);

// console.log(obj3 == obj4);
// console.log(obj3 === obj4);

// let obj5 = {};
// let obj6 = {};
// console.log(obj5 == obj6);
// console.log(obj5 === obj6);

// let data1 = 'data';
// let data2 = data1;
// data2 == 'not data';
// console.log(data1 == data2);
// console.log(data1 === data2);

// let data3;
// let data4;
// console.log(data3 == data4);
// console.log(data3 === data4);

// let user3 = {
//     name1: 'Ivan',
//     age1: 30
// }
// let clone = {};
// for (let key in user3) {
//     clone[key] = user3[key];
// }
// console.log(clone);
// console.log(user3);
// clone.name1 = 'Obivan';
// console.log(clone);
// console.log(user3);

// let obj7 = { name : 'Oba', age : 30};
// let obj8 = { name : 'Aba', age : 35};
// let obj9 = { name : 'Oba', age : 30};
// console.log(obj7);
// console.log(obj8);
// console.log(obj9);
// let obj10 = {};
// console.log(obj10);
// Object.assign(obj10, obj7, obj8, obj9);
// console.log(obj10);

// let user = { name: "Иван" };
// console.log(user);
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// console.log(permissions1);
// console.log(permissions2);
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);
// console.log(user);
// // теперь user = { name: "Иван", canView: true, canEdit: true }

// let user = { name: "Иван" };
// Object.assign(user, {name : 'Peter'});
// console.log(user.name);

// let user = {
//     name: "Иван",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);
//   console.log(user);
//   console.log(clone);

// let obj11 = {
//     name1 : 'Bill',
//     name2 : {
//         name3 : 'not Bill',
//     }
// }
// console.log(obj11.name2.name3);

// let user = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// let clone = Object.assign({}, user);
// console.log(user.sizes == clone.sizes);
// console.log(user.sizes === clone.sizes);
// user.sizes.width++;
// console.log(clone.sizes.width);

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });
// delete family.father;
// delete family.mother.husband;

// // эти объекты делают одно и то же (одинаковые методы)
// user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };
// // сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     alert("Привет");
//   }
// };

// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//       // this - это "текущий объект"
//       alert(this.name);
//     }
//   };
//   user.sayHi(); // Джон

// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//       alert(user.name); // используем переменную "user" вместо ключевого слова "this"
//     }
//   };

// let user = {
//     name: "Джон",
//     age: 30,
//       sayHi() {
//       alert( user.name ); // приведёт к ошибке
//     }
//   };  
//   let admin = user;
//   user = null; // обнулим переменную для наглядности, 
// //   теперь она не хранит ссылку на объект.  
//   admin.sayHi(); // Ошибка! Внутри sayHi() используется user, 
// //   которая больше не ссылается на объект!

// ***

// let calculator = {
//     read(){
//         this.num1 = +prompt('num1?', '2');
//         this.num2 = +prompt('num2?', '2');
//     },
    

//     // let sum = (num1, num2) => num1 + num2,
//     // let mul = (num1, num2) => num1 * num2,
  
//     sum() {
//     return this.num1 + this.num2;
//     },
  
//     mul() {
//     return this.num1 * this.num2;
//     },
// };
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', '2');
//         this.b = +prompt('b?', '2');
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       console.log( this.step );
//     }
//   };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ***

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       console.log( this.step );
//       return this;
//     }
//   };

// ladder.up().up().down().up().down().showStep().up().showStep();

// ***

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Вася");
  
//   alert(user.name); // Вася
//   alert(user.isAdmin); // false

// ***

// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "Меня зовут: " + this.name );
//     };
//   }
  
//   let vasya = new User("Вася");
  
//   vasya.sayHi(); // Меня зовут: Вася
  
//   /*
//   vasya = {
//      name: "Вася",
//      sayHi: function() { ... }
//   }
//   */

// ***

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', '2');
//         this.b = +prompt('b?', '2');
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// ***

// let calculator = new Calculator(a, b) {
//     sum() {
//         return this.a + this.b;
//     },
        
//     mul() {
//         return this.a * this.b;
//     },
        
//     read() {
//         this.a = +prompt('a?', '2');
//         this.b = +prompt('b?', '2');
//         },
// };
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// ***

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', '2');
//         this.b = +prompt('b?', '2');
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// };


// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// ***

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('data?', '1');
//     };

// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// ***

// let userInfo = {
//     name1 : 'Vasya',
//     age : 30,
// }
// console.log(userInfo);
// userInfo.name1 = 'Lena';
// console.log(userInfo);
// delete userInfo.name1;
// console.log(userInfo);

// ***

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 == id2); // false

// ***

// let id1 = Symbol("id1");
// alert(id1); 
//TypeError: Cannot convert a Symbol value to a string

// let id2 = Symbol("id2");
// console.log(id2.toString());

// let id = Symbol("id");
// console.log(id.description); // id //
//можем обратиться к свойству symbol.description, чтобы вывести 
// только описание:

// ***

// let user = {
//     name : "Vasya"
// };

// let id = Symbol("idid");

// user[id] = 1;

// alert(user[id]);

// мы можем получить доступ к данным по ключу-символу

//***

// let id = Symbol("id");

// let user = {
//     name: "Tom",
//     [id]: 123,
// };

//***

// let id = Symbol("id");
// let user = {
//     name: "Tom",
//     age: 30,
//     [id]: 'begin',
// };

// for (let key in user) alert(key);

// alert( "completly " + user[id]);

//***

// let id = Symbol("id");
// let user = {
//     [id]: 123
// };

// let clone = Object.assign({}, user);

// alert(clone[id]);

//***

// let id = Symbol.for("id");

// let idAgain = Symbol.for("id");

// alert(id === idAgain);

///***

// // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id

///***

// let user = {
//     name: "Tom",
//     age: 30,

//     [Symbol.toPrimitive](hint){
//         console.log(`hint: ${hint}`);
//         return hint = "string" ? `{name: "${this.name}"}` : this.age;
//     }
// };

// // демонстрация результатов преобразований:
// console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

///***

// let user = {name: "John"};

// alert(user); // [object Object]
// alert(user.valueOf() === user); // true

///***

// let user = {
//     name: "Tom",
//     money: 1000,

//     toString() {
//         return `{name: "${this.name}"}`;
//     },
    
//     valueOf() {
//         return this.money;
//     },

// };

// console.log(user);
// console.log(+user);
// console.log(user + 500);


///***

// let user = {
//     name: "Tom",

//     toString() {
//         return this.name;
//     },

// };
// console.log(user);
// console.log(+user);
// console.log(user + 500);

///***

// let obj = {
//     // toString обрабатывает все преобразования в случае отсутствия 
//     других методов
    
//     toString() {
//       return "2";
//     }
//   };
  
//   alert(obj * 2); // 4, объект был преобразован к примитиву "2", 
//   затем умножение сделало его числом

///***

// let obj = {
//     toString() {
//       return "2";
//     }
//   };
  
//   alert(obj + 2); // 22 ("2" + 2), преобразование к примитиву 
//   вернуло строку => конкатенация

///***

