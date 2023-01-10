function rand(max, min) {
  min += 1000;
  max += 1000;
  return Math.floor(Math.random() * (max - min) + min);

}

function espera(msg, tempo) {

  return new Promise((resolve, reject) => {


    setTimeout(() => {
      resolve(msg)
    }, tempo);

  });

}

espera('frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return espera('frase 2', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera('frase 3', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    console.log('O ultimo');
  })
  .catch();


