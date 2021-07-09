console.log('Aula 06 - Laços de Repetição');

console.log('While');
let count = 0;
while (count < 10) {
  console.log(Math.pow(count, count));
  count++;
}

console.log('Do While');
count = 0;
do {
  console.log(Math.pow(count, 1 / count));
  count++;
} while (count < 10);

console.log('For');
for (let i = 9; i >= 0; i--) {
  console.log(i * i);
}

console.log('');
