let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let array = [];
    for (let el of arr) {
        if (!array.includes(el)) {
            array.push(el)
        }
    }
    return array
}

console.log(unique(strings))