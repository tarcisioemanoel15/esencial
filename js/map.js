// pode alterar o valor do array

// const numeros = [5, 50, 90, 3, 7, 1, 70, 100, 2, 4, 5, 12];
// const dobre = numeros.map(e => e * 2)
// console.log(dobre);

const pessoas = [
  { nome: "Tarcisio", idade: 31 },
  { nome: "Andressa", idade: 25 },
  { nome: "Edu", idade: 55 },
  { nome: "Leticia", idade: 7 },
  { nome: "Ronaldo", idade: 32 },
  { nome: "Wallace", idade: 47 },

];

// const soONome = pessoas.map(obj => obj.nome);
// console.log(soONome);
// const soOIDADE = pessoas.map(obj => obj.idade);
// console.log(soOIDADE);

const addID = pessoas.map(function (val, ind) {
  const obj = { ...val }
  obj.id = ind;
  return obj;
});
console.log(addID);




