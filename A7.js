const prompt = require('prompt-sync')();

let listaNum = [];

for (let index = 1; index <= 3; index++) {
    let num = Number(prompt('Adicione o numero -> '));
    listaNum.push(num);
}

listaNum.reverse();

console.log(listaNum);
