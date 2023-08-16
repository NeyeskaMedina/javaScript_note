//Son arreglos de objetos
//Se declara de la siguiente forma:
//ARRAY COMUN


// let frutas = ["banana", "manzana", "pera", 5, 9];
// alert(frutas[0]);



//ARRAYS ASOCIATIVO
//Muestrar los datos asociados a la posicion

let pc = {
    nombre: "NeyePc",
    procesador: "Intel Core I3",
    ram: "8GB",
    espacio: "1TB",
};
// pc2 = ["NeyePc", "Intel Core 17", "8GB", "1TB"]; // lo mismo pero de otra forma
let procesador = pc["procesador"];
let espacio = pc["espacio"];

// alert(pc["nombre"] + " " + pc["ram"] + " " + espacio);


//tambien se puede mostrar de la siguiente forma:

let nombre = pc["nombre"];
let ram = pc["ram"];

let frase = `el nombre de mi PC es: <b>${nombre}</b><br>
             el procesador es: <b>${procesador}</b><br>
             la memoria ram es: <b>${ram}</b><br>
             el espacio en disco es de: <b>${espacio}</b><br>`;
    
document.write(frase);
document.write("<br><br><br>");



