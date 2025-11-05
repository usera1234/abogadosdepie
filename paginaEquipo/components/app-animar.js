// paginaEquipo/components/app-animar.js
export function animar(targets) {
  // Normalizamos a array de elementos
  let elements = [];
  if (typeof targets === 'string') {
    elements = [...document.querySelectorAll(targets)];
  } else if (targets instanceof Element) {
    elements = [targets];
  } else if (targets && typeof targets[Symbol.iterator] === 'function') {
    elements = [...targets];
  } else {
    return;
  }

  // Estado inicial (evita “flash” sin animar)
  elements.forEach(el => el.classList.add('reveal'));

  // Animar todos los elementos inmediatamente al cargar la página
  window.addEventListener('load', () => {
    elements.forEach(el => {
      el.classList.add('animar');
      el.classList.remove('reveal');
    });
  });
}
