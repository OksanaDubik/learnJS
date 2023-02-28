// function camelize(str) {
//     return str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// }


//мой вариант
function camelize(str){
let firstStr =  str.split('-').map(el=> el[0].toUpperCase()+el.slice(1)).join('')
  return  firstStr[0].toLowerCase()+firstStr.slice(1)
}
console.log(camelize('my-short-string'))