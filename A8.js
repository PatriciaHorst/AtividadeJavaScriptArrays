const prompt = require('prompt-sync')()

let array = [];

const quant = Number(prompt('Quantos numeros voce quer adicionar a lista? '))

for (let i = 1; i <= quant; i++) {
    const num = Number(prompt('Adicione o numero -> '))
    array.push(num)
}

let crescente = array.sort(function(a , b){
    return a - b;
});

console.log(crescente);