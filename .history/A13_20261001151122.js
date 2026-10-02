let frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas)

let segundo = frutas.slice(1,2);
console.log(segundo);

frutas.push('morango');
console.log(frutas);

frutas.shift();
console.log(frutas);

let numeros = [1, 2, 3, 4];

numeros.push(5);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

numeros.shift();
console.log(numeros);

let frutas2 = ['manga', 'abacaxi', 'melancia'];

let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

let primeiros = todasFrutas.slice(0, 2);
console.log(primeiros);

todasFrutas.splice(1, 1 );
console.log(todasFrutas);

let encontrarIndice = todasFrutas.indexOf('banana');
console.log(encontrarIndice);

let inicial = frutas.filter((todasFrutas)