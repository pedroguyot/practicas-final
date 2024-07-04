# practicas-final


body {
    background-image: url(../img/bg-body.png);
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-register {
    display: flex; /*Utiliza flexbox para el diseno de linea*/
    justify-content: flex-end; /*Alinea los elementos al final del contenedor*/
}

.login-register p {
    margin: 0; /*Elimina el margen por defecto de los parrafos*/
    padding-right: 20px; /*Agrega espacio a la izquierda de cada parrafo*/
}

.logo {
    text-align: center; /*Lo tengo que centrar como texto, porque estoy centrando el 'texto' de la caja */
}

.logo img {
    border-radius: 50%; /*Recorto los bordes de la img a un circulo*/
}

.nav-header {
    display: flex; /* Utiliza flexbox para alinear los elementos en una fila */
    justify-content: center; /* Centra los elementos horizontalmente */
}

.nav-header ul {
    list-style: none; /* Quita los bullets de la lista */
    padding: 0;
    display: flex; /* Utiliza flexbox para alinear los elementos en una fila */
}

.nav-header li {
    width: 180px; /* Ancho de cada caja */
    height: 50px; /* Alto de cada caja */
    background-color: #444; /* Color de fondo de las cajas */
    margin-right: 20px; /* Espacio entre las cajas */
    text-align: center; /* Centra el texto horizontalmente */
    line-height: 50px; /* Alinea verticalmente el texto */
}

.nav-header li a {
    color: #666; /* Color del texto */
    text-decoration: none; /* Quita el subrayado del enlace */
    display: block; /* Hace que el enlace llene todo el espacio del <li> */
    height: 100%; /* Ajusta la altura del enlace para ocupar toda la caja */
}
