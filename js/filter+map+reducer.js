const numeros = [5, 50, 90, 3, 7, 1, 70, 100, 2, 4, 5, 12];

const numerosPares = numeros.filter(val => val % 2 === 0)
  .map(val => val * 2)
  .reduce((ac, val) => ac + val);

// A soma do dobro de todos os pares
console.log(numerosPares)