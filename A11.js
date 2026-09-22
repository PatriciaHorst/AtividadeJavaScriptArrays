let numeros = [1,2,3,4,5];

let comVirgula = numeros.join(", ");
console.log(comVirgula);

numeros.reverse();
console.log(numeros);

let primeros = numeros.slice(0,2);
console.log(primeros);

numeros.sort((a, b) => a - b);
console.log(numeros);

let pares = numeros.filter((a) => a %2 == 0);
console.log(pares);

let quadrado = numeros.map((a) => a * a);
console.log(quadrado);

let soma = numeros.reduce((todos, a ) => todos + a);
console.log(soma);

numeros.forEach((a) => console.log(a));