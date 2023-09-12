
let nombres = ["Pedro","Maria","Neye","jose"];
let numeros = [1,5,13,23,11,7,20]




// //METODOS TRANSFORMADORES

// //pop
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.pop();
// document.write(`Elemento removido: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// //elimina el ultimo elemento del array y nos lo muestra
// // EN ESTE CASO NOS MOSTRO NEYE



// //shift
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.shift();
// document.write(`Elemento removido: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// //elimina el primer elemento del array y nos lo muestra
// // EN ESTE CASO NOS MOSTRO PEDRO



// //push
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.push("Cari", "Camila");
// document.write(`Cant de elementos en array: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// //agrega un o mas elemento al final del array y devuelve la cantidad de elementos que posee el array
// // EN ESTE CASO NOS MOSTRO 5 elementos en array y se agrego CARI y CAMILA



// //reverse
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.reverse();
// document.write(`Array invertido: <b style ='color:red'>${resultado}</b><br>`);
// // invierte el orden de los elementos de un array



// //unshift
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.unshift("Cari");
// document.write(`Cant de elementos en array: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// //agrega uno o mas elementos al INICIO del array y devuelve la cantidad de elementos que posee el array
// // EN ESTE CASO NOS MOSTRO 4 elementos en array y se agrego CARI al principio



// //sort
// document.write(`Arrays Original: <b>${numeros}</b><br>`)
// let resultado = numeros.sort();
// document.write(`Resultado Ordenado: <b>${numeros}</b>`);
// // Ordena los arrays numeros(1,111 ,2,34) y letras(en forma alfabetica)
// // EN ESTE CASO NOS MOSTRO LOS NÚMEROS ORDENADOS DE FORMA LEXICOGRÁFICO


// //splice / ELIMINAR ELEMENTOS
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.splice(1,2);
// document.write(`Elementos a remover: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// // El primer paramétro es desde donde(posicion) queremos eliminar elementos y luego la cantidad de elementos que queremos eliminar
// // EN ESTE CASO ELIMINAMOS DESDE MARIA(posicion 1) (2 elementos), es decir MARIA Y NEYE



// //splice / REEMPLAZAR ELEMENTOS
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.splice(1,2,"Rober","Augusto");
// document.write(`Elementos a remover: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// // El primer paramétro es desde donde(posicion) queremos eliminar elementos y luego la cantidad de elementos que queremos eliminar,
// // en caso de querer reemplazar elementos se dejan los parametros anteriores y se sustituye por el cual queremos reemplazar
// // Ejemplo: (1 posicion,2 elementos a eliminar,"Rober","Augusto" elementos a reemplazar)



// //splice / AGREGAR ELEMENTOS
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.splice(1,0,"Rober","Augusto");
// document.write(`Elementos a remover: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado: <b>${nombres}</b>`);
// // El primer paramétro es desde donde(posicion) queremos eliminar elementos y luego la cantidad de elementos que queremos eliminar,
// // en caso de querer AGREGAR elementos se pasan los parametro 0 posicion (para saber desde donde queremos agregar) y 0 a eliminar
// // luego de eso se le agregan lo elementos al array
// // Ejemplo: (1 posicion,0 elementos a eliminar,"Rober","Augusto" elementos a agregar desde la posicion 1)




// //splice / AGREGAR ELEMENTOS AL FINAL
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.splice(-1,1,"Alberto","jose");
// document.write(`Elementos a remover: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado agregando elementos jose: <b>${nombres}</b>`);
// // El primer paramétro es desde donde(posicion) queremos eliminar elementos y luego la cantidad de elementos que queremos eliminar,
// // en caso de querer AGREGAR elementos se pasan los parametro 0 posicion (para saber desde donde queremos agregar) y 0 a eliminar
// // luego de eso se le agregan lo elementos al array
// // Ejemplo: (1 posicion,0 elementos a eliminar,"Rober","Augusto" elementos a agregar desde la posicion 1)
// // en la posiciones se suele poner -1 para agregar al final de arrays




//..........................................................................................................
//........................................................................................................
//.....................................................................................................
//................................................................................................
//...........................................................................................
//.....................................................................................
//..............................................................................
//.........................................................................
//..................................................................
//..........................................................
//..................................................
//...........................................
//..................................
//...........................
//..................
//.............





// // METODOS ACCESORES

// //join
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// let resultado = nombres.join(" - ");
// document.write(`String: <b style ='color:red'>${resultado}</b><br>`);
// document.write(`Resultado como string: <b>${resultado}</b>`);
// // El array lo devuelve en forma de cadena de texto y nos los separa de la forma que querramos



// //slice
// document.write(`Arrays Original: <b>${numeros}</b><br>`)
// let resultado = numeros.slice(1,4);
// document.write(`Elementos a seleccionar: <b style ='color:red'>${resultado}</b><br>`);
// // Nos selecciona los elementos desde una posicion hasta la cantidad de elemntos (0 posicion, 2 elementos a seleccionar)
// // si colocamos en cantidad -1 nos muestra todos menos el ultimo y si vamos aumentando es decir -2 0 -3 se elminan desde el ultimo la cantidad escrita



// // METODOS DE REPETICIÓN

// // map ()
// El map devuelve un nuevo array del array original

// // reduce()

// // indexOf 

// // includes()
// // se usa para consultar si un elemento se encuentra dentro del array devuelve un booleano
const array = [{id: 1}, {id:2}];

let existe = array.includes(array[id] === 1)

console.log(existe);
// // find 
// sirve para buscar elementos dentro de un array de objetos y devuelve un elemento encontrado de acuerdo a la condicion


// // some

// // //filter
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// nombres.filter(nombres => document.write(nombres + "<br>"));

// // La funcion filter funciona como un bucle que recorre nuestro array y en cada vuelta devuelve el elemento
// // dentro de este bucle podemos usar una funcion 
// // numbres.fliter((nombres)=>{
// //  document.write(numero + "<br>")   
// //}) // //resumimos esta funcion en una funcion flecha lineal


// // numbres.fliter(function(nombres){
// //  document.write(numero + "<br>")   
// //}) // //resumimos esta funcion en una funcion flecha lineal



// // CUALIDAD DE FILTER
// document.write(`Arrays Original: <b>${nombres}</b><br>`)

// resultado = nombres.filter(nombres => nombres.length > 4);
// document.write(`Muestra los que tienen mas de 4 letras:  <b>${resultado}</b>`);
// // Lo que hace es que se pueden establecer condiciones




// // forEach
// document.write(`Arrays Original: <b>${nombres}</b><br>`)
// nombres.forEach(nombres => document.write(nombres + "<br>"));
// // Hace lo mismo que filter excepto la cualidad.