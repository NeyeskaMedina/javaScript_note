//Las sentencias condicionales son de control de flujo
// Sentencias de bloques
// switch, ifelse, while
//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }
// Sentencias de manejo de excepciones
//Esta ultima manejan los errores

//Obtenemos diferentes tipos de error que podemos manejarlos

//Execpciones ECMAScript
//DOMExecption y DOMError


//TRY... CATCH -------------------------

// Se eliminan los eventHandlers  Y NO SE MUESTRAR LOS ERRORES
//El try le pasa como parametro el error al catch
//Los errores de sintaxis no estan contemplados dentro de los manejos de errores

// try{
//     sdfsadfads
// }
// catch(error){
//     console.log('Lo siento ocurrio un error de referencia');
// }
//El catch puede tener una condicion en su interior (if) y ser un catch condicional



// //Finally


// // Siempre se ejecuta haya o no haya errores

// // try{
// //     console.log('No hay errores');
// // }
// // catch(error){
// //     console.log('Lo siento ocurrio un error de referencia');
// // }finally{
// //     console.log('me muestro igual');
// // }

// const pruebaTry = ()=>{
//     try{
//         return 1;
//     }
//     catch(err){
//         return 2;
//     } 
//     // finally{
//     //     return 3;
//     // }
// }
// //en el ejemplo anterior vemos que si dejamos solo try catch nos retorna 1
// // pero si colocamo el finally retorna 3 es decir que aun que haya errores el finally se ejecuta siempre con prioridad.


// //throw
// //Es para lanzar un error


// // try{
// //     throw 'Gallardo';
// // }
// // catch(err){
// //     console.log(err);
// // }
// // finally{
// // }
// // throw 'Gallardo';//tambien lo lanza fuera del try


// //otra forma de mostrar el error seria:
// try{   
//     throw{
//         error: 'TipoDeError',
//         info: 'Sos Gallardo'
//     }
// }
// catch(err){
//     console.log(err.info);
// }
// finally{
// }