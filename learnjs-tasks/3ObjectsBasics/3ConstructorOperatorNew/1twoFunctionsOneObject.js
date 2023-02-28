/*Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b );

 */

/*Да, возможно.
если return есть, то применяется простое правило:
    При вызове return с объектом, вместо this вернётся объект.
    При вызове return с примитивным значением, оно проигнорируется.
     */
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

console.log(new A() == new B()); // true