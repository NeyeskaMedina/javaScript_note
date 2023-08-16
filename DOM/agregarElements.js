// //cr3eando una etiqueta

// let div = document.createElement('div');
// console.log(div);
// // className classList
// // className nos permite agregar una clase a la etiqueta
// // classList nos permite agregar varias clases en forma de string

// div.className = 'mt-3';
// div.classList = 'col text-center my-3';
// //siempre toma la ultima clase añadida

// //Crear elementos y al mismo tiempo colocarle sus atributos

// let image = document.createElement('img');

// image.src = 'img/vs.png';
// image.width = '300px'
// image.alt = 'Imagen de Visual Studio Code'
// console.log(image);



//agregando contenido al HTML
//traemos el contenedor padre donde queremos ingresar el elemento


let contenedorSeccion = document.querySelector('main');
console.log(contenedorSeccion);

//creamos el elemento
let div = document.createElement('div');
div.innerText = "Soy un div desde JS";

let texto = document.createElement('h3');
texto.innerText = "Son un h3 desde JS"

// appendChild = Para agregar hijos al padre (nos permite agregar solo un node)
// contenedorSeccion.appendChild(div);


// append = Nos ´permite enviar una serie nde nodos
// Podemos agregar un objeto

const autor ={
    nombre: 'Neye Goidas',
    descripcion: 'Soy una h1 para decir que la imagen es un objeto insertado dentro de texto innerHTML añadido',
    imagen: 'img/vs.png'
}


// let texto = div.innerHTML('h3');
// texto.innerText("Hola yo soy nuevo");


//agregando un elemento dentro de otro (div que contiene p y h y div)

let div2 = document.createElement('div');
div2.className = 'box-contenedor';
contenedorSeccion.append(div,texto, div2);

let texto2 = `<h3> SOY UN H3 DENTRO DE UN DIV DESDE JS </h3>
<img src="${autor.imagen}"
alt="">
<h1> ${autor.descripcion} </h1>`//agregar un objeto dentro de una etiqueta insertada con JS

div2.innerHTML = texto2;

// Submit es el evento de enviar información de un formulario (onsubmit es el evento de ese boton)
 
let modificarHfive = document.querySelector('.segunda span');
console.log(modificarHfive);



