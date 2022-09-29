'use strict';



// function pow2(x1, y1) {
//     let result = 1;
    
//     for (let i = 0; i < y1; i++) {
//         result *= x1;
//     }
//     return result;
// }
// console.log(pow2(2, 5));

// function pow(x, n) {
//     if (n < 0) {
//       alert("Отрицательные значения 'n' не поддерживаются");
//     } else {
//       let result = 1;
  
//       for (let i = 0; i < n; i++) {
//         result *= x;
//       }
  
//       return result;
//     }
//   }
// pow(10, 20);
// console.log( pow(2, 3) );
//                  OR
// function pow(x, n) {
//     if (n < 0) {
//       alert("Отрицательные значения 'n' не поддерживаются");
//       return;
//     }
  
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
// pow(10, 20);
// console.log( pow(2, 3) );

// function pow(x,n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
// }
//   return result;
// }

// let x = prompt("x?", ''), n = prompt("n?", '');
// if (n <= 0) {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// } else {
//   alert( pow(x, n) );
// }

// function showPrimes(n) {
//     nextPrime:
//     for (let i = 2; i < n; i++) {
//   
//       // проверяем, является ли i простым числом
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
//   
//       console.log(i);
//     }
//   }
// showPrimes(100);
//                          OR
// function showPrimes(n) {
// 
//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
//   
//       console.log(i);
//     }
//   }
//   
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) return false;
//     }
//   
//     return true;
//   }
//   showPrimes(100);

// drinkWiskeyAndJuice
// addWiskey
// addJuice
// glass 


// let glass = 80;
// let wiskey = 50;
// let juice = 30;

// if (glass < 40) {
//     addWiskey(x);
//     addJuice(y);
// }

