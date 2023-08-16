// METODOS
let  numero;

// //Raiz cuadrada
// //sqrt()
// numero = Math.sqrt(25);
// document.write(`El sqrt es: <b>${numero}</b>`);


// //Raiz cubica
// //cbrt()
// numero = Math.cbrt(25);
// document.write(`El cbrt es: <b>${numero}</b>`);


// //El numero mayor
// //max()
// numero = Math.max(25, 234, 291, 102, 12, 5, 56, 23);
// document.write(`El max es: <b>${numero}</b>`);


// //El numero menor
// //min()
// numero = Math.min(25, 234, 291, 102, 12, 5, 56, 23);
// document.write(`El min es: <b>${numero}</b>`);


// //Numero Pseudo-aleatorio entre 0 y 1
// //Random()
// numero = Math.random()*100;
// numero = numero.toString();
// num = numero[0] + numero[1];
// if(numero[1] == "."){
//     num = numero[0];
// }
// document.write(`El random es: <b>${num}</b>`);
// //para quitarles los decimales solo lo convertimos a una cadena de texto y colocamos
// //desde que posicion hasta que posicion queriamos que muestre nuestros valores



// //Numero redondeado al numero entero mas cercano
// //Round()
// numero = Math.random()*100;
// num = Math.round(numero);
// document.write(`El round es: <b>${num}</b>`);



// //Devuelve el numero entero quitando decimales y dejando numero entero igual
// //floor()
// numero = Math.random()*100;
// numero = Math.floor(3.9999); //redondea a 3
// document.write(`El round es: <b>${numero}</b>`);

//FORMA PARA REDONDEAR UN NUMERO DEL 0 AL 100 SIN QUE 
// APAREZCA EL 0 Y EL 100

for(var i = 0; i< 100000; i++){
    let numero = Math.random()*99;
    numero = Math.floor(numero +1);
    document.write(numero + "<br>");
}
