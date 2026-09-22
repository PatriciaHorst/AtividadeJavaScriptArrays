let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let num = 5;

function verificar(num, array) {
    
    let filtrarNumeros = array.filter(function(numMaior){
        return numMaior > num;
        
    });
    return filtrarNumeros;
}

console.log(verificar(num, array));