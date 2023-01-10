// reducer retorna so um elemento
// const numeros = [5, 50, 90, 3, 7, 1, 70, 100, 2, 4, 5, 12];

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 === 0) acumulador.push(valor);
//   return acumulador
// }, []);
// console.log(total)

// const dobrodoValor = numeros.reduce(function (acumulador, valor) {
// acumulador.push(valor * 2)
//   acumulador += valor;
//   return acumulador
// }, 0);
// console.log(dobrodoValor)


// RETORNE A PESSOA MAIS VELHA
const pessoas = [
  { nome: "Tarcisio", idade: 31 },
  { nome: "Andressa", idade: 25 },
  { nome: "Edu", idade: 55 },
  { nome: "Leticia", idade: 7 },
  { nome: "Ronaldo", idade: 32 },
  { nome: "Wallace", idade: 47 },

];

const maisvelha = pessoas.reduce(function (ac, v) {
  if (ac.idade > v.idade) return ac;
  return v;

})
console.log(maisvelha)