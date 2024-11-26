
/* variables tomadas de la pagina creadas acorde a su id="" */
const toggleButton = document.getElementById("toggleButton");
const toggleButton2 = document.getElementById("toggleButton2");
const videoContainer = document.getElementById("videoContainer");
const imageContainer = document.getElementById("imageContainer");
/* funcion del boton "Pruebalo Ahora" */
toggleButton.addEventListener("click", () => {
    videoContainer.classList.toggle("hidden");
    imageContainer.classList.toggle("hidden");
});
/* funcion del boton "Regresar" */
toggleButton2.addEventListener("click", () => {
    videoContainer.classList.toggle("hidden");
    imageContainer.classList.toggle("hidden");
});
/* funcion permisos de la camara y mostrar en la etiqueta video acorde a su id */
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        const video = document.getElementById("videoElement");
        video.srcObject = stream;
        console.log(stream);
    })
    .catch((error) => {
        console.log(error);
    });

/* Funcion para cambiar la imagen que se seleccione, de las pequeñas */
/* se declara como variable el src original luego en la funcion se 
identifica el div o imagen que se selecciona para usar el src 
de la etiqueta img definimos este src como variable y luego la 
intercambiamos por el que estaba definido como inicial */
var imagenOriginal = "src/img/shirt-brown.png";
var imagenActual = "src/img/shirt-brown.png";
function cambiarImagen(div) {
    var src = div.src;
    var imagen = document.getElementById("imgGrande");
    if (imagenActual === imagenOriginal) {
        imagen.src = src;
        imagen.alt = src;
    } else {
        imagen.src = imagenOriginal;
        imagenActual = imagenOriginal;
    }
}

// Función para validar el campos de formularios
function validarCamposForm(element, errorElement, message) {
    if (element.value.trim() === '') {
        hasError = true;
        showError(errorElement, message);
    } else {
        hasError = false;
        hideError(errorElement);
    }
}