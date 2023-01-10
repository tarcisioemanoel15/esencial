function rand(max, min) {
  min *= 1000;
  max *= 1000;
  Math.floor(Math.random() * (max - min) * min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (typeof msg !== 'string') {
        reject('Cai no ERROR');
        return;
      }

      resolve(msg.toLocaleUpperCase() + ' - Passei na promise');
      return;

    }, tempo);
  })
}


async function executa() {
  try {

    const f1 = await espera("fase 1", rand());
    console.log(f1);

    const f2 = await espera('fase 2', rand());
    console.log(f2);

    const f3 = await espera("fase 3", rand());
    console.log(f3);
  } catch (e) {
    console.log("ERROR", e)
  }
}
executa();
