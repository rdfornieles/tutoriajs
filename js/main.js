'use strict';
//función que pinte las paletas de colores en HTML
//hacer una llamada con FETCH para recoger los datos
//recoge datos, imágenes y pintamos esos datos en HTML

function init() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json')
    .then(function(response) {
        console.log('response',response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.palettes);
        const palettesArr = data.palettes;

        for (const currentPalettes of palettesArr) {
            console.log(currentPalettes);
            const listEl = document.querySelector(".container");
            listEl.innerHTML += `<ul><li>Nombre: ${currentPalettes.name}</li></ul>`;
        }
    })  
}
init();
