import './cards/app-autoridades-ezequiel-dominguez.js'
import './cards/app-autoridades-fernando-felder.js'
import './cards/app-autoridades-juan-pablo-farchi.js'


class AppAutoridadesRow2 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">
                <app-autoridades-ezequiel-dominguez></app-autoridades-ezequiel-dominguez>

                <app-autoridades-fernando-felder></app-autoridades-fernando-felder>

                <app-autoridades-juan-pablo-farchi></app-autoridades-juan-pablo-farchi>
            </div>
        `
    }
}
customElements.define('app-autoridades-row-2', AppAutoridadesRow2)