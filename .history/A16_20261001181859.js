const prompt = require('prompt-sync')()

let contaBancaria ={
    saldo:11300,
    titular:"Patricia da Silva"
}

let resposta = Number(prompt('------Menu------'
    +'\n 1 - Sacar '
    +'\n 2 - Depositar'
    +'\n 3 - Ver saldo'
));

    switch(resposta)

   