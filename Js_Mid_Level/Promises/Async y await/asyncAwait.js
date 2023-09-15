const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre: 'Fisica',
        nota: 7
    },
    {
        nombre: 'Matemática',
        nota: 6
    },
    {
        nombre: 'Programacion IV',
        nota: 7
    }
]

const obtenerMateria = (id) => {
    return new Promise((res, rej)=>{
        materia = materias[id];
        if(materia == undefined) rej('la materia no existe');
        else setTimeout(() =>{res(materia)},Math.random()*2000);
    });
}
// obtenerMateria(0).then(res => console.log(res));

const devolverMaterias = async ()=>{
    let materia = [];
    let materiaINNER = '';
    for(let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        
        materiaINNER += `
            <div class="materia">
                <div class="nombre">
                    ${materia[i].nombre}
                </div>
                <div class="nota">
                    ${materia[i].nota}
                </div>
            </div>
        `
        materiasHTML.innerHTML = materiaINNER; //dentro del for solo para ver el evento cada 2seg
    }
        
}
devolverMaterias();