/*Что выведет функция?
Ответ: выведет null, тк bind привязал значение null

 */
function f() {
    alert(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g();

