console.log('Aula 04 - Métodos');

class Retangulo {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
      throw 'Os dados informados não são numéricos!';
    }
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
  calcularArea() {
    return this.base * this.altura;
  }
  duplicar() {
    this.base *= 2;
    this.altura *= 2;
  }
  imprimir() {
    return `<div style="width: ${this.base}px; height: ${this.altura}px; background-color: ${this.cor || 'blue'};"></div>`;
  }
}

const retangulo = new Retangulo(250, 125);
console.log(retangulo.calcularArea());
retangulo.duplicar();
console.log(retangulo.calcularArea());
document.body.innerHTML = retangulo.imprimir();
console.log(retangulo.imprimir());

console.log('');
