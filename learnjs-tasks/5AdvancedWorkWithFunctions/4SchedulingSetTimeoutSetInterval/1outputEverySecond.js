/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
 */
// function printNumbers(from, to){
//         let interval =  setInterval(() =>{  console.log(from);
//             if(from === to){
//                 clearInterval(interval);
//             }
//             from ++;
//         }, 1000 )
// }
// printNumbers(2, 5)


function printNumbersTimeout(from, to) {

    setTimeout(function func() {
        console.log(from);
        from++
        if (from < to + 1) {
            setTimeout(func, 1000)
        }
    }, 1000)
}

printNumbersTimeout(2, 5)