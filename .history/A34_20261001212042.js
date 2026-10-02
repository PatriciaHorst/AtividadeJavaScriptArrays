function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.descrever = function() {
    console.log(`${this.nome} custa R$ ${this.preco}`)
}

let livro = new Produto("O Senhor dos Anéis", 80);

livro.descrever();