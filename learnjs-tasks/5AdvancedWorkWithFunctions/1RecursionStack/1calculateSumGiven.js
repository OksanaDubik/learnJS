/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:



С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) {  ваш код  }

alert( sumTo(100) ); // 5050

 */


/*№1) С использованием цикла.*/
// function sumTo(n) {
//     let a = 0;
//
//     for (let i=1; i<=n; i++){
//       a += i
//     }
//     return a
// }
// console.log(sumTo(2))

/* №2)  Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.*/
// let a = 0;
//
// function sumTo(n) {
//     a++;
//     if (a < n) {
//         a += sumTo(n)
//     }
//     return a
// }
//
// console.log(sumTo(2))
/*№3)  С использованием формулы арифметической прогрессии.
* An=A1+(n-1)d
* n*(n+1)/2
* */
function sumTo(n) {
  return n*(n+1)/2
}

console.log(sumTo(5))
