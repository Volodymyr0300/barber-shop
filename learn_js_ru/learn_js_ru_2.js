
// let number1 = prompt('What is your number?', '0');
// for (number1; number1 > 1;) {
//     for (let number2 = number1; number2 % (number2 - 1) == 0 && number2 > 1; number2--) {
//         console.log('${number1} is asimple number!');
//     }
// }

/*
let n3 = prompt('What is your is your number?');
for (let i3 = 2; i3 <= n3; i3++) {
    for (let j3 = 2; j3 <= i3; j3++) {
        if ((i3 % j3 == 0) && (j3 != i3)) {
            break;
        } else {
            console.log(i3);
            break;
        }
    }
}
*/

// let n = 20;
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if ((i % j == 0) && (j != i)) {
//       break;
//     } else {
//       console.log(i);
//       break;
//     }
//   }
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log(i); // простое число
// }

// let abra = Number(prompt('what?', ''));
// switch (abra) {
//     case 3:
//         alert('low');
//         break;
//     case 4:
//         alert('good');
//         break;
//     case 5:
//         alert('high');
//         break;
//     default:
//         alert('ok?');
// }

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }

// let num1 = '1';
// let num2 = 0;
// switch (+num1) {
//     case num2 + 1:
//         alert('ok'); Выполнится, т.к. значением +num1 будет 1, что в точности равно num2+1
//         break;
//     default:
//         break;
// }
// let browser = prompt('browser?', '');
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
//                      ИЛИ
// let browser = prompt('browser?', '');
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" );    
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
//                      ИЛИ
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2 || 3:
//         alert('Вы ввели число 2, а может и 3');
// }

// function name1 (astra, istra) {
//     return astra + istra;
// }
// let astraIstra = name1(1, 2);
// alert(astraIstra);

// let name2 = "Vova";
// function helloName (abra, cadabra) {
//     console.log('Hi ' + name2);
// }

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Are your parents is confirmed this?');
//     }
// }
// let age = prompt('How old are you?', '18');
// if (checkAge(age)) {
//     console.log('Correct');
// } else {
//     console.log('Wrong');
// }
//                          ИЛИ
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Are your parents is confirmed this?');
//     }
// }
// let age = prompt('How old are you?', '18');
// checkAge2();
// function checkAge2() {
//     if (checkAge(age)) {
//         console.log('Correct');
//     } else {
//         console.log('Wrong');
//     }
// }

// function doNothing() {
//     return;
// }
// alert(doNothing() === undefined);

// showPrimes(10);
// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       console.log( i ); // простое
//     }
//   }
//                          ИЛИ
// showPrimes(10);
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       console.log(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

// checkAge(18);
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// checkAge(17);
// function checkAge(age) {
//     return age > 18 ? console.log('true') : console.log('false');
// }
//                          ИЛИ
// checkAge(19);
// function checkAge(age) {
//     return (age > 18) || console.log('false');
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2, 5));
//                          ИЛИ
// function min(a, b) {
//     return (a < b) ? a : b;
// }
// console.log(min(2, 5));

// let x = +prompt('?', '0');
// let n = +prompt('?', "0");
// pow(x, n);
// function pow(x ,n) {
//     return alert(x ** n);
// }

// function sayHi () {
//     alert('Hi');
// }
//                          ИЛИ
// let sayHi = function() {
//     alert('Hi')
// };
// sayHi();

// function sayHi() {
//     alert( "Hi" );
//   }
// let func = sayHi;
// func();
// sayHi();

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
// function showOk() {
//     alert('You are ok!')
// }
// function showCance() {
//     alert('Canceled');
// }
// ask('Are you ok?', showOk, showCance);
//                          ИЛИ
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     'Are you ok?',
//     function() {alert('You are ok.'); },
//     function() {alert('You aren`t ok.'); }
// );

// let func = (arg1, arg2, ...argN) => expression;
//                          OR
// let func = function(arg1, arg2, ...argN) {
//     return expression;
//   };

// let sum2 = (a, b) => a + b;
// alert(sum2(1, 2));

// let double = n => n * 2;
// // примерно тоже что и: let double = function(n) { return n * 2 }
// alert( double(3) ); // 6

// let double2 = n2 => n2 * 5;
// alert(double2(3));

// let sayHi = () => alert("Hello!");
// sayHi();

// let age3 = (prompt('How old are you?', '0'));
// let welcome = (age3 < 18) ? 
// () => alert('Hi') :
// () => alert('Bye');
// welcome();

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
//   };
//   alert( sum(1, 2) ); // 3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
//                      OR
// let ask = (question, yes, no) => {
//     (confirm(question)) ? alert('yes') : alert('no');
// }
// ask();

