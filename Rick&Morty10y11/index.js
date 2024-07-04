let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let resultados = data;
        console.log(data.results[0]);

        //Selecciono la seccion donde se van a anadir los personajes
        let personajes = document.querySelector('.characterList');

        //Variable vacia donde se van a almacenar todos los personajes en HTML
        let characters = '';

        //Recorro el array de datos con el bucle for
        for(let i = 0; i < resultados.results.length; i++) {
            let personaje = resultados.results[i];
            let id = personaje.id;
            
            characters += `
                <article class='character-item'>
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <p>Name: ${personaje.name}</p>
                    <p>Status: ${personaje.status}</p>
                    <button class='boton' data-id='${personaje.id}'>Agregar a favoritos</button>
                </article>
            `; //Agrego data-id para que se guarde el id cada vez que se presione el botón
        }

        //Inserto el HTML completo en la seccion
        personajes.innerHTML = characters;

        // Inicialización de localStorage si 'favoritos' no existe o está vacío
        if (!localStorage.getItem('favoritos')) {
            localStorage.setItem('favoritos', JSON.stringify([]));
        }
        
        // Agrego evento de clic a todos los botones después de insertar el HTML
        let botones = document.querySelectorAll('.boton');
        botones.forEach(function(boton) {
            boton.addEventListener('click', function(event) {
                event.preventDefault(); // Evita el comportamiento predeterminado del botón
                let id = event.target.getAttribute('data-id'); // Obtener el ID del data-id
                agregarAFavoritos(id);
            });
        });

        // Función para agregar a favoritos
        function agregarAFavoritos(id) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

            // Verificar si el ID ya está en la lista de favoritos
            if (!favoritos.includes(id)) {
                favoritos.push(id); // Agregar el ID a la lista de favoritos si no está presente
                localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Guardar la lista actualizada en localStorage
                alert('Personaje agregado a favoritos');
                console.log(favoritos);
            } else {
                alert('Este personaje ya está en favoritos');
            }
        }

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
