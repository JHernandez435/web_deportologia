$(document).ready(function () {
  $('#dataTable').DataTable();
});

function cambiarTitulo(nuevoTitulo, event) {
  event.preventDefault(); // Detener la redirección o actualización de la página
  const titulo = document.getElementById('titulo');
  titulo.textContent = nuevoTitulo;
}

function toggleSubMenu(event, menuType) {
  const submenu = event.currentTarget.parentNode.querySelector(`.${menuType}`);
  submenu.classList.toggle('hidden');
}

// Ejemplo de uso
const subMenuLink = document.querySelector('.submenu-link');
subMenuLink.addEventListener('click', (event) => toggleSubMenu(event, 'submenu-type'));