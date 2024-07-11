document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("pop");
    const close = document.getElementById("close");
    const form = document.getElementById("popform");


    //Mostrar modal

    function showModal(){
        if (!sessionStorage.getItem("modalClosed")){
            modal.classList.add("visible");
        }
    }

    //Funcion de cerrar y almacenar en el session storage

    function closeModalFunction() {
        modal.classList.remove("visible");
        sessionStorage.setItem("modalClosed","true");
    }

    
    //Mostrar modal a los 5 segundos
    setTimeout(showModal, 5000);

    //Mostart modal al 25%
    window.onscroll = function(){
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * 0.25)) {
            showModal();
        }
    }
    
    //Cerrar modal
    close.onclick = function() {
        closeModalFunction();
    }

    //Cerrar modal click fuera
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    }

    //Cerrar modal con ESC

    document.addEventListener("keydown", function(event){
        if (event.key === "Escape") {
            closeModalFunction();
        }
    })

    

})