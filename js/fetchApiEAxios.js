const container = document.querySelector('.container');

// fetch('./fetchApiEAxios.json')
//   .then(response => response.json())
//   .then(json => carrPag(json))

axios('./fetchApiEAxios.json')
  .then(response => carrPag(response.data))

function carrPag(json) {

  for (let nJson of json) {

    container.innerHTML += `
    <ul>
    <li>${nJson.nome}</li>   
    </ul>
    `;

  }

}

