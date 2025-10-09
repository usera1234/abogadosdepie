import './equipo/list-socios.js';
import './equipo/list-asociados.js';
import './equipo/list-colaboradores.js';
import './equipo/list-staff.js';

class AppEquipoList extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="equipoListContainer">
                <div class="equipoListNav">
                    <button id="btn-socios" class="equipoListNavItem">Socios</button>
                    <button id="btn-asociados" class="equipoListNavItem">Asociados</button>
                    <button id="btn-colaboradores" class="equipoListNavItem">Colaboradores</button>
                    <button id="btn-staff" class="equipoListNavItem">Staff</button>
                </div>
                <div id="list-container">
                </div>
            </div>
        `
    }
    connectedCallback() {
        const listContainer = this.querySelector('#list-container');
        const sociosBtn = this.querySelector('#btn-socios');
        const asociadosBtn = this.querySelector('#btn-asociados');
        const colaboradoresBtn = this.querySelector('#btn-colaboradores');
        const staffBtn = this.querySelector('#btn-staff');    

        sociosBtn.addEventListener('click', () => {
            // Cuando se hace clic:
            // a. Limpiamos el área de contenido.
            listContainer.innerHTML = '';
            // b. Insertamos el componente <list-socios> completo.
            listContainer.innerHTML = '<list-socios></list-socios>';
        });

        asociadosBtn.addEventListener('click', () => {
            // Cuando se hace clic:
            // a. Limpiamos el área de contenido.
            listContainer.innerHTML = '';
            // b. Insertamos el componente <list-socios> completo.
            listContainer.innerHTML = '<list-asociados></list-asociados>';
        });

        colaboradoresBtn.addEventListener('click', () => {
            // Cuando se hace clic:
            // a. Limpiamos el área de contenido.
            listContainer.innerHTML = '';
            // b. Insertamos el componente <list-socios> completo.
            listContainer.innerHTML = '<list-colaboradores></list-colaboradores>';
        });

        staffBtn.addEventListener('click', () => {
            // Cuando se hace clic:
            // a. Limpiamos el área de contenido.
            listContainer.innerHTML = '';
            // b. Insertamos el componente <list-socios> completo.
            listContainer.innerHTML = '<list-staff></list-staff>';
        });
        

    }
}

customElements.define('app-equipo-list', AppEquipoList);
            
        
