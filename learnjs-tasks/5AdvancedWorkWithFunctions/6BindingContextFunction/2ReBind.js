/*Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();


Ответ: выведет Вася, тк bind фиксирует только один, первый раз

 */