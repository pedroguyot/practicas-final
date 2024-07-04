// Pasos para obtener el ID del personaje desde la URL
let qs = location.search; // Obtener la query string (qs) de la URL
let qsto = new URLSearchParams(qs); // Transformar la query string en un objeto literal
let id = qsto.get('id'); // Obtener el ID del objeto literal (id del personaje)

// Armar la URL de la API con el ID específico del personaje
let url = `https://rickandmortyapi.com/api/character/${id}`;

// Realiza la solicitud fetch para obtener los datos del personaje específico
fetch(url)
    .then(function(response){
        return response.json(); // Convierte la respuesta en formato JSON
    })
    .then(function(data){
        // Paso 1: Captura elementos del DOM para actualizarlos con los datos del personaje
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');
        let addToCartBtn = document.querySelector('.fav');

        // Paso 2: Actualiza los elementos del DOM con los datos obtenidos del personaje
        title.innerText = data.name; // Actualiza el título con el nombre del personaje
        image.src = data.image; // Actualiza la imagen con la imagen del personaje
        status.innerText += data.status; // Actualiza el estado con el estado del personaje
        especie.innerText += data.species; // Actualiza la especie con la especie del personaje

        // Función para agregar al carrito cuando se hace clic en el botón de agregar al carrito
        addToCartBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            if (!favoritos.includes(id)) {
                favoritos.push(id); // Agrega el ID al array de favoritos
                localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Guarda en localStorage
                alert('Personaje agregado al carrito'); // Muestra una alerta indicando que se agregó el personaje al carrito
            } else {
                alert('Este personaje ya está en tu carrito'); // Muestra una alerta si el personaje ya está en el carrito
            }
        });

    })
    .catch(function(error){
        console.log(error); // Captura y muestra errores en la consola
    });

