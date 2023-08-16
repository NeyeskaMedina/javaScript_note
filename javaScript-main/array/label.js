array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1];

forRancio:
for (let array in array2){
    if (array == 2){
        for(let array of array1){
            document.write(array + "<br>");
            break forRancio; //corte del codigo (se corta desde el primer for)
        }
    } else{
        document.write(array2[array] + "<br>");
    }
}