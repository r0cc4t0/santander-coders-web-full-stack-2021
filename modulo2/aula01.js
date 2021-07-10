console.log('Aula 01 - Introdução à Orientação a Objetos');

const pessoa = {
  nome: 'Lucas',
  idade: 26
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

const circulo = {
  raio: 20,
  calcularArea: function () {
    return 2 * Math.PI * this.raio;
  }
};
console.log(circulo.calcularArea());

const agenda = {
  contatos: [
    { nome: 'Contato 1', telefone: 'Telefone 1', email: 'email1@teste.com' },
    { nome: 'Contato 2', telefone: 'Telefone 2', email: 'email2@teste.com' },
    { nome: 'Contato 3', telefone: 'Telefone 3', email: 'email3@teste.com' },
    { nome: 'Contato 4', telefone: 'Telefone 4', email: 'email4@teste.com' }
  ],
  adicionarContato: function (contato) {
    this.contatos.push(contato);
  }
};
agenda.adicionarContato({
  nome: 'Contato 5', telefone: 'Telefone 5', email: 'email5@teste.com'
});
console.log(agenda.contatos);

console.log('');
