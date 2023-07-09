// listCrimenes = []

function getValoresApi(pagina = 1) {
    fetch('https://api.fbi.gov/wanted/v1/list?page=' + pagina)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // data.items.forEach((person) => {
            //     addPersonaje(person);
            //     // console.log(listCrimenes);
            // })
            
            dibujarCard(data.items);
        })
        .catch(() => console.log("Ha habido un error trayendo los datos"))

}

// function addPersonaje(personaje) {
//     listCrimenes.push(personaje);
//     // console.log(listCrimenes)
// }

function dibujarCard(listCrimenes) {

    for (let i = 0; i < listCrimenes.length; i++) {

        let card = document.createElement("div")
        card.classList.add("card")

        let divimagen = document.createElement("div")
        divimagen.classList.add("imagen")

        let imagen = document.createElement("img")
        imagen.src = listCrimenes[i].images[0].original
        divimagen.appendChild(imagen)
        card.appendChild(divimagen)

        let nombre = document.createElement("p")
        nombre.classList.add("nombre")
        nombre.innerHTML = listCrimenes[i].title
        card.appendChild(nombre)
        let descripcion = document.createElement("p")
        descripcion.classList.add("descripcion")
        descripcion.innerHTML = listCrimenes[i].nationality
        card.appendChild(descripcion)


        container = document.querySelector(".container")
        container.appendChild(card)

    }
}

// let paginaActual = 0

// RECARGA AUTOMÁTICA DE NUEVOS ELEMENTOS (PAGINAS) 

// setInterval(function () {
//     paginaActual++;
//     getValoresApi(paginaActual);
// }, 3000)

getValoresApi()
