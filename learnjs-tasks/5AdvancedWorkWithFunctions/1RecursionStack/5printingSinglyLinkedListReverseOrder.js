/*Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.

 */
//использованием цикла
// function f(list){
//     let arr = [];
//     while(list){
//         arr.push(list.value)
//
//         list = list.next
//     }
//     arr = arr.reverse()
//     arr.forEach(el=> console.log(el))
// }
//
// console.log(f(list))

//через рекурсию
function f(list) {
    let arr = [];
    arr.push(list.value);
    if (list.next) {
        f(list.next)
    }
    arr = arr.reverse()
    return arr.forEach(el => console.log(el))
}

f(list)