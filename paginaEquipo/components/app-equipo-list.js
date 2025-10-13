import './equipo/app-list-comisiones.js';
import './equipo/app-list-autoridades.js';
import './equipo/app-list-secretarias.js';

class AppEquipoList extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="equipoListContainer">
                <div class="equipoListNav">
                    <button id="btn-autoridades" class="equipoListNavItem nav-item-clicked">Autoridades</button>
                    <button id="btn-secretarias" class="equipoListNavItem">Secretarías</button>
                    <button id="btn-comisiones" class="equipoListNavItem">Comisiones</button>
                </div>
                <div id="list-container">
                    <app-list-autoridades></app-list-autoridades>
                </div>
            </div>
        `
    }
    connectedCallback() {
        const listContainer = this.querySelector('#list-container');
        const autoridadesBtn = this.querySelector('#btn-autoridades');
        const secretariasBtn = this.querySelector('#btn-secretarias');
        const comisionesBtn = this.querySelector('#btn-comisiones');

        autoridadesBtn.addEventListener('click', () => {
            listContainer.innerHTML = '';
            listContainer.innerHTML = '<app-list-autoridades></app-list-autoridades>';
            entry.target.classList.add('nav-item-clicked');
            io.unobserve(entry.target);     
        });

        secretariasBtn.addEventListener('click', () => {
            listContainer.innerHTML = '';
            listContainer.innerHTML = '<app-list-secretarias></app-list-secretarias>';
        });

        comisionesBtn.addEventListener('click', () => {
            listContainer.innerHTML = '';
            listContainer.innerHTML = '<app-list-comisiones></app-list-comisiones>';
        });

        const targets = [autoridadesBtn, secretariasBtn, comisionesBtn].filter(Boolean);

        targets.forEach(boton => {
    
            boton.addEventListener('click', () => {
                targets.forEach(otroBoton => {
                    otroBoton.classList.remove('nav-item-clicked');
                });                
                boton.classList.add('nav-item-clicked');
                
                console.log(`Se hizo clic en ${boton.id}, se agregó la clase.`);
            });
        });

    }
}

customElements.define('app-equipo-list', AppEquipoList);
            
        
