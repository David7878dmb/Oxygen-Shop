let imagenes = ["style/slider/gato.jpg",
    "style/slider/gato1.jpg",
    "style/slider/gato2.jpg",
    "style/slider/gato3.jpg",
    "style/slider/gato4.jpg",
    "style/slider/gato5.jpg"
];

document.Imagen.src = imagenes[0];

let contador = 0;
let sliderDerecha =  document.getElementById("slider--derecho");
let sliderIzquierda = document.getElementById("slider--izquierdo");


function moverDerecha(){
    contador++;
    if (contador > imagenes.length - 1){
        contador = 0;
    }
    document.Imagen.src = imagenes[contador];
}
let intervalo = setInterval(moverDerecha,5000);
sliderDerecha.addEventListener("click", function(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 5000);
});



function moverIzquierda(){
    contador--;
    if (contador < 0){
        contador = imagenes.length - 1;
    }
    document.Imagen.src = imagenes[contador];
}
sliderIzquierda.addEventListener("click", function(){
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverDerecha, 5000);
});
