// Obtener los IDs de los personajes favoritos desde localStorage
let personajesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Seleccionar el contenedor donde se mostrarán los personajes favoritos
let contenedorPersonajes = document.querySelector('.favorite-characters');

// Seleccionar el mensaje de que no hay personajes favoritos
let mensajesNoFavoritos = document.querySelectorAll('.no-favorites-message');

// Ocultar el mensaje de que no hay personajes favoritos si hay alguno
if (personajesFavoritos.length > 0) {
    mensajesNoFavoritos.forEach(function(mensaje) {
        mensaje.style.display = 'none';
    });
}

// Recorrer los IDs de los personajes favoritos y mostrar su información
personajesFavoritos.forEach(function(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Crear el HTML para cada personaje favorito
            let personajeHTML = `
                <article class='character-item'>
                    <img src="${data.image}" alt="${data.name}">
                    <p>Name: ${data.name}</p>
                    <p>Status: ${data.status}</p>
                </article>
            `;
            // Agregar el HTML al contenedor de personajes favoritos
            contenedorPersonajes.innerHTML += personajeHTML;
        })
        .catch(function(error) {
            console.log('Error al obtener datos del personaje:', error);
        });
});
