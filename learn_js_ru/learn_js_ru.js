// let age = prompt('How old are you?', 100);
// alert(`You are ${age} ear old!`); // Тебе 100 лет!
// promt - Позволяет задать вопрос и принять ответ записав его в 
// переменную. Если ответа нет, то передают в переменную значение null

// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK
// confirm - Позволяет задать вопрос и получить да или нет, 
// определив таким образом true или false.

// let result = prompt("What is your name?")
// alert(`Your name is ${result}!`)

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string

// alert( "6" / "2" ); // 3, строки преобразуются в числа

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123
// alert(typeof num); // number

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("Привет!") ); // true
// alert( Boolean("") ); // false

// alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
// alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)
// alert( n ); // 14

// Инкремент
// let counter = 2;
// counter++;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

// Дикремент
// let counter = 2;
// counter--;        // работает как counter = counter - 1, просто запись короче
// alert( counter ); // 1

// let car = 1;
// car++;
// alert(car);

// let dog = 1;
// let cat = dog++;
// alert(cat)
// alert(dog)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(Number(a) + Number(b); // 12

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 12

// let age = prompt("How old are you?");
// let message = (age < 3) ? "Hello baby!":
// (age < 18) ? "Hi":
// (age < 100) ? "Have a nice life!":
// "What is the interesting age?";
// alert(message)

// let age = prompt("How old are you?");
// if (age < 3) {
//     message = 'Hello baby';
//   } else if (age < 18) {
//     message = 'Hi';
//   } else if (age < 100) {
//     message = 'Have a nice life!';
//   } else {
//     message = 'What is the interesting age?';
//   } alert(message)

// let company = prompt("What is the company which created JS?");
// (company == "Netscape") ?
//    alert('Yes') : alert('No');

// let a123 = prompt('What is the first name of JS?', '');
// if (a123 == 'ETMAscript') {
//     alert( "Yes" );
// }   else {
//     alert("No");
// }

// let a1389 = prompt("What is the number?");
// if (a1389 > 0) {
//     alert('1');
// }   else if (a1389 == 0) {
//     alert('0');
// }   else {
//     alert('-1')
// }

// let result1;
// if (a + b < 4) {
//   result1 = 'Мало';
// } else {
//   result1 = 'Много';
// }

// let result2 = (a + b < 4) ? 'Low' : 'High';

// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет':
//     (login == 'Директор') ? 'Здравствуйте':
//     (login == '') ? 'Нет логина':
//     '';

// let hour = 9;
// if (hour < 10 || hour > 18) {
//   alert( 'Office is close' );
// }

// Напишите условие if для проверки, что переменная age 
// находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age 
// может быть равно 14 или 90.
// let age = prompt("How old are you?");
// if (age >= 14 && age <= 90) {
//     alert("Yes");
// }   else {
//     alert("No");
// }
// Напишите условие if для проверки, что значение переменной age НЕ 
// находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !,
//  второй – без этого оператора.
// let age = prompt("How old are you?");
// if (!(age >= 14) || !(age <= 90)) {
//     alert("Yes");
// }   else {
//     alert("No");
// }
// let age = prompt("How old are you?");
// if (age <= 14 || age >= 90) {
//     alert("Yes");
// }   else {
//     alert("No");
// }

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, 
// если ничего не введено или нажата клавиша Esc – показать
//  «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// let BossLogin = prompt("Give me your login");
// if (BossLogin === null || BossLogin === '') {
//     alert("Canseled");
// } else if (BossLogin == 'Admin') {
//     let BossPassword = prompt("Your password, please.");
//     if (BossPassword == null || BossPassword === '') {
//         alert("Canseled");
//     } else if (BossPassword == 'Admin') {
//         alert("Welcome to system Boss!")
//     } else {
//         alert("Wrong password")
//     }
// } else {
//     alert("I don't know who are you...")
// }

// let milch1;
// alert(milch1 ?? "Wrong");

// let milch2 = 'milch2';
// alert(milch2 ?? "Wrong");

// let name1 = null;
// let name2 = undefined;
// let name3 = 'SubZero';
// alert(name1 ?? name2 ?? name3 ?? 'Yo!')

// let i = 0;
// while (i < 3) {
//     alert(i < 3);
//     i++;
// }

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) alert(i--);

// let i = 0;
// do {
//     alert(i++);
// } while (i < 3);

// for (let i = 0; i < 5; i++) {
//     alert(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2
//   }
//   alert(i); // ошибка, нет такой переменной

// let i = 0;
// for (i = 0; i < 3; i++) { // используем 
//     существующую переменную
//   alert(i); // 0, 1, 2
// }
// alert(i); // 3, переменная доступна, 
// т.к. была объявлена снаружи цикла

// let i = 0;
// for (; i < 3;) {
//   alert( i++ );
// }
// Цикл не бесконечный потому что i становиться
// равно 3 и значит false а значит выход из цикла

// let sum = 0;
// while (true) {
//   let value = +prompt("What is your number?", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( `Your sum is : ${sum}` );

// for (let i = 0; i < 10; i++) {
//     if (i % 2 != 0) continue;
//     alert(i);
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Coordinats? ($(i); $(j))`, '');
//     }
// }
// alert(`ok`)

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       let input = prompt(`Coordinats (${i},${j})`, ''); 
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*) 
//       // сделать что-нибудь со значениями...
//     }
//   }  
// alert('ok!');

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i);
// }
//              ИЛИ
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
//              ИЛИ
// let i = 0;
// while (i < 3) {
//     i++;
//     alert( `number ${i}!` );
// }