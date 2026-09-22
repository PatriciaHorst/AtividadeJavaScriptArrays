let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let num = 4;

let contarOcorrencias = array.filter(function(ocorrencias){
    return ocorrencias == num;
});

console.log(contarOcorrencias.length);