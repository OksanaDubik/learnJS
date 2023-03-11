/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

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

 */

let fac = function f(n) {
    return (n !== 1) ? f(n + 1) * n : n;
}

let bac = function b(r, t) {
    return r + t
}

function spy(func) {
    function wrapper(...arguments) {
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        wrapper.calls.push(arguments);
        console.log('результат: ', arguments)
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

bac = spy(bac);
bac(1, 2)
