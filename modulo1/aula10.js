console.log('Aula 10 - Map');

const vetor8 = ['10', '20', '30'];
console.log(vetor8);

const stringToInt = x => parseInt(x);
const vetor9 = vetor8.map(stringToInt);
console.log(vetor9);

const vetor10 = vetor9.map(x => x * x);
console.log(vetor10);

const vetor11 = [1, 2, 3, 4, 5, 6];
console.log(vetor11);

const dobro = item => item * 2;
const vetorDobrado = vetor11.map(dobro);
console.log(vetorDobrado);

const aoQuadrado = (item, indice, vetor) => vetor[indice] * item;
const vetorAoQuadrado = vetor11.map(aoQuadrado);
console.log(vetorAoQuadrado);

const vetorTransformado = vetor11.map(item => Math.pow(item, item));
console.log(vetorTransformado);

const vetorMinusculas = ['a', 'b', 'c', 'd', 'e', 'f'];
const toUpper = str => str.toUpperCase();
const vetorUpper = vetorMinusculas.map(toUpper);
console.log(vetorUpper);

const vetorMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F'];
const toLower = str => str.toLowerCase();
const vetorLower = vetorMaiusculas.map(toLower);
console.log(vetorLower);

console.log('');
