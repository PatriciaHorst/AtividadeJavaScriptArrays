const prompt = require('prompt-sync')()

let contaBancaria ={
    saldo:11300,
    titular:"Patricia da Silva",
    sacar: function(){
        return saldo - valorSolicitado;
    },
    depositar: function(){
        return saldo + valorDepositado;
    },
    verSaldo:function(){
        return saldo;
    }
}

let
   