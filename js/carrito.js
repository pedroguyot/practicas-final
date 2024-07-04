// Espera a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los IDs de personajes favoritos desde localStorage, si existen
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    // Selecciona el contenedor donde se mostrarán los personajes favoritos
    let lista = document.querySelector('.lista');
    // Variable para almacenar el HTML de los personajes favoritos
    let elementosLista = '';

    // Verifica si hay personajes favoritos almacenados
    if (favoritos.length > 0) {
        // Itera sobre cada ID de personaje favorito
        favoritos.forEach(function(id) {
            // Realiza una solicitud fetch para obtener los datos del personaje
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(function(response) {
                    return response.json(); // Convierte la respuesta en formato JSON
                })
                .then(function(data) {
                    // Crea el HTML para cada personaje favorito con sus datos
                    let personajeHTML = `
                        <article>
                            <img src="${data.image}" alt="${data.name}">
                            <p>Nombre: ${data.name}</p>
                            <p>Status: ${data.status}</p>
                        </article>
                    `;
                    // Agrega el HTML del personaje actual a la lista acumulada
                    elementosLista += personajeHTML;
                    // Actualiza el contenido HTML del contenedor con todos los personajes
                    lista.innerHTML = elementosLista;
                })
                .catch(function(error) {
                    // Captura errores de la solicitud fetch y los muestra en la consola
                    console.log('Error al obtener datos del personaje:', error);
                });
        });
    } else {
        // Si no hay personajes favoritos, muestra un mensaje de carrito vacío
        lista.innerHTML = '<p>Tu carrito está vacío.</p>';
    }
});



