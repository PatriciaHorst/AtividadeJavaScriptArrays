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

    switch(resposta){
        case 1 :
            let respostaSacar = Number(prompt('Digite a quantia que vc quer sacar -> '));
            if(respostaSacar > contaBancaria['saldo']){
                console.log('Saldo Insufieciente');
            }else if()
    }

   