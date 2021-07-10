console.log('');
console.log('Aula 07 - Herança e Polimorfismo');

class Pai {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Filho extends Pai {
  constructor(nome, idade, rg, cpf) {
    super(nome, idade);
    this.rg = rg;
    this.cpf = cpf;
  }
}

const pai = new Pai('Lucas', 26);
console.log(pai);
console.log(pai instanceof Pai);
console.log(pai instanceof Filho);

const filho = new Filho('Lucas', 26, '00.000.000-0', '111.111.111-11');
console.log(filho);
console.log(filho instanceof Pai);
console.log(filho instanceof Filho);

console.log('');
