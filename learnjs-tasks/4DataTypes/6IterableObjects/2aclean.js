function aclean (arr){
    let newArr = arr.map(item => item.toLowerCase().split('').sort().join(''));
    return Array.from(new Set(newArr));

}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr))
