function getValoresApi(pagina=1) {
    fetch('https://api.disneyapi.dev/character?page='+ pagina )
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            
            dibujarCard(datos.data);
        })
        // .catch(() => console.log("Ha habido un error trayendo los datos"))

}


function dibujarCard(DisneyCard) {

    for (let i = 0; i < DisneyCard.length; i++) {

        let card = document.createElement("div")
        card.classList.add("card")

        let divimagen = document.createElement("div")
        divimagen.classList.add("imagen")

        let imagen = document.createElement("img")
        imagen.src = DisneyCard[i].imageUrl
        divimagen.appendChild(imagen)
        card.appendChild(divimagen)

        let nombre = document.createElement("p")
        nombre.classList.add("nombre")
        nombre.innerHTML = DisneyCard[i].name
        card.appendChild(nombre)
        let descripcion = document.createElement("p")
        descripcion.classList.add("descripcion")
        descripcion.innerHTML = DisneyCard[i].tvShows
        card.appendChild(descripcion)


        container = document.querySelector(".container")
        container.appendChild(card)

    }
}

let paginaActual = 0

// RECARGA AUTOMÁTICA DE NUEVOS ELEMENTOS (PAGINAS) 

// setInterval(function () {
//     paginaActual++;
//     getValoresApi(paginaActual);
// }, 3000)

getValoresApi()