const popform = document.getElementById('popform');
// const val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

popform.addEventListener("submit", (event) =>{
    event.preventDefault()

    const popemail = event.target.elements["popemail"];
    if(!val.test(popemail.value)){
        popemail.classList.add("fallo");
    }   else{
        popemail.classList.remove("fallo");
    }

    const formData = {
        email : popemail
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

