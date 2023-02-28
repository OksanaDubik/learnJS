function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат? Ответ: undefined, так как значение this  не определено
