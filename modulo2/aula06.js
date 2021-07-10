console.log('Aula 06 - Métodos de Acesso');

class Triangulo {
  constructor(base, altura) {
    let cor = 'purple';
    this.base = base;
    this.altura = altura;
    this.getCor = () => cor;
    this.setCor = c => cor = c;
  }
}
const triangulo = new Triangulo(19, 14);
console.log(triangulo.getCor());
triangulo.setCor('navy');
console.log(triangulo.getCor());
triangulo.cor = 'cyan';
console.log(triangulo.cor);

class Triangulo2 {
  constructor(base, altura) {
    this._cor = 'orange';
    this.base = base;
    this.altura = altura;
  }
  get cor() {
    return this._cor;
  }
  set cor(cor) {
    this._cor = cor;
  }
}
const triangulo2 = new Triangulo2(11, 18);
console.log(triangulo2.cor);
triangulo2.cor = 'white';
console.log(triangulo2.cor);

function criarTriangulo(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    throw 'Os dados informados não são numéricos!';
  }
  let _cor = undefined;
  return {
    base,
    altura,
    get cor() {
      return _cor;
    },
    set cor(cor) {
      if (cor != 'red' && cor != 'green' && cor != 'blue') {
        throw 'O valor da propriedade cor deve ser "red", "green" ou "blue"!';
      }
      _cor = cor;
    }
  };
}
const triangulo3 = new criarTriangulo(18, 12);
console.log(triangulo3);
triangulo3._cor = 'red';
console.log(triangulo3.cor);
triangulo3.cor = 'green';
console.log(triangulo3.cor);
triangulo3.cor = 'silver';
console.log(triangulo3.cor);
