let usuario = prompt("Dinos ¿cual es tu nombre carnal?");
let num1 = prompt(`¡Hola ${usuario}! dame tu primer núnmero`);
let num2 = prompt(`Ahora ${usuario} dame tu segundo núnmero`);
num1 = parseInt(num1);
num2 = parseInt(num2);
    if(num1 > num2){
        document.write(`${num1} es mayor que ${num2} <br>`);
        }else if(num2 > num1){
            document.write(`${num2} es mayor que ${num1} <br>`);
        }else if(num1 = num2){
            document.write(`${num1} es igual que ${num2} <br>`);
        }else {
            document.write("los datos ingresados son letra te pedi numero bruto");
    }
    alert("El programa funciona excelente");


