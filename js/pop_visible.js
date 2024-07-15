document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("pop");
    const popclose = document.getElementById("popclose");
    const form = document.getElementById("popform");


    //Mostrar modal
    function showModal(){
        if (!sessionStorage.getItem("modalClosed")){
            modal.classList.add("visiblepop");
        }
    }

    //Funcion de cerrar y almacenar en el session storage
    function closeModalFunction() {
        modal.classList.remove("visiblepop");
        sessionStorage.setItem("modalClosed","true");
    }

    
    //Mostrar modal a los 5 segundos
    setTimeout(showModal, 5000);

    //Mostart modal al 25%
    window.addEventListener ("scroll" , function(){
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * 0.25)) {
            showModal();
        }
    })
    
    //Cerrar modal
    popclose.addEventListener ("click", function() {
        closeModalFunction();
    })

    //Cerrar modal click fuera

    window.addEventListener("click", function(event) {
        if (!modal.contains(event.target) && event.target !== modal) {
            closeModalFunction();
        }
    });

    //Cerrar modal con ESC
    document.addEventListener("keydown", function(event){
        if (event.key === "Escape") {
            closeModalFunction();
        }
    })

    

})