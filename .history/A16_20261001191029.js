const prompt = require('prompt-sync')()

let contaBancaria ={
    saldo:10,
    titular:"Patricia da Silva",
    sacar: function(valorSolicitado){
        
        this.saldo -= valorSolicitado;
    },
    depositar: function(valorDepositado){
        this.saldo += valorDepositado;
    },
    verSaldo:function(){
        return saldo;
    }
}
Object.seal(contaBancaria);

let menuBanco = Number(prompt('----Menu----'
    +'\n 1 - Ver saldo '
    +'\n 2 - Sacar'
    +'\n 3 - Depositar'
));

switch(menuBanco){
    case 2: 
        let valorSolicitado = Number(prompt('Digite o valor a ser sacado -> ')) 
        contaBancaria.sacar(valorSolicitado);  
        break;
    ;
    case 1:;
    case 3:;
}




   