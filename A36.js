const pessoa = {
    nome: "Renan",
    anoNascimento: 2008,
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${2026 - this.anoNascimento} anos.`);
    }
}
pessoa.apresentar();