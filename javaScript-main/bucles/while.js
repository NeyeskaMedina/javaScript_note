// hacer mientras... la condicion dentro de parentesis se cumpla. 
// let i = 0;
// while(i < 2){
// i++; 
// document.write(i);
// }

// Repite la accion hasta que la condición deje de ser verdadera o cumplirse.

let b = 0;
while(b < 1000){
    b++; 
    document.write(b + "<br>");
    if(b == 10){
        break; //break finaliza la accion del while
    }
}

