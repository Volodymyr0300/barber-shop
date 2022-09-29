"use strict";

/*
let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function () {

    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            };
        }
    };
};

for (let num of range) {
    console.log(num)
};
*/

/*
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
*/

/*
function* gen() {
    while (true) {
        var value = yield null;
        console.log(value);
    }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
*/

/*
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num); // 1, затем 2, 3, 4, 5
}
*/

// function* Generator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = Generator();

// function* numberGen(n=10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const num = numberGen(7);

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0

//         return {
//             next() {
//                 if (i < n) {
//                     return {value: ++i, done: false}
//                 }
//                 return {value: undefined, done: true}
//             }

//         }
//     }
// }

// for (let k of iter(6)) {
//     console.log(k)
// }

// function* iter(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

// for (let char of "test") {
//     console.log(char)
// }

// let str = "𝒳😂";
// for (let char of str) {
//     console.log(char)
// }

// let str = "Hello";

// let interator = str[Symbol.iterator]();

// while (true) {
//     let result = interator.next();
//     if (result.done) break;
//     console.log(result.value);
// }

// let str2 = 'hi';

// // разбивает строку на массив её элементов
// let chars = Array.from(str2);

// console.log(chars[0]);
// console.log(chars[1]);
// console.log(chars.length);
// console.log(typeof (str2));
// console.log(typeof (chars));

// let str3 = 'hi';

// let chars2 = []; // Array.from внутри себя выполняет тот же цикл
// for (let char of str3) {
//     chars2.push(char);
// }

// console.log(chars2);

// let map = new Map();

// map.set('word', 'hi');
// map.set(1, 'hello');
// map.set(true, "bool1");

// console.log(map.get(1));
// console.log(map.get("word"));
// console.log(map.size);

// let john = { name: 'John' };

// let visitCountMap = new Map();

// visitCountMap.set(john, 123);

// console.log(visitCountMap.get(john));

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // попробуем использовать объект

// visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
// visitsCountObj[john] = 123; // пробуйем использовать объект john в качестве ключа, при этом объект ben будет замещён

// // Вот что там было записано!
// console.log(visitsCountObj["[object Object]"]); // 123

// let recipeMap = new Map([
//     ["kukubmer", 500],
//     ["tomato", 350],
//     ["luke", 200],
// ]);

// for (let vegetable of recipeMap.keys()) console.log(vegetable);

// for (let amount of recipeMap.values()) console.log(amount);

// for (let entry of recipeMap) console.log(entry);

// recipeMap.forEach((value, key, recipeMap) => {
//     console.log(`${key} ${value} ${recipeMap}`);
// });

// console.log(typeof (recipeMap));

// console.log(recipeMap.get("1"));

// let obj = {
//     name: "John",
//     age: 30
// };

// let map = new Map(Object.entries(obj));

// console.log(map.get("name"));
// console.log(typeof (obj));

// let prices = Object.fromEntries([
//     ["banana", 1],
//     ["orange", 2],
//     ["meat", 4],
// ]);

// // prices = { banana: 1, orange: 2, meat: 4 }

// console.log(prices.orange); // 2
// console.log(typeof (prices));

// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 4);

// let obj = Object.fromEntries(map.entries())
// ИЛИ
// let obj = Object.fromEntries(map); // убрать .entries()

// console.log(map);
// console.log(obj);

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "pete" };
// let mary = { name: "mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set.size);

// for (let user of set) {
//     console.log(user.name);
// };

// let set = new Set(["orange", "apple", "banana"]);

// for (let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => console.log(value));

/*
Фильтрация уникальных элементов массива

Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, 
не повторяющихся значений массива arr.

    Например:
*/

// function unique(arr) {
//     return Array.from(new Set(arr));
// };

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare,Krishna,:-O

/*
P.S.Здесь мы используем строки, но значения могут быть любого типа.

    P.P.S.Используйте Set для хранения уникальных значений.
*/

/*
Отфильтруйте анаграммы

Анаграммы – это слова, у которых те же буквы в том же количестве, 
но они располагаются в другом порядке.

    Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, 
очищенный от анаграмм.

    Например:
*/

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

/*
Из каждой группы анаграмм должно остаться только одно слово, 
не важно какое.
*/

// function aclean(arr) {
//     new Set(arr.map(item => {
//         arr.filter(element => { element.lenght == item.lenght }).map((el, index, array) => {
//             for (let i = 0; i != el.lenght; i++) {
//                 if (array[index + 1].includes(el[i]) && i == el.lenght) {
//                     return el;
//                 } else if (array[index + 1].includes(el[i])) {
//                     continue;
//                 } else {
//                     break;
//                 }
//             }
//         })
//     }))
// }

// let a = ['pan', 'nap', 'teachers', 'cheaters', 'hectares', 'ear', 'era'];

// alert(aclean(a));

/*
function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sortedWord = arr[i].split('').sort().join('');

        if (!(sortedWord in obj)) {
            obj[sortedWord] = [];
        }

        obj[sortedWord].push(arr[i]);
    }

    return Object.values(obj).map((arr) => arr[0]);
}

let a = ['pan', 'nap', 'teachers', 'cheaters', 'hectares', 'ear', 'era'];

console.log(aclean(a));
*/

/*
Перебираемые ключи
важность: 5
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод.push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему ? Что нужно поправить в коде, чтобы вызов keys.push сработал ?
*/
/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more
*/

// let weakMap = new WeakMap();
// console.log(weakMap);
// console.log(typeof (weakMap));

// let obj = {};
// console.log(obj);
// console.log(typeof (obj));

// weakMap.set(obj, "ok");
// console.log(weakMap);
// console.log(typeof (weakMap));

// weakMap.set("hello", "world"); // ошибка, приймає лише об‘єкти

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// console.log(weakMap);
// john = null; // перезаписываем ссылку на объект
// console.log(weakMap);
// // объект john удалён из памяти!

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let readMessages = new WeakSet();
// console.log(readMessages);

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// console.log(readMessages);

// readMessages.add(messages[0]);
// console.log(readMessages);

// console.log("Read message 0: " + readMessages.has(messages[0]));

// messages.shift();

// console.log(readMessages);

// let isRead = Symbol("isRead");
// messages[0][isRead] = true;

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));
// // Объект Date мы рассмотрим позднее
// console.log(readMap);

// let user = {
//     name: 'John',
//     age: 30,
// };
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let value of Object.values(user)) {
//     console.log(value);
// };

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries обратно объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices.meat); // 8

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// console.log(salaries);
// console.log(typeof (salaries));
// // console.log(sumSalaries(salaries)); // 650

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let salary of Object.values(obj)) {
//         sum += salary;
//     };
//     return sum;
// };

// console.log(sumSalaries(salaries));

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let salary of Object.values(obj)) {
//         sum += salary;
//     };
//     return sum;
// };

// console.log(sumSalaries(salaries));

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(obj) {
//     return Object.values(obj).reduce((a, b) => a + b, 0);
// }
// console.log(sumSalaries(salaries));

// let user = {
//     name: 'John',
//     age: 30
// };

// console.log(count(user)); // 2

// function count(obj) {
//     return Object.entries(obj).length;
// };

// let arr = ["Ilya", "Kantor"];
// let [firstName, surName] = arr;
// console.log(firstName);
// console.log(surName);

// let [firstName, surName] = "Ilya Kantor".split(' ');
// console.log(firstName);
// console.log(surName);

// Ненужные элементы массива также могут быть отброшены через запятую:
// второй элемент не нужен
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(title); // Consul

// …На самом деле мы можем использовать любой перебираемый объект, не только массивы:
// let [a, b, c] = "abc";
// console.log(a);
// console.log(b);
// console.log(c);
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one);
// console.log(two);
// console.log(three);

// Мы можем использовать что угодно «присваивающее» с левой стороны.
//     Например, можно присвоить свойству объекта:
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');
// console.log(user.name); // Ilya

// let user = {
//     name: "John",
//     age: 30,
// };
// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`);
// };

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");
// console.log(user);

// for (let [key, value] of user) {
//     console.log(`${key}:${value}`);
// };

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1);
// console.log(name2);
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);
// console.log(rest.length);

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// console.log(name); // Julius(из массива)
// console.log(surname); // Anonymous (значение по умолчанию)

// let [name = prompt("name?"), surname = prompt("Anonymous")] = ["Julius"];
// alert(name); // Julius(из массива)
// alert(surname); // Anonymous (значение по умолчанию

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let { title, width, height } = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// // изменён порядок в let {...}
// let { height, width, title } = { title: "Menu", height: 200, width: 100 }

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200
/*
Двоеточие показывает «что: куда идёт». В примере выше свойство width сохраняется 
в переменную w, свойство height сохраняется в h, а title присваивается одноимённой 
переменной.
*/

/*
Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "=", как здесь:

let options = {
    title: "Menu"
};

let { width = 100, height = 200, title } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
*/

/*
В коде ниже prompt запросит width, но не title:

let options = {
    title: "Menu"
};

let { width = prompt("width?"), title = prompt("title?") } = options;

alert(title);  // Menu
alert(width);  // (результат prompt)
*/

/*
Мы также можем совмещать : и =:

 let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
*/

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
// };

// // title = свойство с именем title
// // rest = объект с остальными свойствами
// let { title, ...rest } = options;

// // сейчас title="Menu", rest={height: 200, width: 100}
// alert(rest.height);  // 200
// alert(rest.width);   // 100
// alert(Object.entries(rest));

/*
// Мы можем передать параметры как объект, и функция немедленно деструктурирует его в 
// переменные:

// мы передаём объект в функцию
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...и она немедленно извлекает свойства в переменные
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    alert(`${title} ${width} ${height}`); // My Menu 200 100
    alert(items); // Item1, Item2
}

showMenu(options);
*/

/*
// Мы также можем использовать более сложное деструктурирование с вложенными объектами 
// и двоеточием:

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
}

showMenu(options);
*/

// let user = {
//     name: "John",
//     years: 30
// };

// // ваш код должен быть с левой стороны:
// let {name, years: age, isAdmin = false} = user

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         };
//     };
//     return maxName;
// };

// console.log(topSalary(salaries));

/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. 
Временная зона – местная.

Для вывода используйте alert.


let date = new Date(2012, 2, 12, 3, 12);
console.log(date);
*/

/*
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"


let date = new Date(2012, 0, 3);

function getWeekDay(date) {
  let dateOfWeek = ["sn", "mn", "tu", "wd", "th", "fr", "st"];
  return dateOfWeek[date.getDay()];
}

console.log(getWeekDay(date))
*/

/*
День недели в европейской нумерации
важность: 5
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) 
и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2


// let date = new Date(2012, 0, 3); // 3 января 2012 года
// function getLocalDay(date) {
//   let dateOfWeek = ["mn", "tu", "wd", "th", "fr", "st", "sn"];
//   return dateOfWeek[date.getDay() - 1];
// };

// console.log(getLocalDay(date));
//                                      OR
let date = new Date(2012, 0, 3); // 3 января 2012 года
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day == 7;
  }
  return day;
}

console.log(getLocalDay(date));
*/

/*
Какой день месяца был много дней назад?

Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 
2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.


let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  const daysAgo = new Date(date.getTime());

  daysAgo.setDate(date.getDate() - days);
  return daysAgo;
}

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
                                        OR

function getDateAgo(date, days) {
let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
*/

/*
Последнее число месяца?

Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).


function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 2));
*/

/*
Сколько секунд осталось до завтра?

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsToday());

OR

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday());
*/

/*
Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


function getSecondsToTomorrow() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let secondsToNextDay = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
    return secondsToNextDay;
  }

  console.log(getSecondsToTomorrow());

OR

function getSecondsToTomorrow() {
  let now = new Date();

  let tomoroow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomoroow - now;
  return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());

OR

function getSecondsToTomorrow() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hours * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;
  return totalSecondsInADay - totalSecondsToday;
}
console.log(getSecondsToTomorrow());
*/

/*
Форматирование относительной даты

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );


function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return "right now";
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + " seconds ago";
  }

  let min = Math.floor(diff / 60000);
  if (min < 3600000) {
    return min + " minets ago";
  }
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// OR

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} seconds ago`;
  } else if (diffHour < 1) {
    return `${diffMin} minutes ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
*/

// let user = {
//   name: "John",
//   age: 38,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   },
// };

// console.log(user);

/*
JavaScript предоставляет методы:

JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.
*/

// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   wife: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json); // мы получили строку!

// console.log(json);

/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

/*
JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.

А именно:

Свойства-функции (методы).
Символьные ключи и значения.
Свойства, содержащие undefined.

let user = {
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};

console.log( JSON.stringify(user) ); // {} (пустой объект)
*/

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log(JSON.stringify(meetup, ["title", "participants"]));
// // {"title":"Conference","participants":[{},{}]}

/*
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup ссылается на room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
*/

/*
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));
*/

/* пары ключ:значение, которые приходят в replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

/*
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json1 = JSON.stringify(student);
console.log(json1);

let json2 = JSON.parse(json1);
console.log(json2);
*/

/*
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
console.log(room.occupiedBy);
console.log(meetup);
*/

/*
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 2));
console.log(JSON.stringify(user, null, 10));
console.log(JSON.stringify(user, null, "hello   "));
*/

/*
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

/*
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

let room2 = {
  number: 23,
};

let meetup2 = {
  title: "Conference",
  
};

console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup));
console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup2));
*/

// строковый массив

/*
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log( numbers[1] ); // 1
*/

/*
let user =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log(user);
console.log(typeof user);

user = JSON.parse(user);

console.log(user);
console.log(typeof(user));

console.log(user.friends[1]);
*/

/*
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() ); // 30 - теперь работает!
*/

/*
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( schedule.meetups[1].date.getDate() ); // 18 - отлично!
*/


/*
Преобразуйте объект в JSON, а затем обратно в обычный объект

Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Vol Pol",
  age: 35
};
console.log(user);
console.log(typeof(user));

let json = JSON.stringify(user);
console.log(json);
console.log(typeof(json));

let user2 = JSON.parse(json);
console.log(user2);
console.log(typeof(user2));

// OR

let user3 = JSON.parse(JSON.stringify(user));
console.log(user3)
*/


/*
Исключить обратные ссылки

В простых случаях циклических ссылок мы можем исключить свойство, 
из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, 
свойства с этим именем во вложенных объектах. 
Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, 
ссылающиеся на meetup:
*/
 let room = {
  number: 23
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{name: "Vol"}, {name: "Pol"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

