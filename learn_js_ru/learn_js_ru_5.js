"use strict";


/*
let str = "Hello";
console.log(str.toUpperCase());
console.log(str);
*/

/*
let n = 1.12345;
console.log(n.toFixed(2));
*/

/*
let num = 7.3e3;
console.log(num);
*/

/*
let ms1 = 0.000001;
console.log(ms1);

let ms2 = 1e-6;
console.log(ms2);
*/

// alert( 0xff ); // 255

// let a = 0b11111111; 
// // бинарная форма записи числа 255
// let b = 0o377; 
// // восьмеричная форма записи числа 255
// alert( a == b ); 
// // true, с двух сторон число 255

// let num = 255;
// console.log(num.toString(36));
// console.log(num.toString(16));
// console.log(num.toString(8));
// console.log(num.toString(2));

// console.log( 123456..toString(36) ); // 2n9c
// console.log( (123456).toString(36) ); // 2n9c

// Math.floor
// Округление в меньшую сторону: 
// 3.1 становится 3, а -1.1 — -2.
// Math.ceil
// Округление в большую сторону: 
// 3.1 становится 4, а -1.1 — -1.
// Math.round
// Округление до ближайшего целого: 
// 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
// Math.trunc Производит удаление дробной части 
// без округления: 
// 3.1 становится 3, а -1.1 — -1.

// let num = 1.23456;
// console.log( Math.floor(num * 100) / 100 )
// // // 1.23456 -> 123.456 -> 123 -> 1.23
// console.log(num);
// console.log(num.toFixed(1));
// // возвращает строковое представление результата.
// console.log(num.toFixed(8));

// console.log( 0.1 + 0.2 == 0.3 ); // false
// console.log( 0.1 + 0.2 ); // 0.30000000000000004
// console.log( 0.1.toFixed(20) ); // 0.10000000000000000555

// let sum = 0.1 + 0.2;
// console.log( sum.toFixed(2) ); // 0.30

// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); // 0.3

// console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
// console.log( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5
// alert( parseInt('12.3') ); // 12, вернётся только целая часть
// alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, без 0x тоже работает
// alert( parseInt('2n9c', 36) ); // 123456

// console.log(Math.random());
// console.log(Math.random());
// let num = Math.random();
// console.log(num.toFixed(2));
// console.log(num.toFixed(2) * 100);
// Возвращает псевдослучайное число в диапазоне 
// от 0 (включительно) до 1 (но не включая 1)

// console.log( Math.max(3, 5, -10, 0, 1) ); // 5
// console.log( Math.min(1, 2) ); // 1
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.

// console.log( Math.pow(2, 10) ); // 2 в степени 10 = 1024
// Возвращает число n, возведённое в степень power

// let num1 = +prompt("num1?", "0");
// let num2 = +prompt("num2?", "0");
// alert( num1 + num2 );


// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3
// alert( Math.round(6.35 * 10) / 10); 
// 6.35 -> 63.5 -> 64(rounded) -> 6.4



// function readNumber(data) {
//     if (isFinite(data)) {
//         alert('Ok');
//     } else if (data == undefined || data == Nan) {
//         console.log('not ok');
//     };
// };

// function readNumber(data) {
//     return (isFinite(data)) ? console.log("true") : console.log("false");
// };

/*
function readNumber() {
    let num;

    do {
        num = prompt("Tell me your number!", "0");
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}
alert(`Number is: ${readNumber()}`);
*/

/*
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
};
*/


// // Получение случайного числа в заданном интервале
// function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// console.log(random(0, 5));
// console.log(random(0, 5));
// console.log(random(0, 5));

// // Получение случайного целого числа в заданном интервале, включительно
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }
// console.log(getRandomIntInclusive(0, 50));

// function randomInteger(min, max) {
//     // получить случайное число от (min-0.5) до (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
//   alert( randomInteger(1, 3) );

//   function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
//   alert( randomInteger(1, 3) );

// Теперь все интервалы отображаются следующим образом:
// число от 1  ... до 1.9999999999  округлится до 1
// число от 2  ... до 2.9999999999  округлится до 2
// число от 3  ... до 3.9999999999  округлится до 3
// Все интервалы имеют одинаковую длину, 
// что выравнивает вероятность получения случайных чисел.

/*
let words1 = "- Tom,\n- Kevin,\n- John";
console.log(words1);

let words2 = `- Tom,
- Kevin,
- John`;
console.log(words2);

console.log( words1 == words2 );
*/

// alert( 'My\n'.length );

// let str = `Hello`;
// // получаем первый символ
// console.log( str[0] );
// console.log( str.charAt(0) ); // H
// // получаем последний символ
// console.log( str[str.length - 1] ); // o
// console.log(str.length -1);
// console.log(str[str.length -1]);

// for (let char of "Hello") {
//     console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
//   }

// let str = 'Hi';
// console.log(str);
// str = 'h' + str[1]; // заменяем строку
// console.log(str);

// // Методы toLowerCase() и toUpperCase() меняют регистр символов:
// console.log('Interstelar');
// console.log('Interstelar'.toUpperCase());
// console.log('Interstelar'.toLowerCase());
// // Если мы захотим перевести в нижний регистр какой-то конкретный символ:
// console.log('Interstelar'[0]);
// console.log('Interstelar'[0].toLowerCase());
// console.log('Interstelar'[0].toUpperCase());

// let str = "Widget with id";
// console.log( str.indexOf("Widget") );
// console.log( str.indexOf("widget") );
// console.log( str.indexOf("id") );
// console.log( str.indexOf("id", 2) );
// console.log( str.indexOf("h") );

/*
let str = 'This man come to home early';

let target = 'man'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `We find here: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}
*/
///                     OR
/*
let str = "This man come to home early";
let target = "man";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
*/

// alert( ~2 ); // -3, то же, что -(2+1)
// alert( ~1 ); // -2, то же, что -(1+1)
// alert( ~0 ); // -1, то же, что -(0+1)
// alert( ~-1 ); // 0, то же, что -(-1+1)

// Это — правильный выбор, если нам необходимо проверить, 
// есть ли совпадение, но позиция не нужна:
// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false

// Необязательный второй аргумент str.includes позволяет начать 
// поиск с определённой позиции:
// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith проверяют, 
// соответственно, начинается ли и заканчивается ли строка 
// определённой строкой:
// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

// let str = 'discovering';
// // ключая end
// console.log( str.slice(0, 5) );
// console.log( str.slice(0, 1) );
// console.log( str.slice(6, 11) );
// console.log( str.slice(5) );
// console.log( str.slice(9) );
// console.log( str.slice(-4, -1) );
// // не ключая end, также помжно поменять местами end и start, 
// // но не для slice. Отрицательные значения не поддерживаются.
// console.log( str.substring(2, 6) );
// console.log( str.substring(6, 2) );
// console.log( str.slice(2, 6) );
// console.log( str.slice(6, 2) );
// // str.substr(start [, length]) 
// // Возвращает часть строки от start длины length.
// console.log( str.substr(0, 5) );
// console.log( str.substr(3, 6) );

// console.log( 'a' > 'A' );
// console.log( 'Österreich' > 'Zealand' );

// console.log( 'a'.codePointAt(0) );
// console.log( 'A'.codePointAt(0) );
// console.log( String.fromCodePoint(97) );
// console.log( String.fromCodePoint(65) );

// let str = '';
// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log( str );

// str.trim() — убирает пробелы в начале и конце строки.
// str.repeat(n) — повторяет строку n раз.

// let word = 'hello world';
// function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// };
// console.log( ucFirst(word) );

// необхідно було перевірити чи я слова у строці без урахування регистру
// function checkSpam1(str) {
//     if (( str.search(/viagra/i) != -1 ) || ( str.search(/xxx/i) != -1 )) {
//       return true;
//     } else {
//       return false;
//     };
// };
// console.log(checkSpam1('xxx'));
//                        OR
// function checkSpam2(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// };
// console.log(checkSpam2('xxx'));



/*
Создайте функцию truncate(str, maxlength), которая проверяет длину
строки str и, если она превосходит maxlength, заменяет конец str
на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение
не требуется, либо, если необходимо, усечённая строка.


// function truncate(str, maxlength) {
//   if (str.lenght > 20) {
//     return str = str.slice(0, 20) + "…";
//   };
// };

let str = "Hello everybody!!! Let's go party guys and girls!!!";
// console.log(str.slice(0, 20) + "…");
// truncate(str, 20);
console.log(truncate(str, 25));

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' : str;
};
*/



/*
Есть стоимость в виде строки "$120". То есть сначала идёт
знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой
строки выделять числовое значение и возвращать его.

Например:
alert( extractCurrencyValue('$120') === 120 ); // true


// extractCurrencyValue
// console.log(parseInt('100px'));
// console.log(parseInt('$120'));
// let value = '$120';
// console.log(value.slice(1));


// function extractCurrencyValue(str) {
//   let num = +str.slice(1); 
//   return num;
// };
// console.log( extractCurrencyValue('$120') === 120 );
*/


// ____________________________________


// let fruits = [];
// console.log(fruits);
// fruits[0] = 'Apple';
// console.log(fruits);
// fruits[1] = 'Cherry';
// console.log(fruits);
// fruits[2] = 'Limon';
// console.log(fruits);
// fruits[3] = 'Orange';
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[2]);

// В массиве могут храниться элементы любого типа.
// Например:
// // разные типы значений
// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( arr[1].name ); // Джон
// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет

// let arr = [
//   'Apple',
//   { name: 'Tom' },
//   true,
//   function() { alert('привет'); },
// ];
// console.log(arr);

// console.log(fruits[fruits.length - 1]); // останній індекс массиву
// console.log(fruits.at(-1)); // останній індекс массиву

// console.log(fruits.pop()); // видаляє останній елемент
// console.log(fruits);
// console.log(fruits.push('Orange')); // додає елемент в кінець массиву
// console.log(fruits);
// console.log(fruits.shift()); // видаляє перший елемент
// console.log(fruits);
// console.log(fruits.unshift('Apple')); // додає перший елемент
// console.log(fruits);

// let fruits = ["Банан"]
// let arr = fruits; // копируется по ссылке (две переменные ссылаются
// //  на один и тот же массив)
// alert( arr === fruits ); // true
// arr.push("Груша"); // массив меняется по ссылке
// alert( fruits ); // Банан, Груша - теперь два элемента

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// };
// console.log('***---SIMULAR FUNCTION---***');
// for (let fruit of fruits) {
//   console.log(fruit);
// };

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2; // укорачиваем до двух элементов
// console.log( arr ); // [1, 2]
// arr.length = 5; // возвращаем length как было
// console.log( arr[3] ); // undefined: значения не восстановились

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]); // багатомірні массиви

// let arr = [1, 2, 3];
// console.log(arr);
// 
// console.log([] + 1); // 1
// console.log([1] + 1); // 11
// console.log([1,2] + 1); // 1,21
// 
// console.log('' + 1); // 1
// console.log('1' + 1); // 11
// console.log('1,2' + 1); // 1,21

/*
Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». 
Ваш код для поиска значения в середине должен работать 
для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
*/ /*
let styles = [
  'Jazz',
  'Bluese'
];
console.log(styles);
styles.push('Rock and Roll');
console.log(styles);
// styles.push('Rock it is nit Roll');
// console.log(styles);
// styles.push('Dandy');
// console.log(styles);
styles[(Math.floor((styles.length -1) / 2))] = 'Clasic';
// console.log(Math.ceil(styles.length / 2));
// console.log((Math.floor(styles.length / 2)));
// let num = ((Math.ceil(styles.length / 2)) - (Math.floor(styles.length / 2)));
// console.log(num);
// styles[num] = 'Clasic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Rep', 'Reggi');
console.log(styles);
*/

/*
Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и 
сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь 
введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений 
при вводе «0».


function sumInput(sum) {
  let mas = [];
  let data;
  while (true) {
    data = prompt('What is your number?', 0);
    if (data === '' || data === null || !isFinite(data)) break;
    mas.push(+data);
  }
  console.log(mas.length);
  console.log(mas);
  
  let sum2 = 0;
  for (let mass of mas) {
    sum2 += mass;
  }
  return sum2;

};
console.log(sumInput());
*/



//   do {
//     data = prompt('What is your number?', 0);
//     mas.push(data);
//   } while (!isNaN(parseFloat(data)) && isFinite);
//   //  || (data === null) || (data === ''));
//   mas.pop();
// console.log(mas.length);
// console.log(mas);



// let i = 1; // перевірка чи є числом
// if (!isNaN(parseFloat(i)) && isFinite) {
//   console.log('Number!');
// } else {
//   console.log('not Number');
// };



/*
Подмассив наибольшей суммы.
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, 
сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Например:
getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) 
и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

let arr = [-1, 2, 3, -9, 11];

function getMaxSubSum(arr) {
  let sum = 0;
  let max = 0;
  //  получаем все возможные суммы.
  for (let i = 0; i < arr.length; i++) {
    for (let p = i; p < arr.length; p++) {
      sum += arr[p];
      // Проверяем максимальную сумму в данный проход цикла.
      if (sum < 0) {
        continue;
      } else if (sum > max) {
        max = sum;
      }
    }
    sum = 0;
  }
  return (max > 0) ? max : -1;
};

function getMaxSubSum(arr) {
  let maxSum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = 0; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));        // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9]));     // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));    // 11
console.log(getMaxSubSum([-2, -1, 1, 2]));        // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));   // 100
console.log(getMaxSubSum([1, 2, 3]));             // 6
console.log(getMaxSubSum([-1, -2, -3]));          //-1 
*/


// let arr1 = ["I", "go", "home"];
// delete arr1[1];
// console.log(arr1[1]);
// console.log(arr1);
// console.log(arr1.length);

// let arr2 = [
//   "I",
//   "learn",
//   "JS",
// ];
// arr2.splice(1, 1);
// console.log(arr2);

// let arr3 = [
//   "I",
//   "learn",
//   "JS",
//   "now",
//   "and",
//   "in",
//   "future",
//   "I",
//   "know",
//   "it",
// ];
// console.log(arr3);
// arr3.splice(0, 3, "You", "learn", "JS");
// console.log(arr3);

// let arr4 = [
//   "I",
//   "learn",
//   "JS",
//   "now",
//   "and",
//   "in",
//   "future",
//   "I",
//   "know",
//   "it",
// ];
// console.log(arr4);
// let removed = arr4.splice(0, 2);
// console.log(arr4);
// console.log(removed);

// let arr5 = [
//   "I",
//   "learn",
//   "JS",
// ];
// console.log(arr5);
// arr5.splice(4, 0, "and", "it", "hard",);
// console.log(arr5);

// let arr6 = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
// console.log(arr6);
// arr6.splice(-1, 0, 3, 4);
// console.log(arr6);

// let arr7 = [
//   "I",
//   "learn",
//   "JS",
//   "now",
//   "and",
//   "in",
//   "future",
//   "I",
//   "know",
//   "it",
// ];
// Он возвращает новый массив, в который копирует элементы, 
// начиная с индекса start и до end (не включая end). 
// Оба индекса start и end могут быть отрицательными.
// console.log(arr7);
// arr7.slice(1, 3); //(копирует с 1 до 3)
// console.log(arr7);
// arr7.slice(-2); //(копирует с -2 до конца)
// console.log(arr7);

// let arr8 = [1, 2];
// console.log(arr8);
// // создать массив из: arr и [3,4]
// console.log(arr8.concat([3, 4])); // 1,2,3,4
// // создать массив из: arr и [3,4] и [5,6]
// console.log(arr8.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log(arr8.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Обычно он копирует только элементы из массивов. Другие объекты, 
// даже если они выглядят как массивы, добавляются как есть:
// let arraLike1 = {
//   arra: "somethink",
//   Like: 0,
// };
// console.log(arr8.concat(arraLike1)); //1,2,[object Object]

// let arr9 = [1, 2];
// console.log(arr9);
// let arraLike2 = {
//   name1: "Tom",
//   age: 30,
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr9.concat(arraLike2));

// arr.forEach(function(item, index, array) {
//   // ... делать что-то с item
// });

// ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} has the position ${index} in ${array}`);
// });



// --- arr.indexOf(item, from) ищет item, начиная с индекса from, 
// и возвращает индекс, на котором был найден искомый элемент, 
// в противном случае -1.
// --- arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// --- arr.includes(item, from) – ищет item, начиная с индекса from, 
// и возвращает true, если поиск успешен.
// Обратите внимание, что методы используют строгое сравнение ===.

// let arr10 = [1, 0, false];
// console.log(arr10.indexOf(0, 0));
// console.log(arr10.lastIndexOf(0, 2));
// console.log(arr10.includes(0, 0));

// let arr11 = [NaN];
// console.log(arr11.indexOf(NaN)); // -1 (должен быть 0, 
// // но === проверка на равенство не работает для NaN)
// console.log(arr11.includes(NaN)); // true (верно)



/*
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
Функция вызывается по очереди для каждого элемента массива:
item – очередной элемент.
index – его индекс.
array – сам массив.
Если функция возвращает true, поиск прерывается и возвращается item. 
Если ничего не найдено, возвращается undefined.
*/


/*
Метод find ищет один (первый попавшийся) элемент, 
на котором функция-колбэк вернёт true.

На тот случай, если найденных элементов может быть много, 
предусмотрен метод arr.filter(fn).

Синтаксис этого метода схож с find, но filter возвращает массив 
из всех подходящих элементов:
let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, 
  и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});
*/
// let arr12 = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "John" },
//   { id: 3, name: "Pol" }
// ];
// let arr13 = arr12.find(item => item.id == 1);
// console.log(arr12);
// console.log(arr13.name);



/*
Метод arr.map является одним из наиболее полезных и часто 
используемых.
Он вызывает функцию для каждого элемента массива и возвращает 
массив результатов выполнения этой функции.
Синтаксис:

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});

Например, здесь мы преобразуем каждый элемент в его длину:
*/
// let arr14 = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(arr14);




// let arr15 = [1, 2, 15];
// console.log(arr15);
// arr15.sort();
// console.log(arr15);

// function compare1(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// };

// let arr16 = [1, 2, 15];
// console.log(arr16);
// arr16.sort(compare1);
// console.log(arr16);
// arr16.sort(function (a, b) { return a - b });
// console.log(arr16);
// arr16.sort((a, b) => a - b);
// console.log(arr16);

// let arr17 = [1, 2, 3, 4, 5];
// console.log(arr17.reverse());

// let name2 = 'Tom, Roy, Bob';
// console.log(name2);
// let arr18 = name2.split(', ');
// for (let name3 of arr18) {
//   console.log(`Message have been taken: ${name3}.`);
// };
// let arr19 = 'Tom, Roy, Bob, Sem'.split(', ', 2,);
// console.log(arr19);

// let str1 = 'Test';
// console.log(str1.split(''));

// let arr20 = ['Tom', 'Roy', 'Bob', 'Sem'];
// let str = arr20.join('-');
// console.log(str);

// console.log(arr17.reverse());
// let result1 = arr17.reduce((sum, current) => sum + current, 0);
// console.log(result1);

// console.log(arr17);
// let result2 = arr17.reduce((sum, current) => sum + current, 0);
// console.log(result2);

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg - это необязательный последний аргумент

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// let users = [
//   { age: 16 },
//   { age: 20 },
//   { age: 23 },
//   { age: 30 },
// ];

// let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);


/*
Напишите функцию camelize(str), которая преобразует строки 
вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают 
заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку 
на массив символов, потом переделайте всё как нужно и 
методом join соедините обратно.
*/
// console.log(camelize('my-short-string'));
// camelize('my-short-string');
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// };

// function camelize(str) {
//   return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }

// my-short-string
// camelize(str)

// console.log('my-short-string');
// console.log(camelize('my-short-string'));


// function camelize(str2) {
//   let arr21 = str2.split('-');
//   return arr21.map(word => {
//     const newWord = word[0].toUpperCase() + word.slice(1);
//     console.log(newWord);
//     return newWord;
//   });
// };

// let arr22 = [
//   "Tom",
//   "Bob",
//   "Sem",
// ];
// let str5 = arr22.join();
// console.log(str5);
// console.log(arr22[1]);

// let str4 = "hello";
// // console.log(str3[0].toUpperCase());
// // console.log(str3);
// str4 = str4[0].toUpperCase() + str4.slice(1);
// console.log(str4);

// let name2 = 'Tom, Roy, Bob';
// console.log(name2);
// let arr18 = name2.split(', ');
// for (let name3 of arr18) {
//   console.log(`Message have been taken: ${name3}.`);
// };
// let arr19 = 'Tom, Roy, Bob, Sem'.split(', ', 2,);
// console.log(arr19);


/*
Напишите функцию filterRange(arr, a, b), которая принимает 
массив arr, ищет в нём элементы между a и b и отдаёт массив 
этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// };


// let arr22 = [5, 3, 8, 1];
// function filterRange(arr22, a, b) {
//   return arr22
//     .filter(item => (a <= item && item <= b));
// }
// console.log(filterRange(arr22, 1, 4));



/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает 
массив arr и удаляет из него все значения кроме тех, которые 
находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

// let arr23 = [5, 3, 8, 1];
// function filterRangeInPlace(arr23, a, b) {
//   return arr23
//     .filter(item => (item >= a && item <= b));
// };
// console.log(filterRangeInPlace(arr23, 1, 4));
// console.log(arr23);



/*
Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения 
кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/


// let arr24 = [5, 3, 8, 1];
// function filterRangeInPlace2(arr24, a, b) {
//   for (let i = 0; i < arr24.length; i++) {
//     let val = arr24[i];

//     if (val < a || val > b) {
//       arr24.splice(i, 1);
//       i--;
//     };
//   };
// };

// filterRangeInPlace2(arr24, 1, 4);
// console.log(arr24);



/*
Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/



// let arr26 = [5, 2, 1, -10, 8];
// console.log(arr26);
// console.log(arr26.sort((a, b) => b - a));
// console.log(arr26.reverse((a, b) => b - a));



/*
У нас есть массив строк arr. 
Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет 
возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/


// let arr27 = ["HTML", "JavaScript", "CSS"];
// console.log(arr27);
// let sorted = copySorted(arr27);
// console.log(sorted);
// console.log(arr27);

// function copySorted(arr) {
//   return arr27.slice().sort();
// };



/*
Создайте функцию конструктор Calculator, которая создаёт 
«расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает 
строку типа "1 + 2" в формате 
«ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
*/




// let str6 = "3 + 7";
/*
// let calc = new Calculator;
// calc.calculate
// arr.includes
// arr.includes(item, from) – ищет item, начиная с индекса from, 
// и возвращает true, если поиск успешен.

// Calculator(str6);

function Calculator(str6) {
  let a0 = str[0];
  let a1 = str[1];
  let a2 = str[2];
  let a3 = str[3];
  let a4 = str[4];
  alert(a1, a2, a3, a4, a5)
}
console.log(str6[0]);


function spliting(str) {
  let arrSplit = str
    .split();
  // console.log(arrSplit);
  return arrSplit;

};
spliting(str6);
console.log(str6);
console.log(spliting(str6));

// function deleteSpace() {
//   for (let i = 0; i < arrSplit.length; i++) {
//     let result = (str6[i] === ' ') ? str6[i].splice(i, 1) : false;
//   };
// };
// deleteSpace();


// console.log(Calculator(str6));
// console.log(Calculator(str6[0]));
// console.log(Calculator(str6[1]));
// console.log(Calculator(str6[2]));
// console.log(Calculator(str6[3]));
// console.log(Calculator(str6[4]));
// console.log(arrSplit);
console.log(str6[0]);
console.log(str6[1]);
console.log(str6[2]);
console.log(str6[3]);
console.log(str6[4]);

/*
let spliting = function spliting() {
  let arrSplit = str
    .split();
  // console.log(arrSplit);
  return arrSplit;
  
};
spliting();
*/

/*
deleteSpace();
  function deleteSpace() {
    for (let i = 0; i < arrSplit.length; i++) {
      let result = (str6[i] === ' ') ? str6[i].splice(i, 1) : false;
    };
  }
*/

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// };
// console.log(camelize(str6));
/*
let Math = function doMath(x, operator, y) {
  let math = 0;
  switch (operator) {
    case '+':
      math = (x + y);
      break;

    case '-':
      math = (x - y);
      break;

    case '*':
      math = (x * y);
      break;

    case '/':
      math = (x / y);
      break;

    case '%':
      math = (x % y);
      break;

    case '^':
      math = (x ^ y);
      break;
  };
  return math
};

console.log(Math('3', '+', '7'));

*/

// let calc = new Calculator;

// console.log(calc.calculate("3 + 7")); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8


// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function (str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// };

// function Calculator2() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {

//     let split = str.split(' '),
//       a = +split[0],
//       b = split[1],
//       c = +split[2]

//     if (!this.methods[op] || isNan(a) || isNan(b)) {
//       return NaN;
//     }


//     return this.methods[op](a, b);
//   }

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// };



// /*
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.

// Например:
// */
// let vasya = { name: "Vas", age: 25 };
// let petya = { name: "Pet", age: 30 };
// let masha = { name: "Mash", age: 28 };

// let users1 = [ vasya, petya, masha ];

// let names = users1.map(item => item.name);

// console.log( names ); // Вася, Петя, Маша



/*
Трансформировать в объекты
важность: 5
У вас есть массив объектов user, и у каждого из объектов есть 
name, surname и id.

Напишите код, который создаст ещё один массив объектов 
с параметрами id и fullName, где fullName – состоит из 
name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped =  ... ваш код ... 


usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один 
массив объектов в другой. 
Попробуйте использовать =>. Это небольшая уловка.



let vasya2 = { name: "Ivan", surname: "Ivanov", id: 1 };
let petya2 = { name: "Petro", surname: "Petrov", id: 2 };
let masha2 = { name: "Sidor", surname: "Sidorov", id: 3 };

console.log(vasya2);

let users = [vasya2, petya2, masha2];

console.log(users);

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log(usersMapped);
*/


// console.log(petya2);
// console.log(masha2);

// let qwe = vasya2.name + " " + vasya2.surname
// console.log(qwe);
// console.log(typeof(qwe));

// console.log(vasya2);
// vasya2.fullName = vasya2.name + " " + vasya2.surname;
// console.log(vasya2);
// delete vasya2.name;
// delete vasya2.surname;
// console.log(vasya2);
// const reversed = Object.keys(vasya2).reverse;
// reversed.vasya2.forEach(key => {
//   console.log(key, vasya2[key]);
// });

// const reversedKeys = Object.keys(vasya2).reverse();

// reversedKeys.forEach(key => {
//   console.log(key, vasya2[key]); // 👉️ c three, b two, a one
// });
// console.log(reversedKeys);
// console.log(vasya2);
// console.log(reversedKeys);
// vasya2 = reversedKeys;
// console.log(vasya2);


// function newMassive(obj) {
//   let fullName = obj.name + " " + obj.surname;
//   return fullName;
// }
// console.log(newMassive(vasya2));

// let users21 = [ vasya2, petya2, masha2 ];

// console.log(users21);

// let vasya3 = Object.assign({}, qwe);
// console.log(vasya3);

// // let usersMapped = function () {

// //   function joinStr() {

// //   }
// // }


// // function arrJoin(arr) {
// //   let JSON.stringify(arr) ;
// // };
// // console.log(arrJoin(vasya2));

// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);
// console.log(typeof(myJSON));
// // let data = myJSON[1] + myJSON[3];
// // console.log(data);
// // console.log(myJSON[2]);

// const obj = {
//   name: 'Volodymyr',
//   age: 38,
//   job: 'Fullstack',
// }

// const entries = [
//   ['name', 'Volodymyr'],
//   ['age', '38'],
//   ['job', 'Fullstack'],
// ]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

// const map = new Map(entries)

// // console.log(map.get('job'));
// // console.log(obj.job);

// map
//   .set('newField', 42)
//   .set(obj, 'Value of object')
//   .set(NaN, 'NaN ??')

// console.log(map.get(NaN));

// map.delete(key: 'job')
// console.log(map.has('job'))
// console.log(map.size);
// map.clear()
// console.log(map.size)

// ---------

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach ((val, key, m) => {
//   console.log(val, key)
// })

// --------------

// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj)


// const users2 = [
//   { name: 'Elena' },
//   { name: 'Alex' },
//   { name: 'Irina' }
// ]

// const visits = new Map()

// visits
//   .set(users2[0], new Date())
//   .set(users2[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users2[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//   return visits.get(user)
// }

// console.log(lastVisit(users2[2]))

// let vasya3 = { name: "Ivan", surname: "Ivanov", id: 1 };
// let petya3 = { name: "Petro", surname: "Petrov", id: 2 };
// let masha3 = { name: "Sidor", surname: "Sidorov", id: 3 };

// let users3 = [ vasya3, petya3, masha3 ];

// let usersMapped = users3.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))
// console.log(usersMapped);
// console.log(typeof(usersMapped));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин


/*
let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names ); // Вася, Петя, Маша
console.log(typeof(names))
*/


// let vasya = { name: "Vasya", age: 25 };
// let petya = { name: "Petya", age: 30 };
// let masha = { name: "Masha", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(x) {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// sortByAge(arr);

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// -----



/*
Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным 
последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую 
вероятность. Например, [1,2,3] может быть переупорядочено 
как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
с равной вероятностью каждого случая.
*/
/*
let arr = [1, 2, 3];

shuffle(arr);

function shuffle(array) {
  array.sort(function () {
    return Math.random() - .5;
  });
}

console.log(arr);

function shuffle(array) {
  array.sort(() => Math.random() - .5);
}
*/


/*
function shuffle(array) {
  array.sort(function () {
    return Math.random() - .5;
  });
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
*/


/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
*/



// -------



/*
Получить средний возраст
Напишите функцию getAverageAge(users), которая принимает массив 
объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: 
(age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28




let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 29 };

let users = [vasya, petya, masha];


// function getAverageAge(users) {
//   let sumAge = 0;
  
//   for (let i = 0; i < users.length; i++) {
//     sumAge += users[i].age;
//   };
//   let averageAge = sumAge / users.length
// }

// getAverageAge(users);

const averageAge = users.reduce((sum, users) => sum + users.age, 0) / users.length;

console.log(averageAge)
*/

// -------


/*
Оставить уникальные элементы массива
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.

Например:

function unique(arr) {
   ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
*/


let strings = ["ki", "ki", "ha", "ha",
  "ha", "ha", "ki", "ki", ":-O"
];

console.log(strings);
console.log(strings[0]);

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    };
  };

  return result;
};

console.log(unique(strings));




// let newArray = [];
// function unique(array) {
//   for (let i = 0; i < strings.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (j == i) {
//         array.splice(j, 1);
//       } else {
//         newArray.push(j);
//       };
//     };
//   };
//   return newArray;
// };
// unique(strings);
// console.log(unique(strings));
// console.log(newArray);


// let newArray = [];
// function unique(array) {
//   for (let item1 of array) {
//     for (let item2 of array) {
//       if (item1 == item2) {
//         array.splice(item2, 1);
//       } else {
//         newArray.push(item2);
//       };
//     };
//   };
// };
// unique(strings);
// console.log(newArray)