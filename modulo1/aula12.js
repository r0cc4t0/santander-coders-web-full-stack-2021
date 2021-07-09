console.log('Aula 12 - Reduce');

const vetor14 = [1, 2, 3, 4, 5, 6];

const soma = vetor14.reduce((estado, item) => estado + item, 0);
console.log(soma);

const produto = vetor14.reduce((estado, item) => estado * item);
console.log(produto);

const matriz3 = [
  [1, 2, 3, 4, 5, 6],
  [6, 5, 4, 3, 2, 1],
  [6, 1, 5, 2, 3, 4]
];

const somaColunas = (estado, item) => {
  return [
    estado[0] + item[0] + item[1],
    estado[1] + item[2] + item[3],
    estado[2] + item[4] + item[5]
  ];
};

const vetor15 = matriz3.reduce(somaColunas, [0, 0, 0]);
console.log(vetor15);

let vetor16 = [
  { nome: 'Gabriel', nota1: 5, nota2: 4 },
  { nome: 'Ana', nota1: 4, nota2: 3 },
  { nome: 'Vanessa', nota1: 7, nota2: 8 },
  { nome: 'Leandro', nota1: 2, nota2: 7 },
  { nome: 'Julia', nota1: 9, nota2: 9 }
];

const estadoInicial = {
  somaNota1: 0,
  somaNota2: 0,
  quantidadeNota1: 0,
  quantidadeNota2: 0
};

const resultadoNotas = vetor16.reduce((estado, valor) => {
  return {
    somaNota1: estado.somaNota1 + valor.nota1,
    somaNota2: estado.somaNota2 + valor.nota2,
    quantidadeNota1: estado.quantidadeNota1 += 1,
    quantidadeNota2: estado.quantidadeNota2 += 1
  };
}, estadoInicial);
console.log(resultadoNotas);

console.log('');
