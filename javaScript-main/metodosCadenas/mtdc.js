let cadena = "Cadena de prueba";
// //concat()
// let cadena2 = "Cadena";
//concat concatena dos cadenas
// //resultado = cadena.concat(", hola");


// //startsWith 
// resultado = cadena.startsWith(cadena2);
// document.write(resultado);
// //El resultado es true ya que la cadena comienza con los mismos caracteres de la cadena2


// //endsWith 
// let cadena2 = "rueba";
// resultado = cadena.endsWith(cadena2);
// document.write(resultado);
// //el resultado es true ya que termina con los mismos caracters de la cadena


// //includes
// let cadena2 = "rueba";
// resultado = cadena.includes(cadena2);
// document.write(resultado);
// //el resultado será true porque la cadena se encuentra dentro de la cadena a buscar.
// //pero si agrego un espacio (ru eda) devulvera false


// //indexOf
// let cadena2 = "prueba";
// resultado = cadena.indexOf(cadena2);
// document.write(resultado);
// //resultado es 10, quiere decir que la palabra "prueba" comienza desde la posicion 10 (desde p).
// //cuenta los espacios vacios
// //resultado = cadena.indexOf(cadena2);
// document.write(cadena[8]);
// //lo ultimo nos devuelve la letra de la posicion que queremos en nuestra cadena de texto
// //en caso de que no se encuentre nos devuelve un -1


// //lastIndexOf
// let cadena2 = "cadena de prueba con last last last";
// resultado = cadena2.lastIndexOf("last");
// document.write(resultado);
// //resultado es lo mismo que indexOf pero en vez de devolver la posicion 
// //de la primera letra de nuestra cadena que queremos buscar nos 
// //devuelve la ultima letra


// //padStart
// let cadena2 = "abc"
// resultado = cadena2.padStart(10,"N");
// document.write(resultado);
// // resultado rellena la cadena al principio con caracteres


// //padEnd
// let cadena2 = "abc"
// resultado = cadena2.padEnd(10,"N");
// document.write(resultado);
// // resultado rellena la cadena al final con caracteres


// //repeat
// let cadena2 = "abc "
// resultado = cadena2.repeat(4);
// document.write(resultado);
// //El resultado es que se repite la cadena 4 veces como especificamos


// //Metodos que transforman las cadenas

// //split
// let cadena2 = "hola,como,estas";
// resultado = cadena2.split(",");
// document.write(resultado[1]);
// // El resultado es que divide la cadena cada vez que encuentra un espacio y nos devuelve cada palabra en arrays
// // document.write(resultado[1]); al colocar esta expresion veríamos el "como" de nuestra cadena


// //substring
// let cadena2 = "abcdefgh";
// resultado = cadena2.substring(0,4);
// document.write(resultado);
// // Nos devuelve la cadena de texto que querramos
// // es decir desde donde queremos que comience (posicion) y hasta donde queremos que termine (cantidad de digitos)


// //toLowerCase()
// let cadena2 = "NEYESKA ES UN CRACK";
// resultado = cadena2.toLowerCase(cadena2);
// document.write(resultado);
// // El resultado es que cambia una cadena a minuscula


// //toUpperCase()
// let cadena2 = "neyeska es un crack";
// resultado = cadena2.toUpperCase(cadena2);
// document.write(resultado);
// // El resultado es que cambia una cadena a mayuscula


// //toString()
// let cadena2 = 24895;
// resultado = cadena2.toString();
// document.write(resultado + 2);
// // El resultado es que cambia una cadena texto (string)
// // Si quiero hacer alguna operacion con la cadena de texto coloco la cadena antes del operador para que 
// // JS haga el cambio de cadena y me realiza la operacion.


// //trim()
// let cadena2 = "  Neyeska, es un crack  ";
// resultado = cadena2.trim();
// document.write(resultado);
// // El resultado es que elimina los espacios en blanco


// // propiedad length 
// // muestra el numero de caracteres que tiene una cadena de texto
// document.write(resultado.length); //nos muestra 20 porque eliminamos los espacios con trim


// //trimStart()
// let cadena2 = "  Neyeska, es un crack  ";
// resultado = cadena2.trimStart();
// document.write(resultado);
// // El resultado es que elimina los espacios en blanco del principio
// document.write(resultado.length); //nos muestra 22 porque eliminamos solo los espacios del comienzo con trimStart


// //trimEnd()
// let cadena2 = "  Neyeska, es un crack  ";
// resultado = cadena2.trimEnd();
// document.write(resultado);
// // El resultado es que elimina los espacios en blanco del principio
// document.write(resultado.length); //nos muestra 22 porque eliminamos solo los espacios del final con trimStart


// //valueOf()
// let cadena2 = "  Neyeska, es un crack  ";
// resultado = cadena2.valueOf();
// document.write(resultado);
// // retorna el valor primitivo de un objeto string
// // es decir nos evalua lo que tiene nuestra cadena para retornarnos el valor del mismo.

