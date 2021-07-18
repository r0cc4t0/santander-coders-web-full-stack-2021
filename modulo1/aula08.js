console.log('Aula 08 - Funções');

function escreva(texto) {
  console.log(texto);
}
escreva('Meu primeiro parâmetro');
escreva('Meu segundo parâmetro');

function somar(a, b) {
  return a + b;
}
let resultado = somar(1, 3);
escreva(resultado);

const multiplicar = function (a, b) {
  return a * b;
};
escreva(multiplicar(2, 3));

const potencia = (a, b) => Math.pow(a, b);
escreva(potencia(7, 4));

const hello1 = () => 'Hello, World!';
const hello2 = name => 'Hello, ' + name + '?';
const hello3 = name => {
  return 'Hello, ' + name + '.';
};
console.log(hello1());
console.log(hello2('World'));
console.log(hello3('World'));

const primalidade = numero => {
  let n = Math.abs(parseInt(numero));
  let divisores = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisores++;
    }
  }
  if (divisores == 2) {
    console.log(n + ' é um número primo.');
  } else {
    console.log(n + ' não é um número primo.');
  }
};
primalidade(37);

console.log('');
