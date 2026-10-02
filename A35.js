function Guerreiro(nome, anoNascimento) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.vida = 100;
}

Guerreiro.prototype.atacar = function () {
    console.log("Atacando!")
}

let guerreiro1 = new Guerreiro("Arthur", 2009);
let guerreiro2 = new Guerreiro("Lancelot", 1593);

guerreiro1.atacar();
guerreiro2.atacar();