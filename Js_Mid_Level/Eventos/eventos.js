// Eventos
// Que es? - es cualquier cambio que ocurre en nuestra pantalla desde el usuario
// handlers es para asociar los event handlers (manejador de eventos)
//Se usa mas los event listeners

const boton = document.getElementById('buttom');

// boton.addEventListener('click',saludar);
// // para pasar parametro una funcion dentro de un
// // add event listener no funciona la funcion flecha
// // solo encontrara la funcion normal
// // es decir, como en el siguiente ejemplo

// function saludar(){
//     alert('Hola crack');
//     boton.removeEventListener('click', saludar);
// // remueve la escucha del  evento
// }


// //Otra forma de hacerlo es con la funcion explicita que se ejecuta 
// // una vez se ejecute el evento
// // que es la forma correcta
// boton.addEventListener('click', ()=> {
//     alert('Hola Crack')
   
// });  


// // como parametro se puede pasar el evento event para saber que tipo de eventp se esta ejecutando
// // ahora si quiero acceder al objeto desencadeno el evemto se puede mostrar con e.target ejemplo
// boton.addEventListener('click', (evt)=> {
//     alert('Hola Crack')
//     console.log(evt); //aca nos muestra que tipo de evento
//     console.log(evt.target); //nos muestra el objeto donde ocurrió el evento
// });  

//Flujo de eventos o Event Flow
// el orden de los eventos
// Event Bubbling vs Even Capturing
// Los de burbuja y los de captura
// se ejecuta del mas especifico al menos especifico o del menos especifico al mas especifico
//por defecto el event bubbling

//ejemplo tenemos un boton dentro de un contenedor tenemos el escucha para ambos
// nos mostrara primero el click hecho en boton y luego el del contenedor

const click = document.getElementById('click');
const contenedor = document.getElementById('contenedor');


// contenedor.addEventListener('click', () =>{
//     alert('di click en contenedor');
// },true);
// click.addEventListener('click', () =>{
//     alert('di click en boton');
// });

//para cambiar de posicion de ejecucion 
//solo agregamos true como en el ejemplo anterio para 
//que al darle click ya no se ejecute primero el boton

// //Para dejar de propagar estos eventos a los contenedores
// contenedor.addEventListener('click', (evt) =>{
//     alert('di click en contenedor');
// });
// click.addEventListener('click', (evt) =>{
//     alert('di click en boton');
//     evt.stopPropagation(); // se detiene
// });



//EVENTOS DEL MOUSE

//click --> cuando se presiona click en mouse
// dblclick --> ocurre con un doble click
// mouseover --> ocurre cuando el puntero se mueve sobre un elemento o uno de sus hijos
// mouseout --> ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios

//contextmenu --> ocurre con click derecho para abrir un menu contextual
// mouseenter --> ocurre cuando el puntero de mueve sobre un elemento
// mouseeleave --> ocurre cuando el punteri de mueve fuera de un elemento
// mouseup --> ocurre cuando un usuario suelta un boton del mouse sobre un elemento
// mousemove --> ocurre cuando el puntero se mueve mientras esta sobre un elemento

// EVENTOS DE TECLADO

//keydown --> ocurre cuando una tecla se  presiona
//keypress --> ocurre cuando una tecla se presiona y se suelta en el mismo elemento
//onkeyup --> ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente


//EVENTOS DE INTERFAZ

// //error 
// //- ocurre cuando sucede un error durante la carga de un archivo multimedia
// const img = document.querySelector('#img-prueba');
// console.log(img);
// img.addEventListener('error', () => {
//     console.log('Ha ocurrido un ERROR');
// });


//load 
//- ocurre cuando un objeto se ha cargado
//beforeunload -- ocurre antes de que un documento este a punto de descargarse 
//unload -- ocurre una vez que se ha descargado una pagiina
//resize -- ocurre cuando se cambia el tamaño de la vista del documento
//scroll -- ocurre cuando se desplaza la barra de desplazamiento de un elemento
//select -- ocurre despues de que el usuario selecciona algún texto de input o textarea

// EVENTOS TIMERS O TEMPORIZADORES

// // setTimeout()
// // se usa para ejecutar codigo dentro de un tiempo especifico
// const temporizador = setTimeout(()=>{
//     alert('Hola Crack');
// },2000); //se pasan la cantidad de tiempo en ms


//clearTimeout() se detiene y no se ejecuta nunca mas 
// clearTimeout(temporizador);



// //setInterval()
// //ejecuta la misma funcion cada tiempo establecido
// const intervalo = setInterval(()=>{
//     document.write('Hola Crack ');
// },2000); //se pasan la cantidad de tiempo en ms

// setTimeout(() =>{
//     clearInterval(intervalo);
// },6000);

//LOS TEMPORIZADORES CONSUMEN MUCHOS RECURSOS


//NOta: el preventDefault es para hacer validaciones en formularios
