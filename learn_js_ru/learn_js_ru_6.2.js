"use strict";

/*
function pow(x, n) {
  let result = 1;

  // умножаем result на x n раз в цикле
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(pow(2, 3)); // 8

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 3)); // 8

function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
console.log(pow(2, 3)); // 8
*/

/*
let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); 
    // сумма элементов массива
  } else {
    // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); 
      // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700
*/

/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

let secondList = list.next.next;
list.next.next = null;

list.next.next = secondList;
*/

/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 50

Сделайте три варианта решения:

1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
*/

/*
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

// 1.
let dateFor1 = new Date();

function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(10));
let dateFor2 = new Date();

console.log(diffGetTime(dateFor1, dateFor2));

// 2.1.
let dateRecursion1 = new Date();

function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(10));
let dateRecursion2 = new Date();

console.log(diffGetTime(dateRecursion1, dateRecursion2));

// 2.2.
let dateRecursionShort1 = new Date();

function sumTo(n) {
  return n == 1 ? n : n + sumTo(n - 1);
}
console.log(sumTo(10));
let dateRecursionShort2 = new Date();

console.log(diffGetTime(dateRecursionShort1, dateRecursionShort2));

// 3.
let dateRecursionAriphmetick1 = new Date();

function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo(10));
let dateRecursionAriphmetick2 = new Date();

console.log(diffGetTime(dateRecursionAriphmetick1, dateRecursionAriphmetick2));
*/

/*
Вычислить факториал

Факториал натурального числа – это число, умноженное на "себя минус один", 
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

/*
function factorial(n) {
  return (n == 1) ? n : n * factorial(n - 1);
  // OR
  // return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));
*/

/*
Числа Фибоначчи

Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. 
То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) 
и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением 
и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) {  ваш код  }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. 
Вызов fib(77) должен занимать не более доли секунды.
*/

/*
function fib(n) {
  //   if (n <= 1) {
  //     return n;
  //   } else {
  //     return fib(n - 1) + fib(n - 2);
  //   }
  // OR
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7));

// OR

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
*/

/*
Вывод односвязного списка

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(typeof list);
console.log(list);

// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

function printList(list) {
  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}

printList(list);
*/

/*
Вывод односвязного списка в обратном порядке

Выведите односвязный список из предыдущего задания Вывод односвязного списка 
в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);
*/

// let n = Math.max(1, 2, 3, 4, 5);
// console.log(n);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5));

// function sumAll(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// console.log(sumAll(1));
// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3));

/*
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Юлий Цезарь
  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log(titles[0]); // Консул
  console.log(titles[1]); // Император
  console.log(titles.length); // 2
}
showName("Юлий", "Цезарь", "Консул", "Император");

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");
*/

// let arr = [3, 1, 5];
// console.log(Math.max(...arr));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1));
// console.log(Math.max(...arr2));
// console.log(Math.max(...arr1, ...arr2)); // 8

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];
// let merged = [0, ...arr, 2, ...arr2];
// console.log(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

// let str = "Привет";
// console.log( [...str] ); // П,р,и,в,е,т

// let str = "Привет";
// // Array.from преобразует перебираемый объект в массив
// console.log( Array.from(str) ); // П,р,и,в,е,т

/*
let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3
*/

/*
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
*/

/*
{
  // do some job with local variables that should not be seen outside
  let message = "Hello"; // only visible in this block
  console.log(message); // Hello
}
console.log(message); // Error: message is not defined
*/

/*
// show message
let message = "Hello";
console.log(message);

// show another message
let message = "Goodbye"; // Error: variable already declared
console.log(message);
*/

/*
for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}
console.log(i); // Error, no such variable
*/

/*
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
sayHiBye("Vol", "Pol");
*/

/*
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
*/

/*
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) 
или "John" (из места выполнения)
*/

/*
Независимы ли счётчики?

Здесь мы делаем два счётчика: counter и counter2, 
используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
*/

/*
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ?
alert(counter.up()); // ?
alert(counter.down()); // ?
*/

/*
Сумма с помощью замыканий

Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4


function sum(a) {
  return function (b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
*/

/*
Фильтрация с помощью функции

У нас есть встроенный метод arr.filter(f) для массивов. 
Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, 
совпадающие с одним из элементов массива
Например:

.. ваш код для inBetween и inArray
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
*/

/*
// Сортировать по полю

// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => (a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
users.sort((a, b) => (a.age > b.age ? 1 : -1));
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

console.log(users);
console.log(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
console.log(users.sort((a, b) => (a.age > b.age ? 1 : -1)));

console.log(users.sort((a, b) => a - b));

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John
*/

/*
Армия функций

Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

 function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
Почему у всех стрелков одинаковые номера? 
Почините код, чтобы он работал как задумано.
*/
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter());
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10

// function makeArmy() {
  

//   let i = 0;
//   for (let i = 0; i < 10; i++) {
//   let shooters = [];
//     console.log(i);
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }
*/

// function makeArmy() {

//   let shooters = [];

//   for(let i = 0; i < 10; i++) {
//     let shooter = function() { // функция shooter
//       console.log( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);

//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function() { // функция shooter
//       console.log( j ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5

/*
if (true) {
  var test = true;
}
console.log(test);

if (true) {
  let test = true;
}
console.log(test);
*/

// window.curruntUser = {
//   name: "John",
// };
// console.log(curruntUser);
// console.log(window.curruntUser);

// if (!window.Promise) {
//   console.log("Ваш браузер очень старый!");
// }

// function sayHi() {
//   console.log("Hi");
// }
// console.log(sayHi.name);

// let sayHi = function() {
//   alert("Hi");
// };

// alert(sayHi.name); // sayHi (есть имя!)

/*
function f(sayHi = function () {}) {
  alert(sayHi.name); // sayHi (работает!)
}

f();
*/
/*
let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  },
};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye
console.log(typeof user);
console.log(typeof sayHi);
console.log(typeof sayBye);
*/

/*
function makeCounter() {
  // вместо
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
*/

/*
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10
*/

// let sayHi = function (who) {
//   alert(`Hello ${who}`);
// };
// let sayHi = function func(who) {
//   alert(`Hello, ${who}`);
// };

/*
Установка и уменьшение значения счётчика

Измените код makeCounter() так, 
чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, 
можно воспользоваться как замыканием, так и свойством функции. 
Или сделать два варианта решения: и так, и так.


function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;
  return counter;
}
*/

/*
Сумма с произвольным количеством скобок

Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый 
метод преобразования в примитив для функции.


function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15
*/

// let sum = new Function(`a`, `b`, `return a + b`);
// alert(sum(1, 2));

// let sayHi = new Function(`alert("Hi")`);
// sayHi();

/*
Эти 3 объявления ниже эквивалентны:

new Function('a', 'b', 'return a + b'); // стандартный синтаксис
new Function('a,b', 'return a + b'); // через запятую в одной строке
new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке
*/

// function sayHi() {
//   alert("Привет");
// }
// setTimeout(sayHi, 5000);

// function sayHi(phrase, who) {
//   alert(phrase + `, ` + who);
// }
// setTimeout(sayHi, 1000, "Hello", "John");

// setTimeout(() => alert('Привет'), 1000);

// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 2000);
// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

/*
Вывод каждую секунду

Напишите функцию printNumbers(from, to), 
которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.


function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5);


function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5);
// ---
*/

/*
class Car {
  constructor() {
    this.price = 10000;
    this.model = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 5000;
  }
  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 3000;
  }
  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDescription());

class Audi extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.model = "Audi";
  }
}

let audi = new Audi();
audi = new Autopilot(audi);

console.log(audi.getPrice(), audi.getDescription());
*/

/*
let fac = function f(n) {
  return n != 1 ? f(n - 1) * n : n;
};

// 1 1 2 3 5 8 13 сумма двух предыдущих чисел
let fib = function fibonachi(n) {
  return n > 2 ? fibonachi(n - 1) + fibonachi(n - 2) : 1;
};

function logResultDecorator(func, funcName) {
  return function () {
    let result = func.apply(this, arguments);
    console.log(`Result of function ${funcName}: ${result}`);
    return result;
  };
}

function callCountDecorator(func, funcName) {
  let count = 0;
  return function () {
    count++;
    console.log(`Function ${funcName} used ${count} counts.`);
    return func.apply(this, arguments);
  };
}

function timeDecorator(func, funcName) {
  return function () {
    let startTime = Date.now();
    let result = func.apply(this, arguments);
    let endTime = Date.now() - startTime;
    console.log(`Function ${funcName} used ${endTime} ms.`);
    return result;
  };
}

function casheDecorator(func) {
  let cashe = {};
  return function (n) {
    if (typeof cashe[n] === "undefined") {
      cashe[n] = func.apply(this, arguments);
    }
    return cashe[n];
  };
}

function argumentsCountDecorator(func, requiredNumber) {
  return function () {
    let argsCount = arguments.length;

    if (requiredNumber !== argsCount) {
      console.log(`Numbers of arg is not correct!`);
      return;
    }
    return func.apply(this, arguments);
  };
}

// выводит в консоль название функции
fac = logResultDecorator(fac, "factorial");
// кеширует значение и в случае если попадается нам одинаковое значение,
// то он достаёт значение из кеша и заставляет наше приложение работать быстрее
fac = casheDecorator(fac);
// декоратор который считает количество вызовов функции
fac = callCountDecorator(fac, "factorial");
// тайм декоратор который показывает кол-во милисекунд вполнения функции
fac = timeDecorator(fac, "factorial");
// декоратор который проверяет на кол-во входящих в функцию аргументов
fac = argumentsCountDecorator(fac, 1);

// fac(5);

fib = logResultDecorator(fib, "fibonachi");
fib = casheDecorator(fib);
fib = callCountDecorator(fib, "fibonachi");
fib = timeDecorator(fib, "fibonachi");
fib = argumentsCountDecorator(fib, 1);

fib(35);
fib(35);
*/

/*
Декоратор-шпион

Создайте декоратор spy(func), который должен возвращать обёртку, 
которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. 
Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.


function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

function spy(func, funcName) {
  let count = 0;
  return function () {
    count++;
    console.log(`Function ${funcName} used ${count} counts.`);
    return func.apply(this, arguments);
  };
}
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }

work = spy(work, "spy");
*/

/*
Задерживающий декоратор

Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение 
должно передавать все аргументы и контекст this.


function f(x) {
  alert(x);
}

// откладывает запуск функции на 1 секунду
function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс
*/

/*
Декоратор debounce

Результатом декоратора debounce(f, ms) должна быть обёртка, 
которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, 
что все остальные вызовы будут игнорироваться в течение ms.

Например:

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс 
от последнего вызова)
На практике debounce полезен для функций, которые получают/обновляют данные, 
и мы знаем, что повторный вызов в течение короткого промежутка времени 
не даст ничего нового. Так что лучше не тратить на него ресурсы.

function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}
let f = debounce(alert, 1000);
f(1);
-----

function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
*/

/*
let user = {
  firstName: "Vasya",
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser();
*/

/*
let user = {
  firstName: "Vasya",
};

function func(phrase) {
  alert(phrase + ", " + this.firstName);
}

let funcUser = func.bind(user);
funcUser("Hi");
*/

/*
let user = {
  firstName: "Vasya",
  sayHi() {
    alert(`Hi ${this.firstName}!`);
  },
};
let sayHi = user.sayHi.bind(user);
sayHi();
setTimeout(sayHi, 5000);
*/

/*
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
console.log(double(3));
*/

/*
function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

let user = {
  firstName: "Vasya",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

user.sayNow("Hello");
*/

/*
Вызов askPassword() в приведённом ниже коде должен проверить пароль 
и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/

/*
Использование частично применённой функции для логина

Это задание является немного усложнённым вариантом одного из предыдущих – 
Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail 
у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла 
вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

// askPassword(?, ?); // ?
// askPassword(() => user.login(true), () => user.login(false));
askPassword(user.login.bind(user, true), user.login.bind(user, false));
// Ваши изменения должны затрагивать только выделенный фрагмент кода.
*/

/*
const sayHi = () => {
  // this в стрелочной функции всегда привязывается к моменту её предъявления
  console.log("THIS: ", this);
};

sayHi();

const user = {
  name: "John",
  greet: sayHi, // method
};

const user2 = {
  name: "Jack",
  greet() {
    console.log(this);
  },
};

user.greet();
// user2.greet();
*/
