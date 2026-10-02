let carro ={
    marca: "JEEP",
    modelo: "fusca",
    ano: 2018.
}

console.log(carro['marca']);
carro.ano = 2025;

function getIdade (carro){
    return carro['ano'];
}
console.log(getIdade(carro));

function getDescricao(carro){
    return carro['marca']+carro['modelo']+carro['ano'];
}