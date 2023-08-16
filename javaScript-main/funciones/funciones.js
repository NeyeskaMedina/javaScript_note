// CREAR FUNCIONES
//.................
//..................
//...................

// function saludo (){
//     respuesta = prompt("!Hola Neye! ¿Cómo fue tu día?");
//     if(respuesta == "bien"){
//         alert("me alegro");
//     }else {
//         alert("una pena");
//     }
// }
// saludo();

// AGREGAR FUNCIONES A VARIABLES
//.................
//..................
//...................

// saludar = function(){
//     respuesta = prompt("!Hola Neye! ¿Cómo fue tu día?");
//     if(respuesta == "bien"){
//         alert("me alegro");
//     }else {
//         alert("una pena");
//     }
// }
// saludar();

// RETURN QUE ES? Es para devolver un valor 
//.................
//..................
//...................

// function saludar2(){
//   alert("hola");
// return "la función se ejecuta correctamente"
// //sino colocamos el return la funcion no va a devolvernos un valor y va hacer undefined
// // el return hace que termine una funcion por defecto
// // la funcion es una cosa lo que hace y otra lo que retorna
// }
// let saludo2 = saludar2(); //guardamos la funcion en una variable
// document.write(saludo2 + "<br>");


//Toda funcion tiene PARAMETROS
// .........
//..............
//...............


// function suma(num1,num2){ //los parametros es para optimizar codigo
//     let res = num1 + num2;
//     document.write(res + "<br>");
// }
// suma(12,32);

// es decir la variable que le pacemos a nuestra funcion como parámetros
// le podemos dar uso a la hora de llamar a la funcion
// ejemplo anterios le pasamos 
// parametro num1 y num2 a nuestra funcion suma
// cuando llamamos a la funcion
// le damos los datos a esos parámetros
// que se van a sumar.

// al pasarle la variable al parametro solo la estamos declarando
// al darle valor al llamar la funcion la inicializamos.


// Ejercicio funcion saludar

// let usuario = prompt("hola, ¿Cómo te llamas?");

// function saludar (nombre){
//     let frase = `¡Hola ${nombre}! Bienvenido cabro`;
//     document.write(frase);
// }
// saludar(`${usuario}`);


//FUNCION FLECHA
// .........
//..............
//...............

// function saludar (nombre){
//     let frase = `¡Hola ${nombre}! Bienvenido cabro`;
//     document.write(frase);
// }

// const saludar = function(nombre){
//     let frase = `¡Hola ${nombre}! Bienvenido cabro`;
//     document.write(frase);
// }
// saludar("pedro");

//funcion flecha se crea asi
// En la funcion flecha si hay solo un parametro no es necesario el parentesis
// si solo hay una línea de código dentro de la funcion se puede resumir en:
// const saludar = nombre=> document.write(frase);
// el codigo explicito en la funcion flecha en una linea ya nos retorna automaticamente
const saludar = (nombre)=>{
    let frase = `¡Hola ${nombre}! Bienvenido cabro`;
    document.write(frase);
}
saludar("pedro");