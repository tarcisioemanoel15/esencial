class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando`)
  }

}

const p1 = new Pessoa("Tarcisio");
const p2 = new Pessoa("Andressa");
console.log(p1.falar)