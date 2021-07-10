console.log('Aula 03 - Atributos');

class Trapezio {
  constructor(baseMaior, baseMenor, altura) {
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
      throw 'Os dados informados não são numéricos!';
    }
    this.baseMaior = baseMaior;
    this.baseMenor = baseMenor;
    this.altura = altura;
    this.cor = undefined;
  }
}

const trapezio = new Trapezio(12, 9, 5);
console.log(trapezio);
trapezio.cor = 'blue';
console.log(trapezio);

console.log('');
