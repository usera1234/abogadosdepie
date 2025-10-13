import './autoridades/app-autoridades-row-1.js'
import './autoridades/app-autoridades-row-2.js'
import './autoridades/app-autoridades-row-3.js'
import './autoridades/app-autoridades-row-4.js'
import './autoridades/app-autoridades-row-5.js'

class AppListAutoridades extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer" style="display: flex">

                <app-autoridades-row-1></app-autoridades-row-1>

                <app-autoridades-row-2></app-autoridades-row-2>

                <app-autoridades-row-3></app-autoridades-row-3>

                <app-autoridades-row-4></app-autoridades-row-4>

                <app-autoridades-row-5></app-autoridades-row-5>

            </div>
        `
    }
}
customElements.define('list-autoridades', AppListAutoridades);    