let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022
};

for (const propriedade in carro) {
    console.log(propriedade + " | " + carro[propriedade]);
}