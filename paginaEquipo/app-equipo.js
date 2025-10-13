import './components/app-equipo-header.js';
import './components/app-equipo-banner.js';
import './components/app-equipo-list.js';

class AppEquipo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="equipoContainer">
              <app-equipo-header></app-equipo-header> <!-- file:///C:/Proyectos/abogadosdepie/Abogados-de-Pie/paginaEquipo/components/app-equipo-header.js -->

              <app-equipo-banner></app-equipo-banner> <!-- file:///C:/Proyectos/abogadosdepie/Abogados-de-Pie/paginaEquipo/components/app-equipo-banner.js -->

              <app-equipo-list></app-equipo-list>     <!-- file:///C:/Proyectos/abogadosdepie/Abogados-de-Pie/paginaEquipo/components/app-equipo-list.js -->
            </div>
        `
    }
}
customElements.define('app-equipo', AppEquipo);