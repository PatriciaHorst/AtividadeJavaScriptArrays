let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(total, numero) {
    return total + numero;
}, 0);

let calcularMedia = soma / numeros.length;

console.log(calcularMedia);