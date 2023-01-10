// FILTER -> sempre retorna um array com , a mesma
// quantidade de elementos ou menos
// OBS: não altera

// const numeros = [5, 50, 90, 3, 7, 1, 70, 100, 2, 4, 5, 12];
// const f = numeros.filter(e => e>10 )
// console.log(f)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const pessoas = [
  { nome: "Tarcisio", idade: 31 },
  { nome: "Andressa", idade: 25 },
  { nome: "Edu", idade: 55 },
  { nome: "Leticia", idade: 7 },
  { nome: "Ronaldo", idade: 32 },
  { nome: "Wallace", idade: 47 },

];

// const pes1 = pessoas.filter(e => e.nome.length > 5)
// console.log(pes1)
// const pes2 = pessoas.filter(e => e.idade > 50)
// console.log(pes2)

// Tecmina com aletra a
const pes3 = pessoas.filter(valorOBJ => {
  return valorOBJ.nome.toLocaleLowerCase().endsWith('a');
})
console.log(pes3)