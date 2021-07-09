console.log('Aula 07 - Vetores');

let vetor = [10, 20, 30, 40, 50];
console.log(vetor[2]);
vetor[2] = '30';
console.log(vetor[2]);

let vetor2 = []
for (let i = 0; i < 10; i++) {
  vetor2.push(i);
}
console.log(vetor2);

let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let valor of vetor3) {
  console.log(valor);
}
for (let indice in vetor3) {
  console.log('Índice: ' + indice + ' | Valor: ' + vetor3[indice]);
}

let vetor4 = [];
vetor4['Índice 1'] = 'Valor 1';
vetor4['Índice 2'] = 'Valor 2';
vetor4['Índice 3'] = 'Valor 3';
console.log(vetor4);

let vetor5 = [0, 'x', true, 1, 'y', false];
console.log(vetor5);

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let linha of matriz) {
  for (let elemento of linha) {
    console.log(elemento);
  }
}

let matriz2 = [];
for (let i = 0; i < 7; i++) {
  let vetor6 = [];
  for (let j = 0; j < 7; j++) {
    vetor6.push(Math.round(Math.random() * 100));
  }
  matriz2.push(vetor6);
}
console.log(matriz2);

let vetor7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(vetor7);

vetor7.push(10);
console.log(vetor7);

vetor7.pop();
console.log(vetor7);

vetor7.unshift(0);
console.log(vetor7);

vetor7.shift();
console.log(vetor7);

console.log('');
