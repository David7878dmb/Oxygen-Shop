document.getElementById('form'),addEventListener('submit', (event) =>{
    event.preventDefault();

    const nombre = event.target.elements["nombre"];
    const email = event.target.elements["email"];

    const formData = {
        nombre : nombre,
        email : email
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        header:{
            'Content-Type' : 'applications/json'
        },
        body: JSON.stringify(formData)
    })

    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Datos enviados exitosamente');
    })

    .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar los datos');
    });
})