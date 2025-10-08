import './components/app-equipo-header.js';
import './components/app-equipo-banner.js';

class AppEquipo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="equipoContainer">
              <app-equipo-header></app-equipo-header>

               <app-equipo-banner></app-equipo-banner>
            </div>
        `
    }
}
customElements.define('app-equipo', AppEquipo);