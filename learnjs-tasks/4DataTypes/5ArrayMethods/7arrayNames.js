let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
function convertArrayNames () {
let names = users.map(el => el.name);
    console.log(names.toString());
}
convertArrayNames ()
