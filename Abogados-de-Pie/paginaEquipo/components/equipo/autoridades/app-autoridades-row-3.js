import './cards/app-autoridades-martina-del-valle-agosti.js'
import './cards/app-autoridades-sofia-matozzi.js'
import './cards/app-autoridades-laura-falabella.js'


class AppAutoridadesRow3 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">
                <app-autoridades-martina-del-valle-agosti></app-autoridades-martina-del-valle-agosti>

                <app-autoridades-sofia-matozzi></app-autoridades-sofia-matozzi>

                <app-autoridades-laura-falabella></app-autoridades-laura-falabella>
            </div>
        `
    }
}
customElements.define('app-autoridades-row-3', AppAutoridadesRow3)