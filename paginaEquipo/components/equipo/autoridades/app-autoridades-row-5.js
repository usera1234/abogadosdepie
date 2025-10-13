import './cards/app-autoridades-gustavo-gerardo-porticella.js'

class AppAutoridadesRow5 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-autoridades-gustavo-gerardo-porticella></app-autoridades-gustavo-gerardo-porticella>

            </div>
        `
    }
}
customElements.define('app-autoridades-row-5', AppAutoridadesRow5)