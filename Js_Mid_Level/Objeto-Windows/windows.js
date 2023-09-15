//Objeto windows 
//Es el objeto mas importante del JS
//Todos dependen de windows
//Windows Object javaScript (todo sobre windows)

//Windows hereda las propiedades de EventTarget

// //open() - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe
// let youtubeURL = "https://youtube.com"
// let ventana = window.open(youtubeURL);


// //close() - Cierra la ventana actual, o la ventana en la que se llamo
// ventana.close();


// //closed - indica si la ventana referenciada esta cerrada o no.
// ventana.closed;  // //DEVUELVE TRUE 


// //stop() - Detiene la carga de recursos en el contexto de navegacion actual
// Windows.stop() // se detiene la ventana


// //alert() - muestra un cuadro de alerta con el contenido especificado y boton aceptar.
// alert("Sos Crack") // el alert sale de windows se escribia windows.alert()


// //print() - Abre el cuadro de dialogo Imprimir para imprimir el documento actual
// print() //imprime el documento web


// //prompt() - Abre el cuadro de dialogo con un mensaje que solicita al usuario un dato (string)  
// prompt("ingresa edad") //el mismo que vimos y viene de windows


// //confirm() - Abre el cuadro de dialogo con un mensaje y dos botones: Aceptar y Cancelar.
// confirm("¿Estas seguro que deseas salir del sitio web?"); ////devuelve true o false




//PANTALLA________________(UTIL)

// //screen - Devuelve una referencia al objeto de pantalla asociado con la ventana
// //SCREN ES UN OBJETO QUE DEBEMOS INDICAR CUAL SERIA SU PROPIEDAD LAS CUALES TRABAJAN CON LA PANTALLA DE WINDOWS
// const screen = window.screen; ////devuelve el objeto
// console.log(screen.availWidth); ////trabaja con el objeto



// //screenLeft y screenTop - Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde de la pantalla
// const screenLeft = window.screenLeft; ////devuelve el objeto son propiedades de lectura
// const screenTop = window.screenTop; ////devuelve el objeto
// console.log(screenTop); 
// console.log(screenLeft);


// //scrollX - devuelve el número de pixeles que el documento se desplaza actualmente horizontalmente
// const scrollPantallaX = window.scrollX;



// //scrollY - devuelve el numero de pixeles que el documento se desplaza verticalmente
// const scrollPantallaY = window.scrollY;
// console.log('X=' + scrollPantallaX + ' Y=' + scrollPantallaY);



//scroll() desplaza la ventana a un lugar particular en el documento (con options y con posiciones)




//minimize() - minimiza la ventana
//Ya no funciona minimize
//resizeBy() - cambia el tamaño de la ventana actual en una cantidad especifica
//resizeTo() - redimensiona dinamicamente la ventana
//moveBy - mueve la ventana en una ubicacion relativa
//moveTo - mueve la ventana en una ubicacion absoluta


// //Objetos barprop
// //Funciona para verificar visibilidad de diferentes barras
// //locationbar, menubar, personalbar, scrollbars.statusbar,toolbar
// window.locationbar.visible;



//Location- Localización de paginas (UTIL);

//window.location.href      --> Devuelve href completo de pagina actual (TODO)
//window.location.hostname  --> Devuelve el nombre de dominio del servidor web (protocolo + dominio)
//window.location.pathname  --> Devuelve la ruta y el nombre de archivo de la pagina actual despues del dominio
//window.location.protocol  --> Devuelve el protocolo web utilizado (http: o https:)
//window.location.assign()  --> Metodo se utiliza para cargar un nuevo documento.

//// HTTPS://     YOUTUBE.COM / CHANNEL/OD9FNAIC
//// PROTOCOL     HOSTNAME      PATHNAME 
//// ---------------  TODO HREF  ------------