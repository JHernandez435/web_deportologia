//validaciones

// Obtener los elementos del formulario
const form = document.getElementById('form-new-client');
const nameNewUser = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const address = document.getElementById('address');
const password = document.getElementById('password');
const botonEnviar = document.getElementById('resgistrar-usuario');

let hasError = false;

// Agregar un evento al botón de envío
botonEnviar.addEventListener('click', () => {
  validarCamposForm(nameNewUser, nameError, 'Por favor, ingresa un nombre.');
  validarCamposForm(lastname, lastnameError, 'Por favor, ingresa un apellido.');
  validarCamposForm(email, emailError, 'Por favor, ingresa un correo electrónico.');
  validarCamposForm(contact, contactError, 'Por favor, ingresa un número de contacto.');
  validarCamposForm(address, addressError, 'Por favor, ingresa una dirección.');
  validarCamposForm(password, passwordError, 'Por favor, ingresa una contraseña.');

  if (!hasError) {
    form.submit();
  }
});

// Agregar eventos de clic a los campos de entrada
nameNewUser.addEventListener('change', () => {
  validarCamposForm(nameNewUser, nameError, 'Por favor, ingresa un nombre.');
});

lastname.addEventListener('change', () => {
  validarCamposForm(lastname, lastnameError, 'Por favor, ingresa un apellido.');
});

email.addEventListener('change', () => {
  validarCamposForm(email, emailError, 'Por favor, ingresa un correo electrónico.');
});

contact.addEventListener('change', () => {
  validarCamposForm(contact, contactError, 'Por favor, ingresa un número de contacto.');
});

address.addEventListener('change', () => {
  validarCamposForm(address, addressError, 'Por favor, ingresa una dirección.');
});

password.addEventListener('change', () => {
  validarCamposForm(password, passwordError, 'Por favor, ingresa una contraseña.');
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
