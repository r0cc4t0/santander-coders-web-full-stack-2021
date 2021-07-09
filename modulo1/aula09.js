console.log('Aula 09 - Funções de Alta Ordem');

const subtrair = (a, b) => a - b;
const dividir = (a, b) => a / b;
const raizQuadrada = z => Math.sqrt(z);
const raizCubica = z => Math.cbrt(z);

const aplicarOperacao = (a, b, operacao) => operacao(a, b);
const efetuarOperacao = (z, operacao) => operacao(z);

console.log(aplicarOperacao(8, 2, subtrair));
console.log(aplicarOperacao(9, 3, dividir));
console.log(efetuarOperacao(10, raizQuadrada));
console.log(efetuarOperacao(5, raizCubica));

const somarX = x => y => x + y;

const somar2 = somarX(15);
const somar3 = somarX(36);
console.log(somar2(70));
console.log(somar3(49));

console.log('');
