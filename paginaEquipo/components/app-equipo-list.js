import './equipo/list-socios.js';

class AppEquipoList extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="equipoListContainer">
                <div class="equipoListNav">
                    <button class="equipoListNavItem">Socios</button>
                    <button class="equipoListNavItem">Asociados</button>
                    <button class="equipoListNavItem">Colaboradores</button>
                    <button class="equipoListNavItem">Staff</button>
                </div>
            </div>
        `
    }
}



customElements.define('app-equipo-list', AppEquipoList);
            
        
