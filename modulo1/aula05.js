console.log('Aula 05 - Condicionais');

let ensolarado = true;
if (ensolarado) {
  console.log('Vou à praia!');
} else {
  console.log('Vou ao campo!');
}

let numero = 4;

if (numero > 0) {
  console.log('Número positivo');
} else if (numero == 0) {
  console.log('Número zero');
} else {
  console.log('Número negativo');
}

let paridade = numero % 2 == 0 ? 'Número par' : 'Número ímpar';
console.log(paridade);

let conjunto = numero === parseInt(numero) ? 'Número inteiro' : 'Número decimal';
console.log(conjunto);

let sinal = 'azul';
switch (sinal) {
  case 'verde':
    console.log('Sinal aberto, prossiga!');
    break;
  case 'amarelo':
    console.log('Atenção! Sinal prestes a fechar.');
    break;
  case 'vermelho':
    console.log('Sinal fechado, pare!');
    break;
  default:
    console.log('Sinal inválido.');
    break;
}

let hoje = new Date().getDay();
let dia;
switch (hoje) {
  case 0:
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Segunda-feira';
    break;
  case 2:
    dia = 'Terça-feira';
    break;
  case 3:
    dia = 'Quarta-feira';
    break;
  case 4:
    dia = 'Quinta-feira';
    break;
  case 5:
    dia = 'Sexta-feira';
    break;
  case 6:
    dia = 'Sábado';
    break;
}
console.log('Hoje é: ' + dia);

let n = undefined;
if (n) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

let o = {};
if (o) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

console.log('');
