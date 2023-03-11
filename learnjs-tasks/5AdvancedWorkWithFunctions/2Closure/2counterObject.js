/*
Здесь объект счётчика создан с помощью функции-конструктора.

    Будет ли он работать? Что покажет?
*/
    function Counter() {
        let count = 0;

        this.up = function() {
            return ++count;
        };
        this.down = function() {
            return --count;
        };
    }

    let counter = new Counter();

alert( counter.up() ); // ? ответ 1
alert( counter.up() ); // ? ответ 2
alert( counter.down() ); // ? ответ 1

