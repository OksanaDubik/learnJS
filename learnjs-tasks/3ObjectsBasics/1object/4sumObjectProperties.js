let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function calcObjectValues(obj) {
    let sumObjectValues = 0;
    for (let key in obj) {
        sumObjectValues += obj[key];
    }
    console.log(sumObjectValues);
}

calcObjectValues(salaries);