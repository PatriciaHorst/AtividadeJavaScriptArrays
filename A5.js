let frutas = ["maçã", "banana", "laranja"];

let segundoElemento = frutas.slice(1,2);
console.log('\n'+ segundoElemento + ' - segundo elemento');

frutas.push("manga");
console.log(frutas);

let primeiraFruta = frutas.shift();
console.log(frutas+' - sem a primeira fruta');

console.log(frutas.length+' - tamanho da lista frutas');

console.log('\n Lista com FOR')
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

console.log('\n Lista com FOREACH')
frutas.forEach(function(frutas){
    console.log(frutas);
});

let listaFrutas = frutas.map(function(fruta){
        return fruta.length;
});

console.log('\n ');
console.log(listaFrutas);

let listaFrutasMaiores = frutas.filter(function(fruta){
        return fruta.length > 5; 
});
console.log(listaFrutasMaiores);


let soma = listaFrutas.reduce(function(total, num){
    return total + num;
});
console.log(soma);