// es un objeto que tiene 2 callbacks
// 1 callback --> representa terminacion de una operacion asincrona
// 2 callback --> representa el fracaso de una operacion asincrona

// ejemplos y solucion al problema de los callbacks

// 1 resolve y 2 reject



// // ejemplos de PROMESAS

// let nombre = 'pedro';

// const promesa = new Promise((resolve, reject) =>{
//     if (nombre !== 'pedro') reject ('Lo siento, el nombre no es Pedro')
//     else  resolve(nombre);
// });

// console.log(promesa);

// // then() es un metodo que recibe el callback y es para acceder a esa promise
// // el then solo puede ejecutarse con resolve
// promesa.then((resultado)=>{
//     console.log(resultado);
// });

// // TODO LO ANTERIOR FUNCIONA CON RESOLVE



// // Ejemplo de reject

// let nombre = 'pedsdsro';

// const promesa = new Promise((resolve, reject) =>{
//     if (nombre !== 'pedro') reject ('Lo siento, el nombre no es Pedro')
//     else  resolve(nombre);
// });

// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((e)=>{
//     console.log(e);
// })

