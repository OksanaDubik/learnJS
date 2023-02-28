let schedule = {};
let user = {
    name: "John",
    age: 30
};

function isEmpty(obj){
    return Object.keys(obj).length === 0;

}

console.log(isEmpty(schedule));
console.log(isEmpty(user));
