console.log('Aula 11 - Filter');

const vetor12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const pares = vetor12.filter(x => x % 2 == 0);
console.log(pares);

const impares = vetor12.filter(function (x) { return x % 2 != 0 });
console.log(impares);

const vetor13 = vetor12.filter(n => n % 3 == 0 || n % 5 == 0);
console.log(vetor13);

console.log('');
