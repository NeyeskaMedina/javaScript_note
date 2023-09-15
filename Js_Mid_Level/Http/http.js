



// //Datos JSON (Datos estructurados)

// //Definicion, usos y sintaxis
// // Javascript Objects Notation
// // es igual arrays asociativos
// //viene serializado cuando tiene las comillas delante del JSON
// const objeto = {
//     "variable1" : "Sibo", //En json nos muestra las variables de los objetos en comillas
//     "variable2" : "Neye"
// };
// console.log(objeto.variable1); //nos devuelve el valor de una variable en un objeto json




// //Serializacion y deserializacion

// // Serializado es una cadena de texto en formato json
// // const objeto = '{"variable1" : "Neye", "variable2" : "Pedro"}';
// // es decir que es una cadena de texto que conforma un objeto json

// //Cuando está deserializado es cuando el objeto esta en JSON sin string.


// //Metodo stringify para serializar un objeto JSON
// console.log(typeof objeto);
// const serializado = JSON.stringify(objeto);
// console.log(typeof serializado); 
// //sirve para enviar datos a un servidor y los datos serializados tambien los recibimos en ese tipo.




// //Metodo parse para Deserializar un formato JSONy traerlo a JSON

// const deserializacion = JSON.parse(serializado);
// console.log(typeof deserializacion);

// // JSON Polyfill -- Son funciones que simulan la funcionalidad de cualquier accion en javascript porque el navegador no lo soporta
// // indagar sobre mas













//Peticion Http
// Es una peticion que enviamos nosotros a un servidor y el servidor nos devuelve una información

// HTTP --> SERVIDOR
// peticion ---> 
//           <--- Respuesta

// Cliente (Nuestro navegador) - Servidor (El que tiene la pagina web completa y procesa la informacion que trasmite el cliente)







// Ajax -- asyncronimous java xml
// antes funcionaba sin servidor -- ahora para trabajar con AJAX necesita servidor
// Se envia la solicitud http y cada vez que el servidor responde se actualiza la pagina

// AJAX lo que hace es tomar esas peticiones y respuestas y hacerlas en paralelo sin que se actualice la pagina
// descargar XAMPP control panel (Ultima version)
// buscar htdocs en c ---> eliminar todos los archivos 
// agregar la carpeta que vamos a trabajar
// vamos a localhost + enter
// XAMPP nos simula un servidor en nuestro PC



// //HACIENDO PETICIONES MANUAL (GET)
// // Objeto XMLHttpRquest


// // la forma antigua para hacer peticiones y validaciones
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', ()=>{
//     if(request.readyState == 4 && request.status == 200){
//         console.log(request.response);
//     }
// });

// request.open('GET', "informacion.txt");
// request.send();



// //NUEVA FORMA DE HACER PETICIONES Y VALIDACIONES (FALTA ASYNC)

// //AJAX no es soportado por todo los navegadores asi que podemops validar el metodo de esta forma
// let request;
// if (window.XMLHttpRequest){
//     request = new XMLHttpRequest();
// } else{
//     request = new ActiveXObject("Microsoft.XMLHTTP"); // Funciona solo para internet explorer
// }

// request.addEventListener('load', ()=>{
//     let rspta;
//     if(request.status == 200) rspta = request.response;
//     else rspta = "lo siento el recurso no fue encontrado";
//     console.log(typeof rspta); // la respuesta es recibida en string (serializado)
//     console.log(JSON.rspta); // undefined -- checked
// });

// request.open("GET", "informacion.txt");
// request.send();



// //HACIENDO PETICIONES MANUAL (POST)
// let request;
// if (window.XMLHttpRequest){
//     request = new XMLHttpRequest();
// } else{
//     request = new ActiveXObject("Microsoft.XMLHTTP"); // Funciona solo para internet explorer
// }

// request.addEventListener('load', ()=>{
//     let rspta;
//     if(request.status == 200 || request.status == 201) rspta = request.response;
//     else rspta = "lo siento el recurso no fue encontrado";
//     console.log(JSON.parse(rspta)); // la respuesta es recibida en string (serializado)
// });

// request.open("POST", "https://reqres.in/api/users");

// request.setRequestHeader('Content-type', 'application/json;charset=UTF8')
// // EN LA LINEA ANTERIOR ENVIAMOS EL ENCABEZADO Y EL VALOR
// request.send(JSON.stringify({
//     "nombre" : "morfeo",
//     "trabajo" : "líder"
// })); //Se envia la data en formato JSON SERIALIZADO



// --------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


//FETCH REEMPLAZA A AJAX
// Fetch es una forma de hacer peticiones basado en promesas
// nos devuelve promesas encapsuladas y necesitamos algunos métodos para convertirlo a un 
//tipo de dato valido
// text(), json(), blob(), formData(), arrayBuffer();

// // Peticion GET 
// request = fetch("https://reqres.in/api/unknown/2");
// request
//     .then(res => res.json())
//     .then(res => console.log(res))
 

// // Peticion POST

// fetch("https://reqres.in/api/users", {
//     method : "POST",
//     body :'{"nombre" : "Neye", "apellido" : "Goidas"}',
//     headers: {"content-type" : "application/json"}
// })
//     .then(res => res.json())
//     .then(res => console.log(res))
 




// // Metodo BLOB
// // Nos convierte los caracteres de la imagen en objeto blob

// const image = document.querySelector('.image');
// fetch("ladrillo.jpg")
//     .then(res=> res.blob())
//     .then(res=> image.src = URL.createObjectURL(res)) // crea la URL para mostrar la imagen
    



// //LIBRERIA AXIOS -- Esta basada en xml http request
// //AXIOS ES EL REEMPLAZO DE FETCH
// // Esta basado en promesas y utiliza tecnologia xml http request para ejecutar sus promesas
// //Objeto axios (trabaja con CDN)
// // Las librerias importantes van en el head para recopilar informacion de usuario antes de que cargue la pag

// axios.post("https://reqres.in/api/users",{
//     "nombre":"neye",
//     "apellido" : "goidas"
// })
//     .then(res=>console.log(res.data))



//Fetch y Axios con Await y Async

const getName = async () =>{
    let request = await fetch("informacion.txt");
    let resultado = await request.json();
    console.log(resultado);
};
getName();


