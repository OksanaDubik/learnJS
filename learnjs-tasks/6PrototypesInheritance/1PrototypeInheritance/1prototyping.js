/*В приведённом ниже коде создаются и изменяются два объекта.

    Какие значения показываются в процессе выполнения кода?

    let animal = {
        jumps: null
    };
let rabbit = {
    __proto__: animal,
    jumps: true
};


alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
Должно быть 3 ответа.



    Ответ:
true, берётся из rabbit.
    null, берётся из animal.
    undefined, такого свойства больше нет.

 */
