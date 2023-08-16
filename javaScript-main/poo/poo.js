//PROGRAMACIÓN ORIENTADA A OBJETO

// En la POO se usa una clase para definir nuestro objeto
// utilizamos el contructor para constuir  las caracteristicas de nuestro objecto
// le pasamos los parametros a nuestro objetos.
// los instanciamos de forma que los parametros o caracteristicas sean iguales a las 
//instancias de nuestro objeto
// EJEMPLO

// class animal { // Mediante la clase creamos nuestro objeto
//     constructor(especie,edad,color){ //con el constructor creamos las caracteristicas 
//     de nuestro objeto como parámetros
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
// }
// let perro = new animal ("perro", 5, "marrón"); //instanciamos nmuestro objeto pasandole 
// las características de los parametros
// let gato = new animal("gato",4,"negro/blanco");
// let pichon = new animal("pichon", 2,"verde"); 

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pichon.info + "<br>");









//LOS MÉTODOS SON ACCIONES ESPECIFICA QUE REALIZA CADA OBJETO
//son creados dentro de la clase como funciones
//Si se crea una funcion dentro de una clse se le dice metodo
// si se crea una funcion fuera de la clase se llama funcion

// class animal { 
//     constructor(especie,edad,color){ 
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     // this.verInfo = ()=>{ //NO SE USA THIS DENTRO DE LA CLASE SOLO PARA CONSTRUCTORES
//     //     document.write(this.info);
//     // }
//     // verInfo = () => { //NO SE USA FUNCION FLECHA DENTRO DE UNA CLASE NI SE UNA VARIABLES PARA DECLARARLAS
//     //     document.write(this.info);
//     // }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// let perro = new animal ("perro", 5, "marrón"); 
// let gato = new animal("gato",4,"negro/blanco");
// let pichon = new animal("pichon", 2,"verde"); 

// perro.verInfo();
// gato.verInfo();
// pichon.verInfo();


 


//Los conceptos que se explicaran a continuación no tienen palabras reservadas y van 
// a parte de los conceptos de herencia, metodos estáticos y metodos accesores (getters y setters)
//nos habla de la forma de como trabajamos con el lenguaje de poo
//ABSTRACCION
//.................
//...................
//Es resumir las caracteristicas lo mas que se pueda del objeto.



//Modularidad
//.................
//...................
// es la capacidad de resolver un problema grande por partes


//Encapsulamiento
//.................
//...................
// es hacer que nuestra data sea de forma privada que el usuario no pueda acceder tan 
//facilmente en otras palabras seria encapsular los datos

//Polimorfismo
//.................
//...................
// Es ver como un objeto se comporta de manera distinta 
// ante el mismo método solo por que sus propiedades son diferentes




// HERENCIA


class Animal { 
    constructor(especie,edad,color){ 
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    
    verInfo(){
        document.write(this.info + "<br>");
    }

}

class Perro extends Animal{
     constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
        this.info = `Soy un ${this.especie}, de raza <b> ${this.raza}</b> tengo ${this.edad} años y soy de color ${this.color}`;
     }
     verInfoPerr(){
        document.write(this.info + "<br>");
     }
     ladrar(){
        alert("¡WAW!");
     }
}
let perros = new Perro ("perro", 5, "marrón", "Dogo"); 
let gatos = new Animal("gato",4,"negro/blanco");
let pichones = new Animal("pichon", 2,"verde"); 

perros.verInfoPerr();
gatos.verInfo();
pichones.verInfo();



