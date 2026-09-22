let numero = 5;

function criarArray(numero) {
    let array = [];

    for (let i = 1; i <= numero; i++) {
        array.push(i);
    }

    return array;
}

console.log(criarArray(numero));