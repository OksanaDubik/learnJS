/*Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
 ****************

 Напишите функцию printList(list), которая выводит элементы списка по одному.

 Сделайте два варианта решения: используя цикл и через рекурсию.

 Как лучше: с рекурсией или без?
 */
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//рекурсия:

// function func(obj) {
//
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             func(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
//
// }

// func(list);

// function func(obj) {
//
//     console.log(obj.value) ;
//     if(obj.next){
//          func(obj.next)
//     }
//
// }
//
// func(list);

//цикл:


while (list) {
    console.log(list.value);
    list = list.next
}