//validaciones

// Obtener los elementos del formulario
const formNewProduct = document.getElementById('form-new-client');
const code = document.getElementById('code');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const url = document.getElementById('url');
const description = document.getElementById('description');
const btnSubmit = document.getElementById('resgistrar-producto');

// Agregar un evento al botón de envío
btnSubmit.addEventListener('click', () => {
  validarCamposForm(code, codeError, 'Por favor, ingresa un codigo.');
  validarCamposForm(title, titleError, 'Por favor, ingresa un titulo.');
  validarCamposForm(price, priceError, 'Por favor, ingresa un precio.');
  validarCamposForm(category, categoryError, 'Por favor, ingresa una categoria.');
  validarCamposForm(url, urlError, 'Por favor, ingresa una url.');
  validarCamposForm(description, descriptionError, 'Por favor, ingresa una descripcion.');

  if (!hasError) {
    formNewProduct.submit();
  }
});

// Agregar eventos de clic a los campos de entrada
code.addEventListener('change', () => {
  validarCamposForm(code, codeError, 'Por favor, ingresa un codigo.');
});

title.addEventListener('change', () => {
  validarCamposForm(title, titleError, 'Por favor, ingresa un titulo.');
});

price.addEventListener('change', () => {
  validarCamposForm(price, priceError, 'Por favor, ingresa un precio.');
});

category.addEventListener('change', () => {
  validarCamposForm(category, categoryError, 'Por favor, ingresa una categoria.');
});

url.addEventListener('change', () => {
  validarCamposForm(url, urlError, 'Por favor, ingresa una url.');
});

description.addEventListener('change', () => {
  validarCamposForm(description, descriptionError, 'Por favor, ingresa una descripcion.');
});

// Función para mostrar el mensaje de error
function showError(errorElement, errorMessage) {
  errorElement.textContent = errorMessage;
  errorElement.classList.remove('hidden');
}

// Función para ocultar el mensaje de error
function hideError(errorElement) {
  errorElement.classList.add('hidden');
}
