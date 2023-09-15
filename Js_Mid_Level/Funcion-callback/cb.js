// //is function in function

// //CallBacks

// function prueba(callback){ //Esta funcion será llamada a la cual se le pasará como parámetro otra funcion
//     callback('pedro'); // Es decir que callback('pedro') será el parametro de la nueva funcion (decirNombre)
// }

// function decirNombre(nombre){ //Funcion que se pasa como parametro
//     console.log(nombre);
// }

// prueba(decirNombre)
//.
//.
//.
//.
//. LO QUE PASA DENTRO DE LA FUNCION CALLBACK
//. LLAMAMAMOS A FUNCION PRUEBA Y LE PASAMOS
//. COMO PARAMETRO LA FUNCION DECIRNOMBRE QUE A SU VEZ
//. RESCATA EL NOMBRE QUE RETORNA PRUEBA Y LO TOMA COMO PARAMETRO
//.
//.
// prueba(decirNombre(nombre)){
//     callback(nombre);
// };
//.
//.
//.ES DECIR SE CUMPLE LA FUNCION PRUEBA, TOMA A PEDRO PARA LUEGO
//. CUMPLIR LA FUNCION DECIR NOMBRE
//.
//.
//.



// // Callbacks => funcion flecha

// function prueba(callback){ //Esta funcion será llamada a la cual se le pasará como parámetro otra funcion
//     callback('pedro'); // Es decir que callback('pedro') será el parametro de la nueva funcion (decirNombre)
// }

// prueba((nombre) =>{ //Funcion que se pasa como parametro
//     console.log(nombre);
// });

// // tambien funciona de esta forma
// // prueba(nombre => console.log(nombre));




// //Ejemplos
// //________________________
// //_______________________________}
// //___________________________________

// class Persona {
//     conctructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
// };

// const data = [
//     ['Ambrosia', 'Gonzalez'],
//     ['Clariza', 'Goidas'],
//     ['Neye', 'Goidas'],
//     ['Sibo', 'Goidas']
// ];
// const personas = [];

//     for(let i= 0; i < data.length; i++){
//         personas[i] = new Persona(data[i][0], data[i][1]);
//     }

// const obtenerPersona = (id,cb)=>{
//     if(personas[id] == undefined){
//         cb("No se ha encontrado la persona");
//     }else {
//         cb(null,personas[id].nombre);
//     }
// }
// obtenerPersona(1,(err,persona)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(persona);
//     }
// });







//EJERCICIO PARA LISTA DE QUEHACERES


// let textAgregarTarea = document.getElementById('agregarTarea');
// let btnAgregar = document.getElementById('btnAgregar');
// let nuevasTareas = document.getElementById('nuevasTareas');


// // creo mi array principal con la lista de quehaceres
// let arrTasks = [
//     {id: 1, task: 'Hacer ejercicio AM'}
// ];

// // creo mi funcion que crea los elementos de la lista con el parametro list

// const crearListaTasks = (list) =>{
//     let html ="";
//     list.forEach(element => {
//         html +=  `<li>${element.id} ${element.task}<button onclick="btnBorrar(${element.id})">X</button></li></li>`;
//     });
//     nuevasTareas.innerHTML = html;
// };
// //lamo mi funcion para agregar mi lista de objetos con arrTask como parametro 
// crearListaTasks(arrTasks);

// // Evento de mi boton que agrega una nueva tarea 

// btnAgregar.addEventListener('click', ()=>{
//     let count = arrTasks.length +1;
//     let nuevaTask = {id: count, task: textAgregarTarea.value};
//     arrTasks.push(nuevaTask);

//     textAgregarTarea.value = "";
//     crearListaTasks(arrTasks);
// });

// //evento de mi boton para eliminar una nueva tarea
// const btnBorrar = (id) =>{
//     const index = arrTasks.findIndex((element) => element.id === id);
//     arrTasks.splice(index, 1);
  
    
//     crearListaTasks(arrTasks);
//     ordenarId(arrTasks);
// }

