console.log('Aula 02 - Classe e Construtor');

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoa('Carlos', 20);
console.log(pessoa1);
pessoa1.idade = 21;
console.log(pessoa1);

const pessoa2 = new Pessoa('Laura', 36);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2);

console.log('');
