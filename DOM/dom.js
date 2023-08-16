// Accedo a los nodos del Dom y lo asigno a una variable

let title = document.querySelector("h1");

//agrego un texto al documento
title.innerText ="Me llamo Neye y soy un crack mmlo";

//acceder a otra etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

//Agregando un texto a una etiqueta
// let parrafo = document.createElement('p');
// parrafo.innerText = 'Esto es parrafo desde JS'

//acceder a elemento por id o por su clase

// document.querySelector("#id");
// document.querySelector(".clase");

// tambien se puede acceder a elementos con el
// getElementById()
// se usa mayormente para acceder a elementos por su ID

//El queryselctor trae la primera etiqueta que encuentra
//ejemplo

let inputs = document.querySelectorAll('input');
console.log(inputs); //esto nos devuelve un NodeList parecido a un array

// let apellidoInputs = document.querySelector(inputs[1]);