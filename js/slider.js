class Slider {
    constructor(imagenes) {
        this.imagenes = imagenes;
        this.contador = 0;
        this.intervalo = null;
        this.imagenElemento = document.querySelector('#slider--img img[name="Imagen"]');
        this.sliderDerecha = document.getElementById("slider--derecho");
        this.sliderIzquierda = document.getElementById("slider--izquierdo");
        this.init();
    }

    init() {
        // Inicializar la imagen
        this.imagenElemento.src = this.imagenes[0];

        // Configurar eventos
        this.sliderDerecha.addEventListener("click", () => {
            this.clearIntervalo();
            this.moverDerecha();
            this.setIntervalo();
        });

        this.sliderIzquierda.addEventListener("click", () => {
            this.clearIntervalo();
            this.moverIzquierda();
            this.setIntervalo();
        });

        // Configurar el intervalo
        this.setIntervalo();
    }

    moverDerecha() {
        this.contador++;
        if (this.contador >= this.imagenes.length) {
            this.contador = 0;
        }
        this.imagenElemento.src = this.imagenes[this.contador];
    }

    moverIzquierda() {
        this.contador--;
        if (this.contador < 0) {
            this.contador = this.imagenes.length - 1;
        }
        this.imagenElemento.src = this.imagenes[this.contador];
    }

    setIntervalo() {
        this.intervalo = setInterval(() => this.moverDerecha(), 5000);
    }

    clearIntervalo() {
        clearInterval(this.intervalo);
    }
}

// Uso de la clase Slider
const imagenes = [
    "./style/slider/gato.jpg",
    "./style/slider/gato1.jpg",
    "./style/slider/gato2.jpg",
    "./style/slider/gato3.jpg",
    "./style/slider/gato4.jpg",
    "./style/slider/gato5.jpg"
];

// Inicializar el slider
new Slider(imagenes);

