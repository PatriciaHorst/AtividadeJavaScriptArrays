function criarMatriz(linhas , colunas){

    let matriz = [];

    for(let i = 0; i >= matriz; i++){
        matriz[i] = [];
        for(let j = 0; i >= matriz; i++){
            matriz[i][j] = Math.floor((Math.random()*16) + 1);
        }
    }
    return matriz;
}
console.log(criarMatriz(3,5))