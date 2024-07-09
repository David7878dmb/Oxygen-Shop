//const nombre = document.getElementById('name');
// const email = document.getElementById('email');
const form = document.getElementById('form');
// const check = document.getElementById('check');
const val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const nombre = event.target.elements["nombre"];
    if(nombre.value.length < 2 || nombre.value.length > 100){
        nombre.classList.add("fallo");
    }   else{
        nombre.classList.remove("fallo");
    }

    const email = event.target.elements["email"];
    if(!val.test(email.value)){
        email.classList.add("fallo");
    }   else{
        email.classList.remove("fallo");
    }

    const check = event.target.elements["check"];
    if(!check.checked){
        check.classList.add("fallo2");
    } else{
        check.classList.remove("fallo2");
    }

} ) 





