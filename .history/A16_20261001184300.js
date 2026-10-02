const prompt = require('prompt-sync')()

let contaBancaria ={
    saldo:11300,
    titular:"Patricia da Silva",
    sacar: function(){
        return valorAtualizado = saldo - valorSolicitado;
    },
    depositar: function(){
        return saldo + valorDepositado;
    },
    verSaldo:function(){
        return saldo;
    }
}

let menuBanco = Number(prompt('----Menu----'
    +'\n 1 - Ver saldo '
    +'\n 2 - Sacar'
    +'\n 3 - Depositar'
));

    switch(resposta){
        case 1 :
            let respostaSacar = Number(prompt('Digite a quantia que vc quer sacar -> '));
            if(respostaSacar > contaBancaria.saldo){
                console.log('Saldo Insufieciente');
            }else if(respostaSacar <= contaBancaria.saldo){
                contaBancaria.saldo - respostaSacar;
                console.log('Saque realizado com sucesso, seu saldo atual é de: '+ contaBancaria.saldo
                )
    }
}
   