// Obtener una referencia al elemento donde se mostrarán los datos del usuario
const userDetailsElement = document.getElementById('user-details');

// URL del API
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1'; // Cambia el 1 por el ID del usuario que deseas mostrar

// Realizar una solicitud GET a la API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Crear una plantilla de HTML para mostrar los datos del usuario
        const userHtml = `
            <h1>${data.name}</h1>
            <p><strong>Nombre de usuario:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.phone}</p>
            <p><strong>Website:</strong> <a href="${data.website}" target="_blank">${data.website}</a></p>
            <p><strong>Dirección:</strong> ${data.address.street}, ${data.address.suite}, ${data.address.city}</p>
            <p><strong>Compañía:</strong> ${data.company.name}</p>
        `;

        // Insertar la plantilla de HTML en el elemento userDetailsElement
        userDetailsElement.innerHTML = userHtml;
    })
    .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
    });
