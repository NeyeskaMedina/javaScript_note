// for es un hacer mientras pero le damos limite en una linea es decir
// hacer mientras (let i = 0; i > 3; i++){}

let i = 20; //despues que se declara una variable ya solo se inicia

for(let i=0; i<6; i++){
    document.write(i + "<br>");
} 
document.write(i + "<br><br>");
//se declara e inicializa
// se aplica la condicion
// se inicia el decremento

//Tambien se declara por fuera del for solo colocando let i; y dentro del for se inicializa


//Sentancia continue en for
//se usa para saltarse cierta sentencia dentro de un for

for(let e = 0; e < 10; e++){
    if(e == 4){
        document.write("<br>")
        continue;
    }
    document.write(e + "<br>");
}

document.write("<br>");
//FOR IN Y FOR OF

//FOR IN DEVUELVE LA POSICION DE NUESTRO ARRAY

let animales = ["perro", "gato", "leon","rex"];
animales.edad = 20;
for(animal in animales){
    document.write(animal + "<br>");
}

document.write("<br><br>");

// A DIFERENCIA FOR OF NOS DEVUELVE EL ELMENTO QUE CONTIENE
// CADA POSICION DE NUESTRO ARRAY

for(animal of animales){
    document.write(animal + "<br>");
}

// Tambien se le puede agregar una propiedad al array
//Ejemplo:

document.write(animales.edad);


