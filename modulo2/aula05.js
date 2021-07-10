console.log('Aula 05 - Encapsulamento');

function Quadrado(lado) {
  this.lado = lado;
  let cor = 'blue';
}
const quadrado = new Quadrado(7);
console.log(quadrado.cor);
quadrado.cor = 'red';
console.log(quadrado.cor);

function criarQuadrado(lado) {
  let cor = 'yellow';
  return {
    lado,
    getCor: function () {
      return cor;
    }
  };
}
const quadrado2 = criarQuadrado(8);
quadrado2.cor = 'green';
console.log(quadrado2.getCor());

class Quadrado2 {
  constructor(lado) {
    let cor = 'black';
    this.lado = lado;
    this.getCor = () => cor;
  }
}
const quadrado3 = new Quadrado2(4);
console.log(quadrado3.getCor());

console.log('');
