let contato = { 
    nome: "Ana Silva", 
    telefone: "98765-4321",
    cidade: "São Paulo" 
};

Object.seal(contato);

contato.telefone = 12345-6789;
contato.email = 'contato@exemplo.com'