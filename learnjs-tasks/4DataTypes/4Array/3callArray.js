//Каков результат? Почему?

    let arr = ["a", "b"];

arr.push(function() {
    console.log(this);
});

arr[2]();

/*метод объекта arr[2] получает в качестве this объект
 arr и выводит массив: [ 'a', 'b', [Function (anonymous)] ]
 */
  