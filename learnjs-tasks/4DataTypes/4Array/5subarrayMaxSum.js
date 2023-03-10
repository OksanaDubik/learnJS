// function getMaxSubSum(arr) {
//     let maxSum = 0; // если элементов не будет - возвращаем 0
//
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//
//     return maxSum;
// }
//
// console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// console.log( getMaxSubSum([1, 2, 3]) ); // 6
// console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100


function getMaxSubSum(arr){
    let maxSum = 0;
    let partAmount = 0;



    for (let element of arr) {
        partAmount += element;
        maxSum = Math.max(maxSum, partAmount); // запоминаем максимум на данный момент

        if (partAmount < 0) partAmount = 0; // ноль, если отрицательное
    }

    return maxSum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))
