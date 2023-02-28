//№1
let styles = ['Джаз', 'Блюз'];

//№2
styles.push('Рок-н-ролл');

//№3
if (styles.length%2 === 0){
    styles[styles.length/2] = 'Классика';
}
if(styles.length%2 !== 0){
    styles[(styles.length+1)/2 -1 ] = 'Классика';
}

//№4
console.log( styles.shift() );

//№5
styles.unshift("Рэп", "Регги");

console.log(styles)
