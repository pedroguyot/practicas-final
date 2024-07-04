console.log("index.js");

// URL de la API de Rick and Morty para obtener los personajes
let url = "https://rickandmortyapi.com/api/character"

// Realiza la solicitud fetch a la API
fetch(url)
    .then(function(response){
        return response.json(); // Convierte la respuesta en formato JSON
    })
    .then(function(data){
        console.log(data); // Muestra los datos obtenidos por consola
        let info = data.results; // Array de personajes obtenido de la API

        // Paso 1: Captura el elemento del DOM donde se mostrarán los personajes
        let lista = document.querySelector('.lista');
        let elementosLista = '';

        // Paso 2: Itera sobre los datos de los personajes y construye el HTML correspondiente
        for(let i=0; i<info.length; i++){
            elementosLista += `<article>
                                <img src=${info[i].image}>
                                <p>Nombre: ${info[i].name}</p>
                                <p>Status: ${info[i].status}</p>
                                <a href="detalle.html?id=${info[i].id}">Ver más</a>
                            </article>`;
        }
        console.log(elementosLista); // Muestra el HTML construido por consola

        // Paso 3: Actualiza el contenido del DOM con los datos obtenidos
        lista.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error); // Captura y muestra errores en la consola
    });
